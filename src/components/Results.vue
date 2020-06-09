<template>
  <v-container fluid >
    <section
      id="database-details-info"
      class="grey lighten-3"
      >
        <div
          class="py-2 ma-0"
        >
            <v-container
              class="text-center">
                <h1
                  class="display-3 grey--text text--darken-3"
                >
                  Your sequences were successfully placed</h1>
                <v-divider/>
            </v-container>
        </div>
    </section>
    <section>
      <div>
        <v-container>
          <v-card
            outlined
            class="ma-2"
            max-width="800"
            min-width="800"
          >
            <v-card-title
              class="pb-0 grey--text text--darken-3"
            >
              Results for {{ runName.replace('placementFiles/', '').replace('.jplace', '') }}:
            </v-card-title>
            <v-card-actions
              class="pt-0"
            >
                <v-btn
                  :href="downloadLink"
                  class="mt-5 grey--text text--darken-3"
                  color="amber"
                >
                  Download jPlace File
                </v-btn>
                <v-btn
                  href="https://itol.embl.de/"
                  target="_blank"
                  class="mt-5 grey--text text--darken-3"
                  color="green"
                >
                  How to Analyze with iTOL
                </v-btn>
            </v-card-actions>
          </v-card>
          <v-card
            outlined
            class="ma-2"
            max-width="800"
            min-width="800"
          >
            <v-card-title
              class="grey--text ma-0 text--darken-3"
            >
              NOTE:
            </v-card-title>
            <v-card-subtitle
            class="grey--text text--darken-3"
            >
              The cy_vX code at the end of your filename corresponds to the Cydrasil database version that was used to generate placements, i.e., cy_v2 corresponds to Cydrasil version 2.
            </v-card-subtitle>
            <v-divider/>
            <v-card-title
            class="grey--text ma-0 pt-0 pb-0 text--darken-3"
            >
              Please cite the tools that made this possible (links open in a new tab)
            </v-card-title>
            <v-list
              dense
              class="ma-0 pa-0"
            >
              <v-list-item-group>
                <v-list-item
                  v-for="item in items"
                  :key="item.title"
                  @click=goToCite(item)
                >
                  <v-list-item-content
                    class="pa-0 ma-0"
                  >
                    <v-list-item-title>{{ item.title }} - {{item.description}}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-container>
      </div>
    </section>
  </v-container>
</template>

<script>
import { Storage } from 'aws-amplify'
import { mapMutations, mapState } from 'vuex'

export default {
  methods: {
    ...mapMutations(['updatePlacementResultLink']),
    goToCite (item) {
      window.open(item.href, '_blank')
    }
  },
  created () {
    Storage.get(this.$store.state.placementInfo.placementResultName, { level: 'private' })
      .then(result => this.$store.commit('updatePlacementResultLink', result))
      .catch(err => console.log(err))
  },

  data () {
    return {
      items: [
        { title: 'Cydrasil', description: 'Sequence reference database', href: 'https://github.com/FGPLab/cydrasil' },
        { title: 'PaPaRa', description: 'Alignment of query sequences to the Cydrasil reference alignment', href: 'https://cme.h-its.org/exelixis/web/software/papara/index.html' },
        { title: 'epa-ng', description: 'Placement of query sequences on the Cydrasil reference tree', href: 'https://github.com/Pbdas/epa-ng' },
        { title: 'SSU-Align', description: 'Used to generate the Cydrasil reference alignment', href: 'http://eddylab.org/software/ssu-align/' },
        { title: 'RAxML', description: 'Used to generate the Cydrasil reference tree', href: 'https://cme.h-its.org/exelixis/web/software/raxml/index.html' }
      ]
    }
  },
  computed: {
    ...mapState({ downloadLink: state => state.placementInfo.placementResultLink }),
    ...mapState({ runName: state => state.placementInfo.placementResultName })
  }
}
</script>

<style>

</style>
