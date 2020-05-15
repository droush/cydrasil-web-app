<template>
   <v-container fluid>
   <section
      id="database-details-info"
      class="grey lighten-3"
      >
      <div class="py-2 ma-0"
      >
      <v-container class="text-center">
        <h1
        class="display-3 grey--text text--darken-3"
        >
        About Cydrasil</h1>

        <v-divider/>
        </v-container>
      </div>
        </section>
        <section>
            <div>
                <v-card
                outlined
                class="pa-1">
                    <v-card-title>
                        Cydrasil Philosophy
                    </v-card-title>
                    <v-card-text>
                    </v-card-text>
                </v-card>
            </div>
            <div>
                <v-card
                outlined
                class="pa-1">
                    <v-card-title>
                        Cydrasil Methodology
                    </v-card-title>
                    <v-card-text>
                        Cydrasil is a sequence database, alignment, and phylogenetic tree containing 1494 cyanobacterial 16S rRNA gene sequences, downloaded from NCBI and IMG and used for placement of sequence variants (sOTUs) from 16S rRNA gene amplicon studies. The reference alignment was generated using SSUALIGN1 with default parameters. This aligner uses a profile-based alignment strategy, in which each target sequence is aligned independently to a covariance model that uses the 16S rRNA gene secondary structure, and then masked using SSUMASK with the automatically computed alignment confidence values (posterior probabilities). A maximum-likelihood phylogenetic tree was then generated using the RAxML-HPC22 Workflow on XSEDE (8.2.12) on the CIPRES Science Gateway3. The ML + thorough bootstrap workflow was used with the following modified parameters: 1000 bootstraps (-N 1000) and the GTRGAMMA model. All other parameters were left at default values.
                    </v-card-text>
                </v-card>
            </div>
            <div>
                <v-card
                outlined
                class="pa-1">
                    <v-card-title>
                        Submit Sequences to the Cydrasil Database
                    </v-card-title>
                    <v-card-text>
                        Currently, we are taking sequence submissions through our contact email at (contact AT cydrasil DOT org). We are only accepting 16S rRNA gene sequences with lengths greater than 1100 base pairs.                  </v-card-text>
                </v-card>
            </div>
            <div>
                <v-card
                outlined
                class="pa-1">
                    <v-card-title>
                        Contact Us
                    </v-card-title>
                    <v-card-text>
                        If you have any comments, questions or concerns, please feel free to email us at (contact AT cydrasil DOT org)
                    </v-card-text>
                </v-card>
            </div>
   </section>
   </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>
