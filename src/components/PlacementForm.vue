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
            Place Sequences with the Cydrasil Database</h1>

            <v-divider/>
          </v-container>
          </div>
      </section>
      <section>
        <div>
          <v-row class="d-flex  justify-center">
              <v-col cols="9" class="ma-0 pa-0">
                <h2
                class="body-1 pt-1 grey--text text--darken-3"
                >
                  Please name your run
                </h2>
                  <v-text-field
                  v-model="runName"
                  filled
                  label="Run Name"
                  clearable
                  >
                  </v-text-field>
              </v-col>
          </v-row>
          <v-row class="d-flex justify-center">
              <v-col cols="9" class="ma-0 pa-0">
                <h2
                class="body-1 pb-1 pt-0 mt-0 grey--text text--darken-3"
                >
                  Please input your sequences in FASTA format
                </h2>
                  <v-textarea
                  v-model="sequenceInput"
                  filled
                  label=">FASTA Format"
                  clearable
                  >
                  </v-textarea>
              </v-col>
          </v-row>
        </div>
        <div >
          <v-row class="d-flex justify-center">
              <v-col cols="9" class="ma-0 pa-0">
                <h2
                class="body-1 grey--text text--darken-3"
                >
                  or upload a FASTA formatted file (.fasta or .fa only)
                </h2>
                  <v-file-input
                  label="FASTA file"
                  accept=".fasta, .fa"
                  clearable
                  @change="onFileSelect"
                  >
                  </v-file-input>
                  <v-alert
                  v-if="incorrectFileExtension"
                  type="error"
                  >
                      Input not correctly formatted. Potentially missing the FASTA header
                  </v-alert>
              </v-col>
          </v-row>
        </div>
        <div>
          <v-row class="d-flex justify-center">
              <v-col cols="9">
                  <v-btn
                      class="grey--text text--darken-3 mr-2"
                      color="amber"
                      :loading="loading"
                      :disabled="isDisabled"
                      ripple
                      @click="checkAndSendToPlacement"
                      >
                      Place Sequences
                  </v-btn>
              </v-col>
          </v-row>
        </div>
      </section>
    </v-container>
</template>

<script>
import { Storage } from 'aws-amplify'
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'PlacementForm',
  data () {
    return {
      selectedFile: null,
      uploadFileName: null,
      fileUniqueNumber: 0,
      newFilename: '',
      loading: false,
      placementKey: null,
      incorrectFileExtension: false,
      runName: null,
      sequenceInput: null
    }
  },
  created () {
    Storage.list('placementFiles/', { level: 'private' })
      .then(result => this.$store.commit('updatePlacementHistory', result))
      .then(result => this.$store.commit('updateMyPlacementsLoaded'))
      .catch(err => console.log(err))
    console.log(this.placementRuns)
  },
  computed: {
    isDisabled () {
      if (this.loading === true) {
        return true
      } else if (this.incorrectFileExtension === true) {
        return true
      } else {
        return false
      }
    },
    ...mapState({
      placementRuns: state => state.placementInfo.placementHistory
    })
  },
  methods: {
    ...mapMutations(['updatePlacementHistory', 'updatePlacementResultName', 'updateMyPlacementsLoaded']),
    onFileSelect (event) {
      if (event) {
        let file = event

        // Credit: https://stackoverflow.com/a/754398/52160
        let reader = new FileReader()
        reader.readAsText(file, 'UTF-8')
        reader.onload = evt => {
          let text = evt.target.result
          let firstLineFasta = text.split('\n').shift()
          if (firstLineFasta.includes('>')) {
            this.onFileSelectExtension(file)
          } else {
            this.incorrectFileExtension = true
          }
        }
        reader.onerror = evt => {
          console.error(evt)
        }
      } else {
      }
    },

    onFileSelectExtension (event) {
      if (event.name.includes('.fasta')) {
        this.selectedFile = event
        this.incorrectFileExtension = false
      } else if (event.name.includes('.FASTA')) {
        this.selectedFile = event.name.replace('.FASTA', '.fasta')
        this.incorrectFileExtension = false
      } else if (event.name.includes('.fa')) {
        this.selectedFile = event.name.replace('.fa', '.fasta')
        this.incorrectFileExtension = false
      } else if (event.name.includes('.FA')) {
        this.selectedFile = event.name.replace('.FA', '.fasta')
        this.incorrectFileExtension = false
      } else {
        this.incorrectFileExtension = true
      }
    },
    uploadComplete () {
      this.placementKey = `placementFiles/${this.newFilename.replace('.fasta', `-cy_v2.jplace`)}`
      this.$store.commit('updatePlacementResultName', this.placementKey)
      this.$router.push('Processing')
    },
    checkAndSendToPlacement () {
      console.log(this.sequenceInput)
      let nameUnique = false
      if (!this.sequenceInput) {
        while (nameUnique === false) {
          let testKey1 = `placementFiles/${this.selectedFile.name.replace('.fasta', `-${this.fileUniqueNumber}-cy_v2.jplace`)}`
          console.log(testKey1)
          console.log(Object.values(this.placementRuns).includes(testKey1))
          if (Object.values(this.placementRuns).includes(testKey1)) {
            this.fileUniqueNumber += 1
          } else {
            this.newFilename = this.selectedFile.name.replace('.fasta', `-${this.fileUniqueNumber}.fasta`)
            this.sendToPlacement()
            nameUnique = true
          }
        }
      } else {
        while (nameUnique === false) {
          let testKey2 = `placementFiles/placement-${this.fileUniqueNumber}-cy_v2.jplace`
          console.log(testKey2)
          var key2Exists = this.placementRuns.filter(function (o) {
            return o.hasOwnProperty(testKey2)
          }).length > 0
          console.log(key2Exists)
          if (key2Exists) {
            this.fileUniqueNumber += 1
          } else {
            this.newFilename = `placement-${this.fileUniqueNumber}.fasta`
            this.sendToPlacement()
            nameUnique = true
          }
        }
      }
    },
    sendToPlacement () {
      if (!this.sequenceInput) {
        this.loading = true

        Storage.put(`queryFiles/${this.newFilename}`, this.selectedFile, {
          level: 'private',
          contentType: 'text/plain'
        })
          .then(result => this.uploadComplete())
          .catch(err => console.log(err))
      } else {
        this.loading = true

        var blob = new Blob([this.sequenceInput], { type: 'text/plain' })
        var file = new File([blob], this.newFilename, { type: 'text/plain' })

        Storage.put(`queryFiles/${this.newFilename}`, file, {
          level: 'private',
          contentType: 'text/plain'
        })
          .then(result => this.uploadComplete())
          .catch(err => console.log(err))
      }
    }
  }
}
</script>

<style>

</style>
