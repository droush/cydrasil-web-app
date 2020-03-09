import sys
import subprocess
import os
import shutil

working_dir = os.getcwd()

ref_aln_fa = working_dir + "/cydrasil-ref/cydrasil-v2-aln.afa"
ref_aln_stk = working_dir + "/cydrasil-ref/cydrasil-v2-aln.stk"
ref_tre = working_dir + "/cydrasil-ref/cydrasil-v2-tree.nwk"
ref_mdl = working_dir + "/cydrasil-ref/cydrasil-v2.bestModel"
output_dir = "cydrasil-placements"
cores = "8"

# Function for getting the input and output file names 
def filename_collection():

    for i, x in enumerate(sys.argv):

        if x == "--query-seqs":
            input_file = sys.argv[i+1]

    return input_file


# Function for checking if the input is in FASTA format or not
def fasta_file_check(input_file):

    with open(input_file, "rU") as input_seqs:

        firstHeader = input_seqs.readline().rstrip()
        
        if firstHeader[0] == ">":
            return
        else:
            print("Query sequences must be in FASTA format!")
            sys.exit(1)


def directory_creation():

    cydrasil_dir = working_dir+"/"+output_dir
    placement_dir = cydrasil_dir+"/"+"placements"

    os.mkdir(cydrasil_dir)

    os.mkdir(placement_dir)

    return cydrasil_dir, placement_dir


def sanitize_file_name(cydrasil_directory, input_file):

    input_path = working_dir+"/"+input_file
    query_seq_path = cydrasil_directory+"/query_sequences.fasta"

    shutil.copy2(input_path, query_seq_path)

    return query_seq_path


def ssu_alignment_workflow(query_seqs_path):

    ssu_aln_dir = output_dir + "/aln"
    query_mask_aln = ssu_aln_dir + "/aln.bacteria.mask.stk"
    query_aln_afa = ssu_aln_dir + "/query-mask-aln.afa"

    subprocess.run(["ssu-prep", "-x", query_seqs_path,
                    ssu_aln_dir, cores])

    subprocess.run(["bash", "aln.ssu-align.sh"])

    subprocess.run(["rm", "aln.ssu-align.sh"])

    subprocess.run(["ssu-mask", "-d", ssu_aln_dir])

    subprocess.run(["ssu-esl-reformat", "-o", query_aln_afa, "afa", query_mask_aln])

    return query_aln_afa


def placement_workflow(query_msk_aln_afa, placement_directory):

    subprocess.run(["epa-ng", "-s", ref_aln_fa, "-t", ref_tre, "-q", query_msk_aln_afa, \
                    "--model", ref_mdl, "-w", placement_directory, "-T", cores])

    return
 

def main():

    input_file = filename_collection()

    fasta_file_check(input_file)

    cydrasil_directory, placement_directory = directory_creation()

    query_seqs_path = sanitize_file_name(cydrasil_directory, input_file)

    query_msk_aln_afa = ssu_alignment_workflow(query_seqs_path)

    placement_workflow(query_msk_aln_afa, placement_directory)

    return


if __name__ == "__main__":
    main()
