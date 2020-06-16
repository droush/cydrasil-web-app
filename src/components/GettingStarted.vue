<template>
  <v-container fluid>
    <section
      id="gettingstarted-header"
      class="grey lighten-3"
    >
      <div class="pt-2 pb-0 ma-0"
      >
        <v-container class="text-center">
          <h1
            class="display-3 grey--text text--darken-3"
          >
            Getting Started with Cydrasil
          </h1>
          <v-divider/>
        </v-container>
      </div>
    </section>
    <div />
    <section
      id="gettingstarted-options"
      class="mt-1"
    >
      <div class="d-flex justify-center">
        <v-card
        id="placeNotLoggedIn"
        outlined
        class="ma-1 grey--text text--darken-3"
        min-width="600"
        max-width="600"
        v-if=!getLoggedInStatus
        >
          <v-card-title >
            Use the Cydrasil Web App to Place Sequences
          </v-card-title>
          <v-card-text>
            Powered by <a href="https://cme.h-its.org/exelixis/web/software/papara/index.html" target="_blank">PaPaRa</a> and
            <a href="https://github.com/Pbdas/epa-ng" target="_blank">EPA-ng</a>, place your 16S rRNA gene sequences on the Cydrasil reference tree.
            You will need an account to run the placements on our servers.
          </v-card-text>
          <v-card-actions
            class="justify-center"
          >
            <v-btn
            small
            to="/login"
            color="amber"
            class="grey--text text--darken-3 font-weight-bold"
            depressed
            >
              Login or Create an Account
            </v-btn>
          </v-card-actions>
        </v-card>
        <v-card
          id="placeLoggedIn"
          outlined
          class="ma-1 grey--text text--darken-3"
          min-width="600"
          max-width="600"
          v-if=getLoggedInStatus
        >
          <v-card-title >
            Place my sequences on Cydrasil or view previous runs
          </v-card-title>
          <v-card-text>
            Powered by <a href="https://cme.h-its.org/exelixis/web/software/papara/index.html" target="_blank">PaPaRa</a> and
            <a href="https://github.com/Pbdas/epa-ng" target="_blank">EPA-ng</a>, place your 16S rRNA gene sequences on the Cydrasil reference tree.
            You will need an account to run the placements on our servers.
          </v-card-text>
          <v-card-actions
            class="justify-center"
          >
            <v-btn
              small
              to="/MyPlacements"
              color="amber"
              class="grey--text text--darken-3 font-weight-bold"
              depressed
            >
              View My Placement Runs
            </v-btn>
            <v-btn
              small
              to="/place"
              color="amber"
              class="grey--text text--darken-3 font-weight-bold"
              depressed
            >
              Place Sequences on Cydrasil
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
      <div
        class="d-flex justify-center"
      >
        <v-card
          outlined
          class="ma-1 grey--text text--darken-3"
          min-width="600"
          max-width="600"
        >
          <v-card-title>
            I want to learn how to analyze and visualize my placements.
          </v-card-title>
          <v-card-text>
            Sequence placement results are visualized using <a href="https://itol.embl.de/" target="_blank">iTOL</a>.
            We have a step-by-step guide on analyzing your results with iTOL.
          </v-card-text>
          <v-card-actions
            class="justify-center"
          >
            <v-btn
              small
              to="/HowToAnalyze"
              color="amber"
              class="grey--text text--darken-3 font-weight-bold"
              depressed
            >
              How to Analyze with iTOL
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
      <div
        class="d-flex justify-center"
      >
        <v-card
          outlined
          class="ma-1 grey--text text--darken-3"
          min-width="600"
          max-width="600"
        >
          <v-card-title>
            What sequences are found in the Cydrasil reference package?
          </v-card-title>
          <v-card-text>
            A complete searchable database of sequences and other meta-data is available in Database Details. Each entry includes
            the representative 16S rRNA gene sequence and any warnings about the entry.
          </v-card-text>
          <v-card-actions
            class="justify-center"
          >
            <v-btn
              small
              to="/database"
              color="amber"
              class="grey--text text--darken-3 font-weight-bold"
              depressed
            >
              Database Details
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
      <div
        class="d-flex justify-center"
      >
        <v-card
          outlined
          class="ma-1 grey--text text--darken-3"
          min-width="600"
          max-width="600"
        >
          <v-card-title>
            I want to download the Cydrasil reference package for my own analysis.
          </v-card-title>
          <v-card-text>
            All versions of the Cydrasil reference package are available on GitHub and include a README describing how to use
            Cydrasil for a local analysis.
          </v-card-text>
          <v-card-actions
            class="justify-center"
          >
            <v-btn
              small
              href="https://github.com/FGPLab/cydrasil"
              color="amber"
              class="grey--text text--darken-3 font-weight-bold"
              depressed
              target="_blank"
            >
              Cydrasil on GitHub
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </section>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters(['getLoggedInStatus'])
}
</script>

<style>

</style>
