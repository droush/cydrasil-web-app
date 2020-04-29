<template>
  <v-container
  fluid
  >
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
          My Placement Runs</h1>

          <v-divider/>
        </v-container>
        </div>
    </section>
    <section
    >
      <v-row class="d-flex justify-center">
        <v-col cols="5">
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="d-flex justify-center">
        <v-data-table
        :headers="headers"
        :items="placementRunsTidy"
        :items-per-page="20"
        :search="search"
        v-if="placementsLoaded"
        >
          <template slot="items" slot-scope="row" v-for="item in placementRunsTidy">
            <td :key="item">{{ item.keyTidy }}</td>
            <td :key="item">{{ item.dateTidy }}</td>
          </template>
          <template v-slot:item.actions="{ item }">
            <v-icon
              class="ml-5"
              @click="goToResults(item.key)"
            >
              mdi-open-in-app
            </v-icon>
          </template>
                  <template v-slot:item.download-actions="{ item }">
            <v-icon
              class="ml-5"
              @click="downloadPlacements(item.key)"
            >
              mdi-download
            </v-icon>
          </template>
        </v-data-table>
      </v-row>
    </section>
  </v-container>
</template>

<script>
import { Storage } from 'aws-amplify'
import { mapMutations, mapState } from 'vuex'

export default {

  methods: {
    ...mapMutations(['updatePlacementHistory', 'updatePlacementResultName', 'updateMyPlacementsLoaded']),
    goToResults (item) {
      this.$store.commit('updatePlacementResultName', item)
      this.$router.push({ name: 'results', params: { placementRun: item } })
    },
    downloadPlacements (item) {
      Storage.get(item, { level: 'private' })
        .then(result => window.open(result))
        .catch(err => console.log(err))
    }
  },

  created () {
    Storage.list('placementFiles/', { level: 'private' })
      .then(result => this.$store.commit('updatePlacementHistory', result))
      .then(result => this.$store.commit('updateMyPlacementsLoaded'))
      .catch(err => console.log(err))
    console.log(this.placementRuns)
  },

  data () {
    return {
      isLoaded: false,
      search: ''
    }
  },
  computed: {
    ...mapState({
      placementRuns: state => state.placementInfo.placementHistory,
      placementsLoaded: state => state.placementInfo.myPlacementsLoaded
    }),
    headers () {
      return [
        {
          text: 'Placement Run  ',
          align: 'start',
          value: 'keyTidy'
        },
        { text: 'Date',
          value: 'dateTidy'
        },
        { text: 'View Results',
          sortable: false,
          value: 'actions'
        },
        { text: 'Download',
          sortable: false,
          value: 'download-actions'
        }
      ]
    },
    placementRunsTidy () {
      return this.placementRuns.map((item) => {
        item.keyTidy = item.key.replace('placementFiles/', '')
        item.dateTidy = item.lastModified.toDateString() + ' ' + item.lastModified.toLocaleTimeString()
        return item
      })
    }
  }
}

</script>

<style>

</style>
