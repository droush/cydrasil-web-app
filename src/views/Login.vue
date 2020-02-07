<template>
    <v-container>
        <v-row
        class="mt-12"
        >
            <v-col align-self="center">
            <amplify-authenticator v-bind:authConfig="authConfig"></amplify-authenticator>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
// @ is an alias to /src

export default {

}
</script>
