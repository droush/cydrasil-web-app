<template>
<v-menu
  v-model="value"
  :disabled="disabled"
  :absolute="absolute"
  :open-on-hover="openOnHover"
  :close-on-click="closeOnClick"
  :close-on-content-click="closeOnContentClick"
  :offset-x="offsetX"
  :offset-y="offsetY"
>
  <template
    v-slot:activator="{ on }"
  >
    <v-btn
      color="grey darken-3"
      dark
      depressed
      v-on="on"
    >
    {{ getUserName.username }}
    </v-btn>
  </template>
  <v-list>
    <v-list-item
      v-for="(item, index) in items"
      :key="index"
      :to="item.route"
      exact
    >
      <v-list-item-title>{{ item.title }}</v-list-item-title>
    </v-list-item>
    <v-divider />
    <v-list-item
      class="pt-5"
    >
    <amplify-sign-out />
    </v-list-item>
  </v-list>
</v-menu>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: () => ({
    items: [
      { title: 'My Placement Runs', route: '/MyPlacements' }
    ],
    disabled: false,
    absolute: false,
    openOnHover: false,
    value: false,
    closeOnClick: true,
    closeOnContentClick: true,
    offsetX: true,
    offsetY: true
  }),
  computed: mapGetters(['getUserName'])
}
</script>

<style>

</style>
