<template>
   <v-container fluid>
    <section
        id="gettingstarted-header"
        class="grey lighten-3"
        >
        <div class="py-8 ma-0"
        >
        <v-container class="text-center">
            <h1
            class="display-3 grey--text text--darken-3"
            >
            Getting Started with Cydrasil</h1>

            <v-divider/>
        </v-container>
        </div>
    </section>
    <div/>
    <section
        id="gettingstarted-options"
        class="mt-4"
        >
        <div class="d-flex justify-center">
            <v-card
            outlined
            class="my-2 grey--text text--darken-3"
            min-width="600"
            max-width="600"
            >
                <v-card-title >
                    I want to place my sequences on Cydrasil!
                </v-card-title>
                <v-card-text>
                    Powered by PaPaRa and epa-ng, place your 16S rRNA gene sequences on the Cydrasil reference tree. You will need an account to run the placements on our servers.
                </v-card-text>
                <v-card-actions class="justify-center">
                    <v-btn
                    small
                    to="/login"
                    color="amber"
                    class="grey--text text--darken-3 font-weight-bold"
                    >
                        Login or Create an Account
                    </v-btn>
                </v-card-actions>
            </v-card>
        </div>
        <div class="d-flex justify-center">
            <v-card
            outlined
            class="my-4 grey--text text--darken-3"
            min-width="600"
            max-width="600"
            >
                <v-card-title>
                    I want to check Cydrasil for a sequence!
                </v-card-title>
                <v-card-text>
                    A searchable database of sequences is available in Database Details, including the full 16S sequence and any warnings about the entry!
                </v-card-text>
                <v-card-actions class="justify-center">
                    <v-btn
                    small
                    to="/database"
                    color="amber"
                    class="grey--text text--darken-3 font-weight-bold"
                    >
                        Database Details
                    </v-btn>
                </v-card-actions>
            </v-card>
        </div>
        <div class="d-flex justify-center">
            <v-card
            outlined
            class="my-4 grey--text text--darken-3"
            min-width="600"
            >
                <v-card-title>
                    I want to download the Cydrasil files for my own analysis!
                </v-card-title>
                <v-card-text>
                    The current version of the Cydrasil database and all previous versions are available on GitHub!
                </v-card-text>
                <v-card-actions class="justify-center">
                    <v-btn
                    small
                    href="https://github.com/FGPLab/cydrasil"
                    color="amber"
                    class="grey--text text--darken-3 font-weight-bold"
                    >
                        Cydrasil on GitHub
                    </v-btn>
                </v-card-actions>
            </v-card>
        </div>
    </section>
   </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>
