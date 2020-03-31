<template>
  <v-container>
    <v-row
      align="left"
      justify="left"
      >
      <v-col>
        <h1
        class="display-2 grey--text text--darken-3"
        >
        My Placements</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-data-table
      :headers="headers"
      :items="desserts"
      :items-per-page="20"
      >
      </v-data-table>
  </v-row>
  </v-container>
</template>

<script>
import { Storage } from 'aws-amplify'

Storage.list('placementFiles/', { level: 'private' })
  .then(result => console.log(result))
  .catch(err => console.log(err))

export default {
  data () {
    return {
      headers: [
        {
          text: 'Query File',
          align: 'start',
          sortable: false,
          value: 'name'
        },
        { text: 'Query File', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' }
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%'
        }
      ]
    }
  }
}
</script>

<style>

</style>
