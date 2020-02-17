<template>

    <v-navigation-drawer
      app
      v-model=getDrawerStatus
      :mini-variant.sync=getMiniStatus
      clipped
    >
      <v-list dense>
        <v-list-item-group>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            :to="item.route"
            exact
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
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
        { title: 'Home', icon: 'mdi-home-city', route: '/' },
        { title: 'Database Details', icon: 'mdi-pine-tree' },
        { title: 'Place Sequences', icon: 'mdi-string-lights', route: '/place' },
        { title: 'Submit Sequences', icon: 'mdi-pencil' },
        { title: 'About', icon: 'mdi-information' },
        { title: 'Contact Us', icon: 'mdi-email' }
      ]
    }
  }
}
</script>
