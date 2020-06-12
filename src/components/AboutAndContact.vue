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
              Cydrasil Philosophy
          </v-card-title>
          <v-card-text>
            Cydrasil was created originally as a comprehensive cyanobacterial 16S rRNA gene reference package to
            be used with phylogenetic placement algorithms like pplacer https://matsen.fhcrc.org/pplacer/,
            RAxML epa https://cme.h-its.org/exelixis/web/software/epa/index.html, and
            EPA-ng https://github.com/Pbdas/epa-ng. When we originally populated the database, we had strict inclusion criteria.
            <br>
            <br>
            <ol>
              <li>The sequence must come from an isolated strain or a single-cell genome. Exceptions were made for metagenome-assembled
                genomes on a case by case basis after manual review of the genome (needed for most sibling clade sequences).</li>
              <li>Each reference sequence must be 1100 base pairs or longer. The minimum length was chosen as a compromise between
                strain coverage and sequence information for phylogenetic reconstruction. Of note, this excludes all
                cyanobacteria sequenced using the <a href="https://aem.asm.org/content/63/8/3327.long" target="_blank">Nübel et al. 1997</a>
                cyanobacteria-specific primers.</li>
            </ol>
            <br>
            <br>
            The database was first populated with all available cyanobacterial 16S rRNA gene sequences from NCBI in the summer of 2016.
            Since then, we have continually incorporated sequences from NCBI but also added sequences from the JGI-IMG/M database,
            and user submissions.
            <br>
            <br>
            Cydrasil is focused on providing a comprehensive, curated cyanobacterial 16S rRNA gene sequence reference package for
            use in sequence placement or de novo phylogenetic reconstructions. We have done the hard part in compiling and curated
            the sequences, and we want you to use them for your analyses.
            <br>
            <br>
            Cydrasil <b>DOES NOT</b> provide taxonomic assignments. This is an intentional design decision. We want you to look at
            where your sequences fall within the context of the full phylogenetic picture and then decide based upon your placements.
            We could tell you your sequence placed near a Leptolyngbya, but that could be anywhere in 7+ different clades. We are
            here to help you navigate the cyanobacterial taxonomic/phylogenetic disconnect, but the final taxonomic decision is down
            to you.
          </v-card-text>
          <v-card-title>
            Sister Clades to the Cyanobacteria
          </v-card-title>
          <v-card-text>
            There is currently a debate in the Cyanobacteria research community as to what organisms should be included in the phylum
            Cyanobacteria. This was brought on by the discovery of non-phototrophic organisms that were closely related to cyanobacteria
            (<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4040986/" target="_blank">Soo et al. 2014</a> and
            <a href="https://www.sciencedirect.com/science/article/pii/S0891584918323001?via%3Dihub" target="_blank">Soo et al. 2019</a>).
            These findings have made their way into common 16S rRNA gene sequence databases, leading to confusion by researchers who
            find cyanobacteria in their samples, but they are not the traditional photosynthetic prokaryotes.
            <br>
            <br>
            The phylum name Cyanobacteria has defined a monophyletic clade of phototrophic prokaryotes that conduct oxygenic
            photosynthesis since the 1970s; the only prokaryotes able to do so. Due to this widely accepted definition, we have
            chosen to classify the new discovered non-phototrophic “cyanobacteria” organisms as sister clades to the Cyanobacteria
            and have marked them as such in both the database and the tree graphic (Database details). A great discussion about this
            subject, titled “What's in a name? The case of cyanobacteria” by Garcia-Pichel et al. can be found
            <a href="https://onlinelibrary.wiley.com/doi/full/10.1111/jpy.12934" target="_blank">here</a>.
          </v-card-text>
          <v-card-title>
            Cydrasil Methodology
          </v-card-title>
          <v-card-text>
            Cydrasil is a sequence database, alignment, and phylogenetic tree containing 1494 cyanobacterial 16S rRNA gene sequences,
            downloaded from NCBI and IMG and used for placement of sequence variants (sOTUs) from 16S rRNA gene amplicon studies.
            The reference alignment was generated using SSUALIGN1 with default parameters. This aligner uses a profile-based
            alignment strategy, in which each target sequence is aligned independently to a covariance model that uses the 16S rRNA
            gene secondary structure, and then masked using SSUMASK with the automatically computed alignment confidence values
            (posterior probabilities). A maximum-likelihood phylogenetic tree was then generated using the RAxML-HPC2 (8.2.12) Workflow
            on XSEDE on the CIPRES Science Gateway3. The ML + thorough bootstrap workflow was used with the following modified parameters:
            1000 bootstraps (-N 1000) and the GTRGAMMA model. All other parameters were left at default values.
          </v-card-text>
          <v-card-title>
            Community Contributions
          </v-card-title>
          <v-card-text>
            Cydrasil is dependent upon contributions from the scientific community. We originally seeded the database with what we
            felt was a comprehensive snapshot of cyanobacterial diversity, but the amount of available sequences is constantly
            increasing. If you have sequences that you would like to include or your research covers an unrepresented clade, please
            contact us and we will be sure to include it in the next release.
            <br>
            <br>
            Sequences for submission need to be over 1100+ base pairs in length and originate from an isolate, a genome, or a metagenome
            assembled genome. Once we receive the sequence(s), we will validate them and may reach out for further information.
          </v-card-text>
          <v-card-title>
            Contact Us
          </v-card-title>
          <v-card-text>
            If you have any comments, questions or concerns, please feel free to email us at (contact AT cydrasil DOT org)
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
