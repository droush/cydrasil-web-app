<template>
 <v-container fluid>
   <section
      id="database-details-info"
      class="grey lighten-3"
      >
      <div class="py-8 ma-0"
      >
      <v-container class="text-center">
        <h1
        class="display-3 grey--text text--darken-3"
        >
        Login or Create an Account</h1>

        <v-divider/>
      </v-container>
      </div>
   </section>
   <section
   id="aws-login"
   >
    <div
    class="mt-4 d-flex justify-center"
    >
            <amplify-authenticator v-bind:authConfig="authConfig"></amplify-authenticator>
    </div>
    </section>
 </v-container>
</template>

<script>

export default {
  name: 'Login',

  data () {
    return {
      authConfig: {
        signUpConfig: {
          header: 'Please Create an Account to use Cydrasil',
          hideAllDefaults: true,
          defaultCountryCode: '1',
          signUpFields: [
            {
              label: 'Username',
              key: 'username',
              required: true,
              displayOrder: 1,
              type: 'string',
              signUpWith: true
            },
            {
              label: 'Email',
              key: 'email',
              required: true,
              displayOrder: 2,
              type: 'string',
              signUpWith: true
            },
            {
              label: 'Password',
              key: 'password',
              required: true,
              displayOrder: 3,
              type: 'password'
            }
          ]
        }
      }
    }
  }
}
</script>

<style>

</style>
