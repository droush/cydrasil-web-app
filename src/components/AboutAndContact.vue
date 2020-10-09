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
            About Cydrasil
          </h1>
          <v-divider/>
        </v-container>
      </div>
    </section>
    <section>
      <div>
        <v-card
          outlined
          class="pa-1 grey--text text--darken-3"
        >
          <v-card-title>
              Cydrasil Philosophy & Methodology
          </v-card-title>
          <v-card-text>
            Cydrasil was created originally as a comprehensive cyanobacterial 16S rRNA gene reference package to
            be used with phylogenetic placement algorithms like <a href="https://matsen.fhcrc.org/pplacer/" target="_blank">pplacer</a>,
            <a href="https://cme.h-its.org/exelixis/web/software/epa/index.html" target="_blank">RAxML epa</a>, and
            <a href="https://github.com/Pbdas/epa-ng" target="_blank">EPA-ng</a>. When we originally populated the database,
            we had strict inclusion criteria for reference sequences.
            <br>
            <br>
            <ol>
              <li>The sequence must come from an isolated strain or a single-cell genome. Exceptions were made for metagenome-assembled
                genomes on a case by case basis after manual review of the genome.</li>
              <li>Each reference sequence must be 1100 base pairs or longer. The minimum length was chosen as a compromise between
                strain coverage and sequence information for phylogenetic reconstruction. Of note, this excludes all
                cyanobacteria sequences obtained with the widely used <a href="https://aem.asm.org/content/63/8/3327.long" target="_blank">Nübel et al. 1997</a>
                cyanobacteria-specific primers.</li>
            </ol>
            <br>
            The database was first populated with all available cyanobacterial 16S rRNA gene sequences from NCBI in the summer of 2016.
            Since then, we have continually incorporated sequences from NCBI but also added sequences from the JGI-IMG/M database,
            and user submissions.
            <br>
            <br>
            The reference alignment was generated using <a href="http://eddylab.org/software/ssu-align/" target="_blank">SSU-ALIGN</a>
            with default parameters. This aligner uses a profile-based
            alignment strategy, in which each target sequence is aligned independently to a covariance model that uses the 16S rRNA
            gene secondary structure, and then masked using SSUMASK with the automatically computed alignment confidence values
            (posterior probabilities). A maximum-likelihood phylogenetic tree was then generated using the
            <a href="https://cme.h-its.org/exelixis/software.html" target="_blank">RAxML-HPC2</a> (8.2.12) Workflow
            on XSEDE on the <a href="http://www.phylo.org/" target="_blank">CIPRES Science Gateway</a>. The ML + thorough bootstrap
            workflow was used with the following modified parameters:
            1000 bootstraps (-N 1000) and the GTRGAMMA model. All other parameters were left at default values.
            <br>
            <br>
            Cydrasil was created to provide a comprehensive and curated cyanobacterial 16S rRNA gene sequence reference package for
            use in sequence placement or <i>de novo</i> phylogenetic reconstructions. We have done the hard part in compiling and curated
            the sequences, and we want you to use them for your analyses.
            <br>
            <br>
            Cydrasil <b>DOES NOT</b> provide taxonomic assignments. This is an intentional design decision. We want you to look at
            where your sequences fall within the context of the full phylogenetic picture and then decide based upon your placements.
            We are here to help you navigate the cyanobacterial taxonomic/phylogenetic disconnect, but final taxonomic decisions
            are down to you.

          </v-card-text>
          <v-card-title>
            Sibling Clades to the Cyanobacteria
          </v-card-title>
          <v-card-text>
            There is currently a debate in the Cyanobacteria research community as to what organisms should be included in the phylum
            Cyanobacteria. This was brought on by the discovery of non-phototrophic organisms that were closely related to cyanobacteria
            (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4040986/" target="_blank">Soo et al. 2014</a> and
            <a href="https://www.sciencedirect.com/science/article/pii/S0891584918323001?via%3Dihub" target="_blank">Soo et al. 2019</a>).
            These findings have made their way into common 16S rRNA gene sequence databases, leading to confusion by researchers who
            find these "cyanobacteria" in their samples, but they are not the traditional photosynthetic prokaryotes.
            <br>
            <br>
            The phylum name Cyanobacteria has been formally defined a monophyletic clade of phototrophic prokaryotes that conduct oxygenic
            photosynthesis since the 1970s; the only prokaryotes able to do so. Due to this widely accepted definition, we have
            chosen to classify the new discovered non-phototrophic “cyanobacteria” organisms as sister clades to the Cyanobacteria
            and have marked them as such in both the database and the tree graphic (Database details). A discussion about this
            subject, titled “What's in a name? The case of cyanobacteria” can be found
            <a href="https://onlinelibrary.wiley.com/doi/full/10.1111/jpy.12934" target="_blank">here</a>.
          </v-card-text>
          <v-card-title>
            Community Contributions
          </v-card-title>
          <v-card-text>
            Cydrasil is dependent upon contributions from the scientific community. We originally seeded the database with what we
            felt was a comprehensive snapshot of cyanobacterial diversity, but the amount of available sequences is constantly
            increasing. If you have sequences that you would like to include or your research covers an unrepresented clade, please
            contact us (<a href="mailto:cydrasil@asu.edu">cydrasil@asu.edu</a>) and we will be sure to include it in the next release.
            <br>
            <br>
            Sequences for submission need to be 1100+ base pairs in length and originate from an isolate, a genome, or a metagenome
            assembled genome. Once we receive the sequence(s), we will validate them. We may reach out for further information.
          </v-card-text>
          <v-card-title>
            Contact Us
          </v-card-title>
          <v-card-text>
            If you have any comments, questions or concerns, please feel free to email us at:
            <a href="mailto:cydrasil@asu.edu">cydrasil@asu.edu</a>
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
