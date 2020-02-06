<template>

    <v-app-bar
      app
      color="green"
    >
      <v-app-bar-nav-icon
      color="white"
      @click="drawer = !drawer" />

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
import SignInButton from '@/components/navigation/SignInButton'

export default {

  name: 'App',

  components: {
    SignInButton
  }

}
</script>
