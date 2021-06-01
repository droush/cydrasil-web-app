<template>
  <v-container fluid>
    <section
      id="database-details-info"
      class="grey lighten-3"
    >
      <div
        class="py-2 ma-0"
      >
        <v-container
          class="text-center"
        >
          <h1
            class="display-3 grey--text text--darken-3"
          >
            How to Analyze your Placements with iTOL
          </h1>
          <v-divider/>
        </v-container>
      </div>
    </section>
    <section>
      <div>
        <v-card
          outlined
          class="pa-1"
        >
          <v-card-title>
            Placement File Visualization
          </v-card-title>
          <v-card-text>
            Visualization of the placement file (.JPLACE) containing the queried sequences is done using iTOLv5
            (Interactive Tree of Life; <a href="https://itol.embl.de/" target="_blank">https://itol.embl.de/</a>).
            Sequence placements act as a dataset within the iTOL web application and can be toggled on or off.
            Query sequence placements are visualized with red
            circles on nodes and clicking a node shows a breakdown of sequence IDs and the corresponding confidence values for that node.
          </v-card-text>
          <v-divider />
          <v-card-title>
            Step By Step Guide
          </v-card-title>
          <v-card-text class="font-weight-black">
            1. After downloading your phylogenetic placement results file (.JPLACE) from the Cydrasil web application,
            navigate to iTOL (<a href="https://itol.embl.de/" target="_blank">https://itol.embl.de/</a>) and register or
            login to your account.
          </v-card-text>
          <v-row
            class="d-flex"
            align="center"
            justify="center"
          >
            <v-img
              max-width="800"
              src="@/assets/howto-itol/1-itol-login.png"
            />
          </v-row>
          <v-card-text class="font-weight-black">
          2. Upload the <i>placement file</i> (.JPLACE) to iTOL (<a href="https://itol.embl.de/" target="_blank">https://itol.embl.de/</a>).
          </v-card-text>
          <v-card-text class="ml-3">
          <i>Placement file</i>:
          <br>
          The output file from any sequence placement program, including Cydrasil’s web application (.JPLACE file).
          </v-card-text>
          <v-row
            class="d-flex"
            align="center"
            justify="center"
          >
            <v-img
              max-width="1000"
              src="@/assets/howto-itol/2-itol-upload.png"
            />
          </v-row>
          <v-card-text class="font-weight-black">
            3. Click on the placement file name to access the Cydrasil tree containing the placement of your sequences.
          </v-card-text>
          <v-row
            class="d-flex"
            align="center"
            justify="center"
          >
            <v-img
              max-width="1100"
              src="@/assets/howto-itol/3-itol-tree-link.png"
            />
          </v-row>
          <v-card-text class="font-weight-black">
            4. From the Controls box set parameters as follows:
          </v-card-text>
          <v-card-text class="ml-3">
            <v-row>
              <v-col
                cols="6"
              >
              <b>Basic</b>
              <br>
              <i>Display mode</i> : normal
              <br>
              <i>Parameters</i> : 0º rotation
              <br>
              <i>Invert</i> : No
              <br>
              <i>Slanted</i> : No
              <br>
              <i>Branch length</i> : Use
              <br>
              <i>Labels</i> : At tips | <b>NOTE:</b> Toggle labels to <b>OFF</b> if your computer slows.
              <br>
              <i>Label rotation</i> : On
              <br>
              <i>Label alignment</i> : Left
              </v-col>
              <v-col
                cols="6"
              >
              <b>Advanced</b>
              <br>
              No changes. If you are having trouble reading your results, you can use adjust the scaling factors to separate leaves.
              </v-col>
            </v-row>
          </v-card-text>
          <v-row
            class="d-flex"
            align="center"
            justify="center"
          >
            <v-img
              max-width="800"
              src="@/assets/howto-itol/4-itol-settings.png"
            />
          </v-row>
          <v-card-text class="font-weight-black">
            5. Root the Cydrasil tree:
          </v-card-text>
          <v-card-text class="ml-3 font-weight-black">
            Go to the search icon and type WOR1
          </v-card-text>
          <v-row
            class="d-flex"
            align="center"
            justify="center"
          >
            <v-img
              max-width="1100"
              src="@/assets/howto-itol/5-itol-search.png"
            />
          </v-row>
          <v-card-text class="ml-3 font-weight-black">
            Click on <b>CY-NCBI-METRO1000...</b> to be taken to the node where this sequenced is located
          </v-card-text>
          <v-row
            class="d-flex"
            align="center"
            justify="center"
          >
            <v-img
              max-width="1100"
              src="@/assets/howto-itol/6-itol-root.png"
            />
          </v-row>
          <v-card-text class="ml-3 font-weight-black">
            Click on the parent node, navigate to <b>Tree structure</b> and then click <b>Reroot the tree here</b>
          </v-card-text>
          <v-row
            class="d-flex"
            align="center"
            justify="center"
          >
            <v-img
              max-width="1100"
              src="@/assets/howto-itol/7-itol-root-2.png"
            />
          </v-row>
          <v-card-text class="ml-3 font-weight-black">
            Go to the Controls box and click on <b>Save/restore view</b>, then click on <b>Save as default view for this tree</b>
            <br>
            <br>
            <b>NOTE:</b> Now your tree is saved with the current changes. You can log out and the latest saved view of a
            given tree will be stored in your account.
          </v-card-text>
          <v-row
            class="d-flex"
            align="center"
            justify="center"
          >
            <v-img
              max-width="1100"
              src="@/assets/howto-itol/8-itol-default-view.png"
            />
          </v-row>
          <v-card-text class="ml-3 font-weight-black">
            6.  From the Controls box go to <b>Datasets</b> and turn on the <b>Phylogenetic Placements</b> dataset.
            Once <b>Phylogenetic Placements</b> are turned on, red circles will display along the tree at the nodes
            where query sequences were placed.
          </v-card-text>
          <v-row
            class="d-flex"
            align="center"
            justify="center"
          >
            <v-img
              max-width="1100"
              src="@/assets/howto-itol/9-dataset.png"
            />
          </v-row>
          <v-card-text class="ml-3 font-weight-black">
            7. Use the <b>Show query form</b> to search for the placement of an individual query sequence by sequence ID
          </v-card-text>
          <v-row
            class="d-flex"
            align="center"
            justify="center"
          >
            <v-img
              max-width="1100"
              src="@/assets/howto-itol/10-query-placements.png"
            />
          </v-row>
          <v-card-text class="ml-3 font-weight-black">
            8.  Insert query sequence ID and click <b>G</b>o. Red circles will display on the nodes of Cydrasil where that specific sequence
            was placed.
            <br>
            <br>
            <b>NOTE:</b> you need to scroll up and down to find the red circles on Cydrasil.
            <br>
            <br>
            Click on the sequence ID to display the <b>Placements box</b> which contains the number of the nodes at which the
            sequence was placed (<i>edge_num</i>), and the probability that such sequence belongs to a given node
            (<i>like_weight_ratio</i>).
            <br>
            <br>
            <b>NOTE:</b> use the Clear highlight option before displaying red circles for the next query sequence in order to
            only display phylogenetic placements of interest.
          </v-card-text>
          <v-row
            class="d-flex"
            align="center"
            justify="center"
          >
            <v-img
              max-width="1100"
              src="@/assets/howto-itol/11-query-results.png"
            />
          </v-row>
          <v-card-text class="ml-3 font-weight-black">
            You can also click at the node of interest to display the <b>Phylogenetic Placements box</b>. Here you can find
            the sequence ID (<i>Sequence</i>), the current node at which you are looking at (<i>edge-num</i>), and the
            probability that the sequence belongs to the node (<i>like_weight_ratio</i>).
          </v-card-text>
          <v-row
            class="d-flex"
            align="center"
            justify="center"
          >
            <v-img
              max-width="1100"
              src="@/assets/howto-itol/12-find-in-tree.png"
            />
          </v-row>
        </v-card>
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
