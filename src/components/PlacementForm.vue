<template>
  <v-container fluid>
    <v-card
      class="pt-0 mt-0"
      flat
    >
      <v-card-title
        class="pt-0 mt-0 mb-1 pb-0"
      >
        Placing Query Sequences using the Cydrasil Reference Package
      </v-card-title>
      <v-card-text
        class="mt-0 pt-0"
      >
        Sequence and file formatting are imperative for an error-free run. Please format your input as a FASTA file. If you are submitting
        only a few sequences, please make sure that they have proper FASTA headers.
      </v-card-text>
      <v-card-title
        class="py-1"
      >
        Current Cydrasil Pipeline Program Versions
      </v-card-title>
      <v-card-text>
        <b>Cydrasil</b>: 2 |
        <a href="https://cme.h-its.org/exelixis/web/software/papara/index.html" target="_blank"><b>PaPaRa</b></a>: 2.5 |
        <a href="https://github.com/Pbdas/epa-ng" target="_blank"><b>EPA-ng</b></a>: 0.3.6 |
        <a href="" target="">What's this?</a>
      </v-card-text>
    </v-card>
    <v-divider />
    <section>
      <div>
        <v-row
          class="d-flex  justify-center"
        >
          <v-col
            cols="9"
            class="ma-0 px-0 pb-0 pt-1"
          >
            <p
              class="body-1 font-weight-bold pt-1 grey--text text--darken-3"
            >
              Name your run
            </p>
            <v-text-field
              v-model="runName"
              filled
              label="Run Name"
              clearable
              @input="runNameChange"
            >
            </v-text-field>
          </v-col>
        </v-row>
        <v-row
          class="d-flex justify-center"
        >
          <v-col
            cols="9"
            class="ma-0 pa-0"
          >
            <p
              class="body-1 font-weight-bold pb-1 pt-0 mt-0 grey--text text--darken-3"
            >
              Input your sequences in FASTA format, or
            </p>
            <v-textarea
              v-model="sequenceInput"
              filled
              label=">FASTA Format"
              clearable
              @click:clear="onClearSeqInput"
              @input="seqInputChange"
            >
            </v-textarea>
          </v-col>
        </v-row>
      </div>
      <div >
        <v-row
          class="d-flex justify-center"
        >
          <v-col
            cols="9"
            class="ma-0 pa-0"
          >
            <p
              class="body-1 font-weight-bold grey--text text--darken-3"
            >
              Upload a FASTA formatted file (.fasta only)
            </p>
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
              Incorrect file format extension. Please make sure your query sequence file is in FASTA format and the file
              extension is .fasta (Case-sensitive)
            </v-alert>
            <v-alert
              v-if="incorrectFileFormat"
              type="error"
            >
              Query file not in FASTA format. Each sequence should contain a header beginning with > and the next line should be the sequence.
              Please make sure your query sequence file is in FASTA format and the file extension is .fasta (Case-sensitive)
            </v-alert>
            <v-alert
              v-if="missingRunName"
              type="error"
            >
              Please enter a name for this placement run.
            </v-alert>
            <v-alert
              v-if="incorrectTextBoxFormat"
              type="error"
            >
              Your entered sequence(s) do not have FASTA headers. Please make sure each sequence has a corresponding
              FASTA header.
            </v-alert>
          </v-col>
        </v-row>
      </div>
      <div>
        <v-row
          class="d-flex justify-center"
        >
          <v-col
            cols="2"
            class="pl-12 pt-4"
          >
            <v-btn
              class="grey--text text--darken-3 mr-2"
              color="amber"
              :loading="loading"
              :disabled="isDisabled"
              ripple
              @click="runNameCheck"
            >
              Place Sequences
            </v-btn>
          </v-col>
          <v-col
            cols="8"
            class="pl-12"
          >
            <p
              class="body-1 grey--text text--darken-3"
            >
              <b>WARNING:</b> If the query file exceeds 5,000 sequences, it will be unable to complete.
              <br>
              Please split the query file and run the resulting files separately.
            </p>
          </v-col>
        </v-row>
      </div>
    </section>
  </v-container>
</template>

<script>
import { Storage } from 'aws-amplify'

export default {
  name: 'PlacementForm',
  data () {
    return {
      selectedFile: null,
      uploadFileName: null,
      newFilename: '',
      loading: false,
      placementKey: null,
      incorrectFileExtension: false,
      incorrectFileFormat: false,
      incorrectTextBoxFormat: false,
      missingRunName: false,
      runName: '',
      sequenceInput: null,
      timestamp: null
    }
  },
  computed: {
    isDisabled () {
      if (this.loading === true) {
        return true
      } else if (this.incorrectFileExtension === true) {
        return true
      } else if (this.incorrectFileFormat === true) {
        return true
      } else if (this.missingRunName === true) {
        return true
      } else if (this.incorrectTextBoxFormat === true) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    onClearSeqInput () {
      this.incorrectTextBoxFormat = false
      this.loading = false
    },
    runNameChange () {
      this.missingRunName = false
      this.loading = false
    },
    seqInputChange () {
      this.incorrectTextBoxFormat = false
      this.loading = false
    },
    // Scans input file to make sure in FASTA format
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
            this.incorrectFileFormat = true
          }
        }
      }
    },

    onFileSelectExtension (event) {
      if (event.name.includes('.fasta')) {
        this.selectedFile = event
        this.incorrectFileExtension = false
      } else if (event.name.includes('.FASTA')) {
        this.selectedFile = event.name.replace('.FASTA', '.fasta')
        this.incorrectFileExtension = false
      } else if (event.name.includes('.Fasta')) {
        this.selectedFile = event.name.replace('.Fasta', '.fasta')
        this.incorrectFileExtension = false
      } else if (event.name.includes('.fa')) {
        this.selectedFile = event.name.replace('.fa', '.fasta')
        this.incorrectFileExtension = false
      } else if (event.name.includes('.Fa')) {
        this.selectedFile = event.name.replace('.fa', '.fasta')
        this.incorrectFileExtension = false
      } else if (event.name.includes('.FA')) {
        this.selectedFile = event.name.replace('.FA', '.fasta')
        this.incorrectFileExtension = false
      } else {
        this.incorrectFileExtension = true
      }
    },
    runNameCheck () {
      if (this.runName === '' || this.runName === null) {
        this.missingRunName = true
      } else {
        this.renameInputAndPlace()
      }
    },
    renameInputAndPlace () {
      const timestamp = Date.now()
      this.newFilename = `/${timestamp}/${this.runName}.fasta`
      this.sendToPlacement()
    },
    sendToPlacement () {
      if (this.sequenceInput === null && this.selectedFile) {
        this.loading = true

        Storage.put(`queryFiles/${this.newFilename}`, this.selectedFile, {
          level: 'private',
          contentType: 'text/plain'
        })
          .then(result => this.uploadComplete())
      } else {
        var blob = new Blob([this.sequenceInput], { type: 'text/plain' })
        var file = new File([blob], this.newFilename, { type: 'text/plain' })

        let reader = new FileReader()
        reader.readAsText(file, 'UTF-8')
        reader.onload = evt => {
          let text = evt.target.result
          let firstLineFasta = text.split('\n').shift()
          if (firstLineFasta.includes('>')) {
            this.loading = true
            Storage.put(`queryFiles/${this.newFilename}`, file, {
              level: 'private',
              contentType: 'text/plain'
            })
              .then(result => this.uploadComplete())
          } else {
            this.incorrectTextBoxFormat = true
          }
        }
      }
    },

    uploadComplete () {
      this.placementKey = `placementFiles/${this.newFilename.replace('.fasta', `-cy_v2.jplace`)}`
      this.$store.commit('updatePlacementResultName', this.placementKey)
      this.$router.push('Processing')
    }
  }
}
</script>

<style>

</style>
