<template>
    <h1> Test Component Please Ignore! </h1>
</template>

<script>
import { mapActions } from 'vuex'
import { AmplifyEventBus } from 'aws-amplify-vue'

export default {
  created () {
    this.findUserName()

    AmplifyEventBus.$on('authState', info => {
      if (info === 'signedIn') {
        this.findUserName()
      } else {
        this.findUserName()
      }
    })
  },

  methods: mapActions(['findUserName'])
}
</script>

<style>

</style>
