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
        <v-row>
            <v-col>
                <v-btn
                    class="grey--text text--darken-3 mr-2"
                    color="amber"
                    :loading="loading"
                    :disabled="loading"
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
import { mapMutations } from 'vuex'

export default {
  name: 'PlacementForm',
  data () {
    return {
      selectedFile: null,
      uploadFileName: null,
      loading: false,
      placementKey: null
    }
  },
  methods: {
    ...mapMutations(['updatePlacementResultName']),

    onFileSelect (event) {
      this.selectedFile = event
    },
    uploadComplete () {
      this.placementKey = `placementFiles/${this.selectedFile.name.replace('.fasta', '.jplace')}`
      this.$store.commit('updatePlacementResultName', this.placementKey)
      this.$router.push('Processing')
    },
    sendToPlacement () {
      this.loading = true

      Storage.put(`queryFiles/${this.selectedFile.name}`, this.selectedFile, {
        level: 'private',
        contentType: 'text/plain'
      })
        .then(result => this.uploadComplete())
        .catch(err => console.log(err))
    }
  }
}
</script>

<style>

</style>
