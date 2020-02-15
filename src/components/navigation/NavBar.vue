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
          to="/"
          text
          color="white"
        >
          <span>Cydrasil</span>
        </v-btn>

      </div>

      <v-spacer></v-spacer>

      <SignInButton v-if=!getLoggedInStatus />
      <ProfileMenu v-if=getLoggedInStatus />

    </v-app-bar>

</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import SignInButton from '@/components/navigation/SignInButton'
import ProfileMenu from '@/components/navigation/ProfileMenu'

export default {

  name: 'App',

  components: {
    SignInButton,
    ProfileMenu
  },

  computed: mapGetters(['getLoggedInStatus']),
  methods: mapMutations(['collapseDrawer'])

}
</script>
