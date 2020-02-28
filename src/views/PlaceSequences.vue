<template>
  <v-content>
    <v-row
      align="left"
      justify="left"
      >
      <v-col>
        <h1
        class="display-2 grey--text text--darken-3"
        >
        Place Sequences into Cydrasil</h1>
      </v-col>
    </v-row>
    <PlacementForm />
  </v-content>
</template>

<script>
// @ is an alias to /src
import PlacementForm from '@/components/PlacementForm.vue'

export default {
  name: 'place',
  components: {
    PlacementForm
  }
}
</script>
