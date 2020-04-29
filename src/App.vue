<template>
  <v-app>

    <NavBar />
    <NavDrawer />
    <v-content>
      <router-view />
    </v-content>
      <v-footer
        app
        color="grey"
      >
        <span class="white--text">&copy; 2020 Daniel Roush</span>
     </v-footer>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'
import { AmplifyEventBus, components } from 'aws-amplify-vue'
import NavBar from './components/navigation/NavBar'
import NavDrawer from '@/components/navigation/NavDrawer'

export default {
  name: 'App',

  created () {
    this.findUserName()

    AmplifyEventBus.$on('authState', info => {
      if (info === 'signedIn') {
        this.findUserName()
        this.$router.push('/')
      }
    })
    AmplifyEventBus.$on('authState', info => {
      if (info === 'signedOut') {
        this.findUserName()
        this.$router.push('/')
      }
    })
  },

  components: {
    NavBar,
    NavDrawer,
    ...components
  },

  methods: mapActions(['findUserName'])

}
</script>

<style>
:root {

  /* Colors */
  --amazonOrange: #424242; /* Redefined to material green */
  --lightAmazonOrange: #FFAC31;
  --darkAmazonOrange: #E88B01;
  --squidInk: #232F3E;
  --lightSquidInk: #31465F;
  --deepSquidInk: #152939;
  --grey: #828282;
  --lightGrey: #C4C4C4;
  --silver: #E1E4EA;
  --darkBlue: #31465F;
  --red: #DD3F5B;
  --white: #FFFFFF;
  --light-blue: #00a1c9;

  }

</style>
