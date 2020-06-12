<template>
  <v-container fluid>
    <section
      id="database-details-info"
      class="grey lighten-3"
    >
      <div class="py-2 ma-0"
      >
        <v-container class="text-center">
          <h1
              class="display-3 grey--text text--darken-3"
          >
              Help & FAQ
          </h1>
          <v-divider/>
        </v-container>
      </div>
    </section>
    <section
      id="faq"
    >
      <div>
        <v-card
          class="pa-2 grey--text text--darken-3"
          outlined
        >
          <v-card-title>
            If you do not find your answer here, please contact us at contact (at) cydrasil (dot) org. We are happy to help!
          </v-card-title>
          <v-divider />
          <v-card-subtitle
            class="font-weight-medium"
          >
            Which version of Cydrasil did I use?
          </v-card-subtitle>
          <v-card-text>
            Each output from the Cydrasil tool has a “-cy_vX” tag at the end of the file.
            The number in place of the X, following the v contains the Cydrasil database version that was used to place your sequences.
          </v-card-text>
          <v-card-subtitle
            class="font-weight-medium"
          >
            How do I interpret my phylogenetic placement results?
          </v-card-subtitle>
          <v-card-text>
            We have a comprehensive tutorial available <router-link to="HowToAnalyze">here</router-link> for using iTOL.
            We also have a webinar that uses an older version of the Cydrasil database, but describes
            how we do analysis <a href="https://youtu.be/FynML7Mu26U?t=2337" target="_blank">Link to Webinar</a>
          </v-card-text>
          <v-card-subtitle
            class="font-weight-medium"
          >
            How many sequences can be placed on Cydrasil at the time?
          </v-card-subtitle>
          <v-card-text>
            Our server can handle up to 10,000 short (~300 base pairs) query sequences at a time. If the input file is too large,
            the analysis will time out after 15 minutes. If this happens, we recommend the user split the query file up and do
            multiple, separate runs.
          </v-card-text>
          <v-card-subtitle
            class="font-weight-medium"
          >
            Is there a minimum query sequence length for sequence placement with Cydrasil?
          </v-card-subtitle>
          <v-card-text>
            We recommend using 200+ base pair length sequences for the most accurate placements. This is the length of the output
            from an Illumina 2X250 MiSeq run using the <a href="https://earthmicrobiome.org/" target="_blank">Earth Microbiome Project primers</a>.
          </v-card-text>
          <v-card-subtitle
            class="font-weight-medium"
          >
            How do I access to my phylogenetic placement results?
          </v-card-subtitle>
          <v-card-text>
            When your placement run is finished, you will be taken to a results page where you can download your JPLACE file.
            Your results can also be found in the My Placement Runs page. You can click on the corresponding results button
            or download directly from your history.
          </v-card-text>
          <v-card-subtitle
            class="font-weight-medium"
          >
            Can the phylogenetic placement results (.JPLACE file) be used on platform different from iTOL
          </v-card-subtitle>
          <v-card-text>
            iTOL is the easiest and fastest way to visualize your placement results. For more complex analyses,
            <a href="https://github.com/lczech/gappa/wiki" target="_blank">gappa</a> and
            <a href="https://matsen.github.io/pplacer/generated_rst/guppy.html" target="_blank">guppy</a>
            are both useful software packages designed to analyze sequence placement data.
          </v-card-text>
          <v-card-subtitle
            class="font-weight-medium"
          >
            Why is the Cydrasil reference package not set up for automated taxonomic assignment? I see that this
            is an available feature of both pplacer and EPA-ng.
          </v-card-subtitle>
          <v-card-text>
            We made an intentional design decision when creating Cydrasil to not assign taxonomy but provide a full phylogenetic
            framework and allow the user to assign taxonomy based upon the actual placements within the Cydrasil tree.
            There is an expanded explanation in <router-link to="About">About & Contact</router-link>.
          </v-card-text>
          <v-card-subtitle
            class="font-weight-medium"
          >
            If a query sequence is placed at two or more nodes with the same <i>like_weight_ratio</i>, is the placement inconclusive?
          </v-card-subtitle>
          <v-card-text>
            This depends on the placement itself. The <i>like_weight_ratio</i> is the probability of a sequence belonging to the corresponding
            branch of the reference tree. In some cases, you will see a sequence place across two or three branches with an even split
            of the <i>like_weight_ratio</i>. Or a split between a parent node, and two child branches. In these cases, if the nodes/branches
            are very close and the cumulative <i>like_weight_ratio</i> exceeds <b>0.7</b>, we say the sequence must belong to the clade, but we can’t
            specifically tell which branch.
          </v-card-text>
          <v-card-subtitle
            class="font-weight-medium"
          >
            What <i>like_weight_ratio</i> is an appropriate cut off when using the evolutionary placement algorithm (EPA-ng)?
          </v-card-subtitle>
          <v-card-text>
            For our analyses, we typically use 0.7 (70%) cutoff (based off the traditional <b>0.7</b> bootstrap confidence cutoff from
            phylogenetic analyses). We have seen some researchers drop as low as 0.5 or go as high as 0.9. This choice is down to the
            researcher, your experimental design, and how strict you want to be in classification.
          </v-card-text>
          <v-card-subtitle
            class="font-weight-medium"
          >
            How long does it take to obtain my phylogenetic placements results using the Cydrasil web application?
          </v-card-subtitle>
          <v-card-text>
            Placement runs can take up to 15 minutes (limitation by AWS). If a run exceeds that length it will error out
            and we recommend the user split their query file up and do separate runs.
          </v-card-text>
          <v-card-subtitle
            class="font-weight-medium"
          >
            Does my Cydrasil web application account have a maximum number of phylogenetic placements I can run?
          </v-card-subtitle>
          <v-card-text>
            There is no limit to the number of runs you can do. All runs will be saved in your account.
          </v-card-text>
          <v-card-subtitle
            class="font-weight-medium"
          >
            How long are my phylogenetic placements results stored on the Cydrasil web application?
          </v-card-subtitle>
          <v-card-text>
            Results will be stored indefinitely. There is an option to delete any of your runs on your My Placements page.
          </v-card-text>
          <v-card-subtitle
            class="font-weight-medium"
          >
            How do I submit cyanobacterial 16S rRNA sequences to be added to Cydrasil? Is there a minimum sequence size?
          </v-card-subtitle>
          <v-card-text>
            We are accepting submissions by email only currently. If you have a 1100+ base pair sequence from an isolate,
            a genome, or a metagenome assembled genome (MAG) you can email us at contact (at) cydrasil (dot) org and we will
            incorporate it into the next major database update. We also understand that there may be missing clades that are
            pertinent to your research that are not included in the tree. If this is the case, send us an email and we will
            work at adding them into the next release. Cydrasil development is anchored on community feedback and we want to
            make sure the database is comprehensive enough to meet every researcher’s needs.
          </v-card-text>
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
