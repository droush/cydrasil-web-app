<template>
  <v-app>

    <NavBar />
    <NavDrawer />

    <v-content>
      <router-view />
    </v-content>

      <v-footer
        color="green"
        app
      >
        <span class="white--text">&copy; 2019</span>
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
