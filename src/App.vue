<template>
  <v-app>

    <NavBar />
    <NavDrawer />

    <v-content>
      <router-view />
    </v-content>

      <v-footer
        app
        color="green"
      >
        <span class="white--text">&copy; 2019 Daniel Roush</span>
     </v-footer>
  </v-app>
</template>

<script>
import NavBar from './components/navigation/NavBar'
import NavDrawer from '@/components/navigation/NavDrawer'
import { components } from 'aws-amplify-vue'

export default {
  name: 'App',

  components: {
    NavBar,
    NavDrawer,
    ...components
  },

  data: function () {
    return ({
    })
  }
}
</script>

<style>
:root {

  /* Colors */
  --amazonOrange: #4CAF50; /* Redefined to material green */
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
