import boto3
import os
import subprocess
import sys
import shutil
import uuid
from urllib.parse import unquote_plus

os.environ['PATH']

#Set the cydrasil reference database filepaths and core count
ref_aln_fa = 'cydrasil-v2-aln.afa'
ref_aln_phy = 'cydrasil-v2-aln.phy'
ref_tre = 'cydrasil-v2-tree.nwk'
ref_mdl = 'cydrasil-v2.bestModel' 
cydrasil_version = '2'
cores = '2'

#Set AWS clients
s3_client = boto3.client('s3')
db_client = boto3.client('dynamodb')

def s3_file_paths(event):
    for record in event['Records']:
        bucket = record['s3']['bucket']['name']
        key = unquote_plus(record['s3']['object']['key'])
        upload_key = key.replace('queryFiles', 'placementFiles').replace('.fasta', '-cy_v'+cydrasil_version+'.jplace')
        upload_path = 'placements/epa_result.jplace'

    return bucket, key, upload_key, upload_path

#Move binaries to be available to function and correct permissions
def move_binaries():

    shutil.copy('papara_static_x86_64', '/tmp/papara_static_x86_64')
    shutil.copy('epa-ng', '/tmp/epa-ng')
    os.system('chmod 755 /tmp/papara_static_x86_64')
    os.system('chmod 755 /tmp/epa-ng')

    shutil.copy('cydrasil-v2-aln.afa', '/tmp/cydrasil-v2-aln.afa')
    shutil.copy('cydrasil-v2-aln.phy', '/tmp/cydrasil-v2-aln.phy')
    shutil.copy('cydrasil-v2-tree.nwk', '/tmp/cydrasil-v2-tree.nwk')
    shutil.copy('cydrasil-v2.bestModel', '/tmp/cydrasil-v2.bestModel')
    os.system('chmod 755 /tmp/cydrasil-v2-aln.afa')
    os.system('chmod 755 /tmp/cydrasil-v2-aln.phy')
    os.system('chmod 755 /tmp/cydrasil-v2-tree.nwk')
    os.system('chmod 755 /tmp/cydrasil-v2.bestModel')
    return

#Creates sub directories for file management and epa-ng output requirement
def directory_creation():

    placement_dir = '/tmp/placements'

    os.mkdir(placement_dir)

    return placement_dir

#Workflow function for papara alignment 
def papara_alignment_workflow():

    os.chdir('/tmp/')

    os.system('./papara_static_x86_64 -t cydrasil-v2-tree.nwk -s cydrasil-v2-aln.phy -q user_query.fasta -r -n lambda-run')

    os.system('./epa-ng --split cydrasil-v2-aln.phy papara_alignment.lambda-run')

    return

#Placement workflow with .jplace output
def epa_ng_placement_workflow(placement_directory):

    os.system('./epa-ng -s cydrasil-v2-aln.afa -t cydrasil-v2-tree.nwk -q query.fasta --model cydrasil-v2.bestModel -w placements -T 2')

    return

def cleanup():
    #User query
    os.system('rm /tmp/user_query.fasta')

    #PaPaRa output
    os.system('rm /tmp/papara_alignment.lambda-run')
    os.system('rm /tmp/papara_log.lambda-run')
    os.system('rm /tmp/papara_quality.lambda-run')

    #epa-ng split files
    os.system('rm /tmp/query.fasta')
    os.system('rm /tmp/reference.fasta')

    #epa-ng placements
    os.system('rm /tmp/placements/epa_info.log')
    os.system('rm /tmp/placements/epa_result.jplace')
    os.system('rm -r /tmp/placements/')

    return

move_binaries()
placement_directory = directory_creation()

def lambda_handler(event, context):
    bucket, key, upload_key, upload_path = s3_file_paths(event)
    s3_client.download_file(bucket, key, '/tmp/user_query.fasta')
    papara_alignment_workflow()
    epa_ng_placement_workflow(placement_directory)
    s3_client.upload_file(upload_path, bucket, upload_key)
    cleanup()
    #delete query file from S3
    s3_client.delete_object(Bucket=bucket, Key=key)
    
    return {'statusCode':200,
        'body':'Cydrasil Placement success!'}