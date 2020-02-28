<template>
<v-container fluid>
  <section id="hero">
    <v-row no-gutters>
      <v-img
        :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
        src="@/assets/frank-bw.png"
      >
        <v-theme-provider dark>
          <v-container fill-height>
            <v-row
              align="center"
              class="white--text mx-auto"
              justify="center"
            >
              <v-col
                class="white--text text-center"
                cols="12"
                tag="h1"
              >
                <span
                  class="font-weight-light amber--text"
                  :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                >
                  WELCOME TO
                </span>

                <br>

                <span
                  :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-4']"
                  class="font-weight-black amber--text"
                >
                  CYDRASIL
                </span>
              </v-col>

              <v-btn
                class="align-self-end"
                color="amber"
                outlined
                fab
                @click="$vuetify.goTo('#about-me')"
              >
                <v-icon>mdi-chevron-double-down</v-icon>
              </v-btn>
            </v-row>
          </v-container>
        </v-theme-provider>
      </v-img>
    </v-row>
  </section>

  <section id="about-me">
      <div class="py-4"></div>

      <v-container class="text-center">
        <h2 class="display-2 font-weight-bold mb-3">ABOUT CYDRASIL</h2>

        <v-responsive
          class="mx-auto mb-8"
          width="56"
        >
          <v-divider class="mb-1"></v-divider>

          <v-divider></v-divider>
        </v-responsive>

        <v-responsive
          class="mx-auto title font-weight-light mb-8"
          max-width="1080"
        >
         Cydrasil is a sequence database, alignment, and phylogenetic tree containing 1494 cyanobacterial 16S rRNA gene sequences, downloaded from NCBI and IMG and used for placement of sequence variants (sOTUs) from 16S rRNA gene amplicon studies. The reference alignment was generated using SSUALIGN with default parameters. This aligner uses a profile-based alignment strategy, in which each target sequence is aligned independently to a covariance model that uses the 16S rRNA gene secondary structure, and then masked using SSUMASK with the automatically computed alignment confidence values (posterior probabilities). A maximum-likelihood phylogenetic tree was then generated using the RAxML-HPC2 Workflow on XSEDE (8.2.12) on the CIPRES Science Gateway. The ML + thorough bootstrap workflow was used with the following modified parameters: 1000 bootstraps (-N 1000) and the GTRGAMMA model. All other parameters were left at default values.
        </v-responsive>

        <v-avatar
          class="mb-12"
          size="128"
        >
          <v-img src="@/assets/cydrasil-logo-01.png"  ></v-img>
        </v-avatar>

        <div></div>

        <v-btn
          color="amber"
          href="https://github.com/FGPLab/cydrasil"
          large
        >
          <span class="grey--text text--darken-3 font-weight-bold">
            Cydrasil on GitHub
          </span>
        </v-btn>
      </v-container>

      <div class="py-12"></div>
    </section>
</v-container>

</template>

<script>
export default {

}
</script>

<style>

</style>
