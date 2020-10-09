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
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'NavDrawer',

  computed: {
    ...mapGetters(['getDrawerStatus', 'getMiniStatus']),
    ...mapState({ loginStatus: state => state.loginStatus.loggedIn })
  },

  data () {
    return {
      items: [
        { title: 'Home', icon: 'mdi-home-city', route: '/' },
        { title: 'Getting Started', icon: 'mdi-traffic-light', route: '/gettingstarted' },
        { title: 'Database Details', icon: 'mdi-pine-tree', route: '/database' },
        { title: 'Place Sequences', icon: 'mdi-string-lights', route: '/place' },
        { title: 'My Placement Runs', icon: 'mdi-run-fast', route: '/MyPlacements' },
        { title: 'Help & FAQ', icon: 'mdi-lifebuoy', route: '/help' },
        { title: 'About & Contact', icon: 'mdi-information', route: '/about' },
        { title: 'Legal Stuff', icon: 'mdi-newspaper-variant', route: '/terms' }
      ]
    }
  }
}
</script>
