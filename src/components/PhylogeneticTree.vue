<template>
 <v-container>
  <v-btn
  @click="logRenderedTree"
  >
  </v-btn>
  <div id="tree_display"/>
 </v-container>
</template>

<script>
import cydrasilTree from '@/assets/cydrasil-files/cydrasil-v2-tree-rooted.txt'
import { phylotree } from 'phylotree'
import 'phylotree/build/phylotree.css'

export default {
  data () {
    return {
      cydrasilTree
    }
  },
  mounted () {
    this.generateTree()
  },

  methods: {
    generateTree () {
      // eslint-disable-next-line new-cap
      var tree = new phylotree(cydrasilTree)

      let height = 15000
      let width = 1600
      let svg = document.createElement('div')
      svg.setAttribute('id', 'tree_display')
      document.body.appendChild(svg)

      // eslint-disable-next-line no-unused-vars
      var renderedTree = tree.render('#tree_display', {
        height: height,
        'show-scale': false,
        compression: 0.5,
        width: width,
        'left-right-spacing': 'fit-to-size',
        'top-bottom-spacing': 'fit-to-size',
        'label-nodes-with-name': true
      })
      console.log(renderedTree)
      // renderedTree.collapse_node()
      // renderedTree.update()
    },
    logRenderedTree () {
      console.log(this.renderedTree)
    }
  }
}
</script>

<style>

</style>
