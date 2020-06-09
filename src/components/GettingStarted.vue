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
            Powered by PaPaRa and epa-ng, place your 16S rRNA gene sequences on the Cydrasil reference tree. You will need an account to run the placements on our servers.
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
            Powered by PaPaRa and epa-ng, place your 16S rRNA gene sequences on the Cydrasil reference tree, or view your previous placement runs.
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
            I want to learn how to analyze my placements with iTOL
          </v-card-title>
          <v-card-text>
            A searchable database of sequences is available in Database Details, including the full 16S sequence and any warnings about the entry!
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
            I want to check Cydrasil for a sequence
          </v-card-title>
          <v-card-text>
            A searchable database of sequences is available in Database Details, including the full 16S sequence and any warnings about the entry!
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
            I want to download the Cydrasil files for my own analysis
          </v-card-title>
          <v-card-text>
            The current version of the Cydrasil database and all previous versions are available on GitHub!
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
