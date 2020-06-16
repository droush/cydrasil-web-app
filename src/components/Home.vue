<template>
  <v-container
    fluid
  >
    <section
      id="hero"
      class="grey lighten-3"
    >
      <v-row
        no-gutters
      >
        <v-theme-provider
          dark
        >
          <v-container
            fill-height
          >
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
                  <v-img
                    src="@/assets/cydrasil-logo-with-text.png"
                  >
                  </v-img>
                </span>
              </v-col>
            </v-row>
          </v-container>
        </v-theme-provider>
      </v-row>
    </section>
    <section
      id="about-me"
    >
      <div
        class="py-4"
      >
      </div>
      <v-container
        class="text-center"
      >
        <v-responsive
          class="mx-auto title grey--text text--darken-3 font-weight-light mb-8"
          max-width="1080"
        >
          Cydrasil is a comprehensive manually curated Cyanobacterial reference package containing over 1400 16S rRNA gene
          sequences with lengths exceeding 1100 base pairs. Cydrasil offers a curated alignment and a maximum-likelihood
          phylogenetic tree that can be used for sequence placement or <i>de novo</i> phylogenetic reconstructions.
          Cydrasil utilizes phylogenetic placement to give you a complete phylogenetic perspective of your new isolate or amplicon study.
        </v-responsive>
        <div></div>
        <v-btn
          color="amber"
          to="/gettingstarted"
          large
        >
          <span
            class="grey--text text--darken-3 font-weight-bold"
          >
            Get started with Cydrasil
          </span>
        </v-btn>
      </v-container>
      <div
        class="py-4"
      >
      </div>
    </section>
    <section
      id="features"
      class="grey lighten-3"
    >
      <div
        class="py-4"
      >
      </div>
        <v-container
          class="text-center"
        >
          <h2
            class="display-2 grey--text text--darken-3 font-weight-bold mb-3"
          >
            THE 3 C'S OF THE CYDRASIL PROJECT
          </h2>
          <v-responsive
            class="mx-auto mb-12"
            width="56"
          >
            <v-divider
              class="mb-1"
            >
            </v-divider>
            <v-divider></v-divider>
          </v-responsive>
          <v-row>
            <v-col
              v-for="({ icon, title, text }, i) in features"
              :key="i"
              cols="12"
              md="4"
            >
              <v-card
                class="py-12 px-4"
                color="grey lighten-5"
                flat
              >
                <v-theme-provider
                  dark
                >
                  <div>
                    <v-avatar
                      color="amber"
                      size="88"
                    >
                      <v-icon
                        large
                        v-text="icon"
                        color="grey darken-3"
                      ></v-icon>
                    </v-avatar>
                  </div>
                </v-theme-provider>
                <v-card-title
                  class="justify-center grey--text text--darken-3 font-weight-black text-uppercase"
                  v-text="title"
                ></v-card-title>
                <v-card-text
                  class="subtitle-1 grey--text text--darken-3"
                  v-text="text"
                >
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      <div class="py-12"></div>
    </section>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      features: [
        {
          icon: 'mdi-hiking',
          title: 'Comprehensive',
          text: 'Cydrasil contains Cyanobacterial representatives from a wide range of habitats, providing extensive phylogenetic coverage for your analysis.'
        },
        {
          icon: 'mdi-magnify',
          title: 'Curated',
          text: 'All sequences in Cydrasil have been manually checked for sequencing and taxonomic errors. If a sequence appears to have an error, the sequence has been flagged with a warning.'
        },
        {
          icon: 'mdi-home-group',
          title: 'Community',
          text: 'Community feedback is essential for the evolution of Cydrasil. We encourage researchers to submit new sequences or clade suggestions that will then be incorporated into the next release.'
        }
      ]
    }
  }

}
</script>

<style>

</style>
