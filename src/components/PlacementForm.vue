<template>
    <v-container>
        <v-row>
            <v-col cols="9">
                <v-textarea
                filled
                label=">FASTA Format"
                clearable=true
                >
                </v-textarea>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="9">
                <v-file-input
                label="FASTA Input"
                clearable=true
                >
                </v-file-input>
            </v-col>
        </v-row>
        <v-row
        justify="space-between">
            <v-col>
                <SubmitToS3Button />
                <ResetFormButton />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import SubmitToS3Button from '@/components/buttons/SubmitToS3Button'
import ResetFormButton from '@/components/buttons/ResetFormButton'

export default {

  components: {
    SubmitToS3Button,
    ResetFormButton
  }

}
</script>

<style>

</style>
