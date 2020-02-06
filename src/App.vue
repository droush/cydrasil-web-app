<template>
  <v-app>

    <v-content>
      <NavBar/>
      <NavDrawer/>
      <HelloWorld/>
    </v-content>

  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import NavBar from './components/navigation/NavBar'
import NavDrawer from '@/components/navigation/NavDrawer'

export default {
  name: 'App',

  components: {
    HelloWorld,
    NavBar,
    NavDrawer
  },

  data: () => ({
    //
  })
}
</script>
