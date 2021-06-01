<template>
  <v-container
    fluid
  >
    <section
      id="database-details-info"
      class="grey lighten-3"
    >
      <div
        class="py-2 ma-0"
      >
        <v-container
          class="text-center"
        >
          <h1
            class="display-3 grey--text text--darken-3"
          >
            My Placement Runs
          </h1>
          <v-divider/>
        </v-container>
      </div>
    </section>
    <section>
      <v-card
        flat
        class="ma-2"
      >
        <v-card-title
          class="grey--text pa-1 text--darken-3"
        >
          NOTE:
        </v-card-title>
        <v-card-subtitle
          class="grey--text pa-1 text--darken-3"
        >
          The cy_vX code at the end of your filename corresponds to the Cydrasil database version
          that was used to generate placements, i.e., cy_v3 corresponds to Cydrasil version 3.
        </v-card-subtitle>
      </v-card>
    </section>
    <section>
      <v-row
        class="d-flex justify-center"
      >
        <v-col
          cols="5"
        >
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          >
          </v-text-field>
        </v-col>
      </v-row>
      <v-row
        class="d-flex justify-center"
      >
        <v-data-table
          :headers="headers"
          :items="placementRunsTidy"
          :items-per-page="20"
          :search="search"
          v-if="placementsLoaded"
        >
          <template
            slot="items"
            slot-scope="row"
            v-for="item in placementRunsTidy"
          >
            <td :key="item">{{ item.keyTidy }}</td>
            <td :key="item">{{ item.dateTidy }}</td>
          </template>
          <template
            v-slot:item.actions="{ item }"
          >
            <v-icon
              class="ml-5"
              @click="goToResults(item.key)"
            >
              mdi-open-in-app
            </v-icon>
          </template>
          <template
            v-slot:item.download-actions="{ item }"
          >
            <v-icon
              class="ml-5"
              @click="downloadPlacements(item.key)"
            >
              mdi-download
            </v-icon>
          </template>
          <template
            v-slot:item.delete-actions="{ item }"
            v-slot:activator='{ on }'
          >
            <v-icon
              class="ml-5"
              @click="deletePlacementsAsk(item)"
              v-on='on'
            >
              mdi-delete
            </v-icon>
          </template>
        </v-data-table>
      </v-row>
    </section>
    <section>
      <v-row
        justify="center"
      >
        <v-dialog
          v-model="dialog"
          persistent
          max-width="500"
        >
          <v-card>
            <v-card-title
              class="headline"
            >
              Delete {{  itemToDelete.keyTidy  }}?
            </v-card-title>
            <v-card-text>
              This will permenently delete this placement run from your account. It cannot be recovered.
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn
                color="red darken-1"
                text
                @click="dialog = false"
              >
                Cancel
              </v-btn>
              <v-btn
                color="green darken-2"
                text
                @click='deletePlacementRun()'
              >
                Confirm
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
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
    },
    deletePlacementsAsk (item) {
      this.dialog = true
      this.itemToDelete = item
    },
    placementListUpdate () {
      Storage.list('placementFiles/', { level: 'private' })
        .then(result => this.$store.commit('updatePlacementHistory', result))
        .then(result => this.$store.commit('updateMyPlacementsLoaded'))
        .catch(err => console.log(err))
    },
    deletePlacementRun () {
      Storage.remove(this.itemToDelete.key, { level: 'private' })
        .then(result => console.log(result))
        .then(result => this.placementListUpdate())
        .catch(err => console.log(err))
      this.dialog = false
    }
  },

  created () {
    this.placementListUpdate()
    console.log(this.placementRuns)
  },

  data () {
    return {
      isLoaded: false,
      search: '',
      dialog: false,
      itemToDelete: ''
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
        },
        { text: 'Delete Run',
          sortable: false,
          value: 'delete-actions'
        }
      ]
    },
    placementRunsTidy () {
      return this.placementRuns.map((item) => {
        item.keyTidy = item.key.split('/')[3]
        item.dateTidy = item.lastModified.toDateString() + ' ' + item.lastModified.toLocaleTimeString()
        return item
      })
    }
  }
}

</script>

<style>

</style>
