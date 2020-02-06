<template>

    <v-app-bar
      app
      color="green"
      clipped-left
    >
      <v-app-bar-nav-icon
      color="white"
      @click=collapseDrawer />

      <div class="d-flex align-center">
        <v-btn
          to="/home"
          text
          color="white"
        >
          <span>Cydrasil</span>
        </v-btn>

      </div>

      <v-spacer></v-spacer>

      <SignInButton/>

    </v-app-bar>

</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import SignInButton from '@/components/navigation/SignInButton'

export default {

  name: 'App',

  components: {
    SignInButton
  },

  computed: mapGetters(['getDrawerStatus']),
  methods: mapMutations(['collapseDrawer'])

}
</script>
