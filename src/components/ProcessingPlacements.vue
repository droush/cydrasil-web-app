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
        Processing Placements
        </h1>
        <v-divider/>
      </v-container>
      </div>
   </section>
   <section
   class="grey lighten-3"
   >
   <div>
    <v-container >
        <v-row
        class="d-flex justify-center"
        >
          <v-progress-circular
            :indeterminate="indeterminate"
            :rotate="rotate"
            :size="size"
            :width="width"
            color="amber"
          >
            <h1 class="headline">
              Please wait
            </h1>
            </v-progress-circular>
        </v-row>
        </v-container>
   </div>
    </section>
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
    polling: null,
    errorTimeout: null
  }),
  created () {
    this.errorTimeout = setTimeout(() => {
      this.pushErrorPage()
    }, 930000)

    this.polling = setTimeout(() => {
      Storage.list(this.$store.state.placementInfo.placementResultName, { level: 'private' })
        .then(result => this.checkS3Result(result))
    }, 30000)
  },

  beforeDestroy () {
    clearInterval(this.errorTimeout)
    clearInterval(this.polling)
  },

  methods: {
    checkS3Result (result) {
      if (result.length !== 0) {
        this.$router.push({ name: 'results', params: { placementRun: this.$store.state.placementInfo.placementResultName } })
      } else {
        setTimeout(() => {
          Storage.list(this.$store.state.placementInfo.placementResultName, { level: 'private' })
            .then(result => this.checkS3Result(result))
        }, 30000)
      }
    },
    pushErrorPage () {
      this.$router.push('error')
    }
  }
}
</script>

<style>

</style>
