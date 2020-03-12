import subprocess
import os
import shutil

#Set the cydrasil reference database filepaths and core count
ref_aln_fa = "/cydrasil-ref/cydrasil-v2-aln.afa"
ref_tre = "/cydrasil-ref/cydrasil-v2-tree.nwk"
ref_mdl = "/cydrasil-ref/cydrasil-v2.bestModel"
output_dir = "cydrasil-placements"
cores = "2"

working_dir = os.getcwd()

#Creates sub directories for file management and epa-ng output requirement
def directory_creation():

    cydrasil_dir = working_dir+"/"+output_dir
    placement_dir = cydrasil_dir+"/"+"placements"

    os.mkdir(cydrasil_dir)

    os.mkdir(placement_dir)

    return cydrasil_dir, placement_dir

#Workflow function for papara alignment 
def papara_alignment_workflow(cydrasil_directory):

    ssu_aln_dir = cydrasil_directory + "/aln"
    query_mask_aln = ssu_aln_dir + "/aln.bacteria.mask.stk"
    query_aln_afa = ssu_aln_dir + "/query-mask-aln.afa"

    subprocess.run(["ssu-prep", "-x query.fasta",
                    ssu_aln_dir, cores])

    subprocess.run(["bash", "aln.ssu-align.sh"])

    subprocess.run(["rm", "aln.ssu-align.sh"])

    subprocess.run(["ssu-mask", "-d", ssu_aln_dir])

    subprocess.run(["ssu-esl-reformat", "-o", query_aln_afa, "afa", query_mask_aln])

    return query_aln_afa


def epa_ng_placement_workflow(query_msk_aln_afa, placement_directory):

    subprocess.run(["./epa-ng", "-s", ref_aln_fa, "-t", ref_tre, "-q", query_msk_aln_afa, \
                    "--model", ref_mdl, "-w", placement_directory, "-T", cores])

    return
 

def main():

    cydrasil_directory, placement_directory = directory_creation()

    query_msk_aln_afa = papara_alignment_workflow(cydrasil_directory)

    epa_ng_placement_workflow(query_msk_aln_afa, placement_directory)

    return


if __name__ == "__main__":
    main()
