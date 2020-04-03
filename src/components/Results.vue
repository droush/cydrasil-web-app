<template>
  <v-container>
    <v-row>
      <v-col>
        <h1
        class="display-2 grey--text text--darken-3"
        >
        Placement Results</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="3">
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-col>
      <v-col cols="3">
        <v-btn
        :href="downloadLink"
        class="mt-5 grey--text text--darken-3"
        block
        small
        color="amber"
        >
        Download Placements
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-data-table
        :headers="headers"
        :items="placements"
        :items-per-page="20"
        :search="search"
        >
        </v-data-table>
      </v-col>
  </v-row>
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
      search: '',
      headers: [
        {
          text: 'Sequence ID',
          align: 'start',
          sortable: false,
          value: 'key'
        }
      ]
    }
  },
  computed: {
    ...mapState({ downloadLink: state => state.placementInfo.placementResultLink })
  }
}
</script>

<style>

</style>
