<template>

    <v-navigation-drawer
      app
      v-model=getDrawerStatus
      :mini-variant.sync=getMiniStatus
      clipped
    >
      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'App',

  computed: mapGetters(['getDrawerStatus', 'getMiniStatus']),

  data () {
    return {
      items: [
        { title: 'Home', icon: 'mdi-home-city' },
        { title: 'My Account', icon: 'mdi-account' },
        { title: 'Users', icon: 'mdi-account-group-outline' }
      ]
    }
  }
}
</script>
