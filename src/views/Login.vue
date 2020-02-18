<template>
    <v-container>
        <v-row
        class="mt-12"
        align="center"
        justify="center"
        >
            <v-col cols="auto"
            >
            <amplify-authenticator v-bind:authConfig="authConfig"></amplify-authenticator>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
  name: 'Login',
  props: [],
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
