<template>
    <v-container>
        <v-row>
            <v-col cols="9">
                <v-textarea
                filled
                label=">FASTA Format"
                clearable
                >
                </v-textarea>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="9">
                <v-file-input
                label="FASTA Input"
                accept=".fasta"
                clearable
                @change="onFileSelect"
                >
                </v-file-input>
            </v-col>
        </v-row>
        <v-row
        justify="space-between">
            <v-col>
                <v-btn
                    class="grey--text text--darken-3 mr-2"
                    color="amber"
                    ripple
                    @click="sendToPlacement"
                    >
                    Place Sequences
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { Storage } from 'aws-amplify'

export default {
  name: 'PlacementForm',
  data () {
    return {
      selectedFile: null,
      uploadFileName: null
    }
  },
  methods: {
    onFileSelect (event) {
      this.selectedFile = event
    },
    sendToPlacement () {
      Storage.put(`queryFiles/${this.selectedFile.name}`, this.selectedFile, {
        level: 'private',
        contentType: 'text/plain'
      })
        .then(result => console.log(result))
        .catch(err => console.log(err))
    }
  }
}
</script>

<style>

</style>
