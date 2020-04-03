<template>
    <v-container
    class="pa-0"
    fluid
    >
        <v-row
        align="start"
        justify="start"
        >
            <v-col
            cols="12"
            >
                <h1
                class="display-2 grey--text text--darken-3"
                > Amazon's hamsters are placing your sequences! </h1>
            </v-col>
        </v-row>
        <v-row
        align-content="center"
        >
            <v-col>
                <v-progress-circular
                :indeterminate="indeterminate"
                :rotate="rotate"
                :size="size"
                :width="width"
                color="amber"
            >Eventually</v-progress-circular>
        </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { Storage } from 'aws-amplify'

export default {
  data: () => ({
    indeterminate: true,
    rotate: 0,
    size: 400,
    width: 13,
    polling: null
  }),
  created () {
    this.polling = setInterval(() => {
      Storage.list(this.$store.state.placementInfo.placementResultName, { level: 'private' })
        .then(result => this.checkS3Result(result))
        .catch(err => console.log(err))
    }, 30000)
  },

  beforeDestroy () {
    clearInterval(this.polling)
  },

  methods: {
    checkS3Result (result) {
      if (result.length !== 0) {
        this.$router.push({ name: 'results', params: { placementRun: this.$store.state.placementInfo.placementResultName } })
      }
    }
  }
}
</script>

<style>

</style>
