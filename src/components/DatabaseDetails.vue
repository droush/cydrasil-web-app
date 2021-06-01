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
            The Cydrasil Database
          </h1>
          <v-divider/>
        </v-container>
      </div>
    </section>
    <section
      id="cydrasil-database-table"
    >
      <div>
        <v-card
          class="pa-0 grey--text text--darken-3"
          flat
        >
        <v-card-text class="py-2">
          This is a searchable version of the Cydrasil database that includes warnings about problematic sequences,
          the source of the sequence and a link to the original data repository from where the sequence was retrieved.
          We have also included any notes about the sequence including other names, and the reference sequence
          used for the reference package construction.
        </v-card-text>
        <v-card-title class="pt-1 my-0  ">
          Cydrasil Stats: Version 3
        </v-card-title>
        <v-card-subtitle>
          <b>Total Sequences:</b> 1327 | <b>Cyanobacteria:</b> 1288 | <b>Sibling Clades:</b> 34 | <b>Plastid:</b> 5
        </v-card-subtitle>
        </v-card>
        <v-container
          class="py-0 my-0"
        >
          <v-row
            class="d-flex justify-center py-0 my-0"
          >
            <v-col
              cols="3"
              class="py-0 my-0"
            >
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-col>
            <v-col
              cols="3"
              class="mt-0"
            >
              <v-btn
                color="amber"
                depressed
                href="https://itol.embl.de/tree/722013233107271622410676"
                target="_blank"
              >
                View Cydrasil on iTOL
              </v-btn>
            </v-col>
          </v-row>
          <v-row
            class="d-flex justify-center"
          >
            <v-col
              cols="8"
              class="pt-0"
            >
              <v-data-table
                :headers="headers"
                :items="cydrasilDatabase"
                :expanded.sync="expanded"
                :items-per-page="10"
                :search="search"
                show-expand
                dense
              >
                <template
                  v-slot:expanded-item="{ headers, item }"
                >
                  <td
                    :colspan='headers.length'
                    style="background-color:#FFFFFF"
                  >
                    <v-card
                      flat
                    >
                      <v-card-text>
                        <h1
                          class="title red--text text--darken-3"
                        >
                          Warnings:
                        </h1>
                        <p
                          class="body-1 mb-5 grey--text text--darken-3"
                        >
                          {{ item.warnings }}
                        </p>
                        <h1
                          class="title grey--text text--darken-3"
                        >
                          Notes:
                        </h1>
                        <p
                          class="body-1 mb-5 grey--text text--darken-3"
                        >
                          {{ item.notes }}
                        </p>
                        <div
                          class="title grey--text text--darken-3"
                        >
                          Source:
                        </div>
                        <p
                          class="body-1 mb-5 grey--text text--darken-3"
                        >
                          {{ item.dataSource }}
                        </p>
                        <div
                          class="title grey--text text--darken-3"
                        >
                          Source Link:
                        </div>
                        <a
                          class="body-1 mb-5 grey--text text--darken-3"
                          :href='item.dataSourceLink'
                          target="_blank"
                        >
                          {{ item.dataSourceLink }}
                        </a>
                        <p>
                        </p>
                        <div
                          class="title grey--text text--darken-3"
                        >
                         Cydrasil v2 and earlier sequence ID:
                        </div>
                        <p
                          class="body-1 mb-5 grey--text text--darken-3"
                        >
                          {{ item.ogCyName }}
                        </p>
                        <div
                          class="title grey--text text--darken-3"
                        >
                          Sequence:
                        </div>
                        <pre
                          class="grey--text text--darken-3 text-wrap"
                        >
                          >{{ item.cyTaxID }}
                          {{ item.sequence }}
                        </pre>
                      </v-card-text>
                    </v-card>
                  </td>
                </template>
              </v-data-table>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </section>
  </v-container>
</template>

<script>
import cydrasilDatabase from '@/assets/cydrasil-files/cydrasil-v3-database.json'

export default {
  data () {
    return {
      search: '',
      expanded: [],
      cydrasilDatabase,
      headers: [
        {
          text: 'Sequence ID',
          align: 'start',
          sortable: false,
          value: 'cyTaxID'
        },
        { text: '', value: 'data-table-expand' }
      ]
    }
  }
}
</script>

<style>
.v-card__text, .v-card__title {
  word-break: break-word !important;
}
</style>
