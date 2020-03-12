import subprocess
import os
import shutil

#Set the cydrasil reference database filepaths and core count
ref_aln_fa = "/cydrasil-ref/cydrasil-v2-aln.afa"
ref_aln_phy = "/cydrasil-ref/cydrasil-v2-aln.phy"
ref_tre = "/cydrasil-ref/cydrasil-v2-tree.nwk"
ref_mdl = "/cydrasil-ref/cydrasil-v2.bestModel"
cores = "2"

working_dir = os.getcwd()

#Creates sub directories for file management and epa-ng output requirement
def directory_creation():

    placement_dir = working_dir+"/"+"placements"

    os.mkdir(placement_dir)

    return placement_dir

#Workflow function for papara alignment 
def papara_alignment_workflow():

    subprocess.run(["./papara_static_x86_64", "-t", ref_tre, "-s", ref_aln_phy, \
                    "-q user_query.fasta -j", cores, "-r -n lambda-run"])

    subprocess.run(["./epa-ng --split", ref_aln_phy, "papara_alignment.lambda-run"])

    return


def epa_ng_placement_workflow(placement_directory):

    subprocess.run(["./epa-ng", "-s", ref_aln_fa, "-t", ref_tre, "-q query.fasta" \
                    "--model", ref_mdl, "-w", placement_directory, "-T", cores])

    return
 

def main():

    placement_directory = directory_creation()

    papara_alignment_workflow()

    epa_ng_placement_workflow(placement_directory)

    return


if __name__ == "__main__":
    main()
