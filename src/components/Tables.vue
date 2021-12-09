<template>
   <v-layout row wrap>
     <v-flex md8>
       <v-card class='mb-2'>
         <v-card-title class='title'>
           <v-layout row wrap class='mt-2'>
             <v-flex>First Table</v-flex>
           </v-layout>
         </v-card-title>
         <v-card-text>
           <data-table/>
         </v-card-text>
       </v-card>
       <v-card class='mb-2'>
         <v-card-title class='title'>Second Table</v-card-title>
         <v-card-text>
           <data-table/>
         </v-card-text>
      </v-card>
      <v-card class='mb-2'>
        <v-card-title class='title'>Third Table</v-card-title>
        <v-card-text>
          <data-table/>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
 import dataTable from "./Table.vue"
 export default {
   components: {
     dataTable
   }
 }
</script>