<template>
  <v-content>
      <h1> PLACE SEQUENCES </h1>
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
