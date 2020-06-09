<template>
<!-- Color scheme for logo is as follows -->
<!-- Dark Grey is  grey darken-3 #424242-->
<!-- Yellow for logo is amber #FFC107 -->
<!-- Grey for Others is grey #9E9E9E -->
  <v-app-bar
    app
    color="grey"
    clipped-left
  >
    <v-app-bar-nav-icon
      color="grey darken-3"
      @click=collapseDrawer />
    <router-link to="/">
      <v-img
        class="mx-2"
        src="@/assets/cydrasil-logo-with-text.png"
        max-height="40"
        max-width="130"
        contain
      >
      </v-img>
    </router-link>
    <v-spacer/>
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
