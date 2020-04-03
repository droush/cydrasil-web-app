<template>
  <v-container
  fluid>
    <v-row>
      <v-col>
        <h1
        class="display-2 grey--text text--darken-3"
        >
        My Placements</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="7">
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-data-table
      :headers="headers"
      :items="placementRuns"
      :items-per-page="20"
      :search="search"
      >
        <template slot="items" slot-scope="props" v-for="item in placementRuns">
          <td :key="item">{{ props.item.key }}</td>
          <td :key="item">{{ props.item.lastModified.toDateString() }}</td>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon
            class="ml-5"
            @click="goToResults(item.key)"
          >
            mdi-palm-tree
          </v-icon>
        </template>
      </v-data-table>
  </v-row>
  </v-container>
</template>

<script>
import { Storage } from 'aws-amplify'
import { mapMutations, mapState } from 'vuex'

export default {

  methods: {
    ...mapMutations(['updatePlacementHistory', 'updatePlacementResultName']),
    goToResults (item) {
      this.$store.commit('updatePlacementResultName', item)
      this.$router.push({ name: 'results', params: { placementRun: item } })
    }
  },

  created () {
    Storage.list('placementFiles/', { level: 'private' })
      .then(result => this.$store.commit('updatePlacementHistory', result))
      .catch(err => console.log(err))
  },

  updated () {
    return console.log(this.placements)
  },

  data () {
    return {
      search: '',

      headers: [
        {
          text: 'Query File',
          align: 'start',
          sortable: false,
          value: 'key'
        },
        { text: 'Date',
          value: 'lastModified'
        },
        { text: 'View Results',
          value: 'actions'
        }
      ]
    }
  },
  computed: mapState({
    placementRuns: state => state.placementInfo.placementHistory
  })
}
</script>

<style>

</style>
