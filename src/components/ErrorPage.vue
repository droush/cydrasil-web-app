<template>
  <v-container
    class="grey lighten-3"
    fluid
  >
    <section
      id="error-page"
    >
      <div class="py-2 ma-0"
      >
        <v-container class="text-center">
          <p
            class="display-3 red--text text--darken-3 font-weight-black"
          >
            Uh oh,
            <br>
            Who stepped on the power cable?
          </p>
          <v-divider/>
        </v-container>
        <v-container class="text-center">
          <p
            class="display-1 red--text text--darken-3"
          >
            Your Cydrasil placement run timed out.
            <br>
          </p>
        </v-container>
        <v-container class="py-0">
          <p
          class="body-1 red--text text--darken-3"
          >
            The most common problem is that your query FASTA file was too big. We recommend
            splitting query files larger than 5,000 sequences and doing multiple separate placement runs.
            <br>
            <br>
            If that wasn't it, there may be an error in your query sequences. For example, an incorrect character in a sequence
            or a header line could be at the end of the previous sequence.
          </p>
        </v-container>
        <v-container class="text-center pt-0">
          <p
            class="body-1 red--text text--darken-3"
          >
            Please contact us at: <a href="mailto:cydrasil@asu.edu">cydrasil@asu.edu</a> if you need help troubleshooting a failed run.
            <br>
          </p>
        </v-container>
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
