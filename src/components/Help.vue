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
              Help & FAQ
          </h1>
          <v-divider/>
        </v-container>
      </div>
    </section>
    <section
      id="faq"
      class="mt-12"
    >
      <div>
        <v-card>
          <v-card-title>
            FAQ
          </v-card-title>
          <v-card-subtitle
            class="font-weight-medium"
          >
            Which version of Cydrasil did I use?
          </v-card-subtitle>
          <v-card-text>
            Each output from the Cydrasil tool has a “-cy_vX” tag at the end of the file. The number in place of the X, following the v contains the Cydrasil database version that was used to place your sequences.
          </v-card-text>
            <v-card-subtitle
              class="font-weight-medium"
            >
              Is there a tutorial for interpreting my results?
          </v-card-subtitle>
          <v-card-text>
            <a
              href="https://youtu.be/FynML7Mu26U?t=2337"
            >
              Link to Webinar
            </a>
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
