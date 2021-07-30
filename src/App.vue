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
        <span
          class="white--text"
        >
          &copy; 2021 Garcia-Pichel Lab
        </span>
        <v-spacer/>
        <span
          class="white--text">
          <a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><v-img alt="Creative Commons License" style="border-width:5" src="https://i.creativecommons.org/l/by/4.0/80x15.png" /></a>
        </span>
        <v-card
          elevation="0"
          color="grey"
          class="white--text pl-2"
          href="http://creativecommons.org/licenses/by/4.0/"
        >
        CC BY 4.0
        </v-card>
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
    // Set the redirect when logged in
    AmplifyEventBus.$on('authState', info => {
      if (info === 'signedIn') {
        this.findUserName()
        this.$router.push('/gettingstarted')
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
/*This is to adjust the AWS Amplify component colors, before it was available in Amplify*/
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
