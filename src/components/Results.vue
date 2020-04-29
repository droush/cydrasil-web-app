<template>
  <v-container fluid>
    <section
        id="database-details-info"
        class="grey lighten-3"
        >
        <div class="py-8 ma-0"
        >
        <v-container class="text-center">
          <h1
          class="display-3 grey--text text--darken-3"
          >
          Placement Results</h1>
          <v-divider/>
        </v-container>
        </div>
    </section>
    <section>
      <div>
        <v-container>
          <h1
          class="headline ma-2 grey--text text--darken-3"
          >
          Important notes about your placements
        </h1>
        <h3
        class="title ma-2 grey--text text--darken-3"
        >
        Please cite the tools that made this possible.
        </h3>
        <v-divider/>
        <h1
          class="headline grey--text text--darken-3"
          >
          Placements for {{ runName.replace('placementFiles/', '').replace('.jplace', '') }}:
        </h1>
        <v-row>
          <v-col cols="3">
            <v-btn
            :href="downloadLink"
            class="mt-5 grey--text text--darken-3"
            block
            color="amber"
            >
            Download jPlace File
            </v-btn>
          </v-col>
          <v-col cols="3">
            <v-btn
            href="https://itol.embl.de/"
            class="mt-5 grey--text text--darken-3"
            block
            color="green"
            >
            Visualize with iTOL
            </v-btn>
          </v-col>
        </v-row>
        </v-container>
    </div>
    </section>
  </v-container>
</template>

<script>
import { Storage } from 'aws-amplify'
import { mapMutations, mapState } from 'vuex'

export default {
  methods: {
    ...mapMutations(['updatePlacementResultLink'])
  },
  created () {
    Storage.get(this.$store.state.placementInfo.placementResultName, { level: 'private' })
      .then(result => this.$store.commit('updatePlacementResultLink', result))
      .catch(err => console.log(err))
  },

  data () {
    return {
    }
  },
  computed: {
    ...mapState({ downloadLink: state => state.placementInfo.placementResultLink }),
    ...mapState({ runName: state => state.placementInfo.placementResultName })
  }
}
</script>

<style>

</style>
