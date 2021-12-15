<template>
<v-container class='Table' :style="cssVars">
   <v-layout row wrap >
     <v-flex md8>
       <v-card class='mb-2'>
         <v-card-title class='title'>
           <v-layout row wrap class='mt-2'>
           </v-layout>
         </v-card-title>
         <v-card-text>
           <data-table/>
         </v-card-text>
       </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>
<script>
 import dataTable from "./Table.vue"
 export default {
   props:['dataHeaders','dataItems','tableTitle','color','light_color'],
   components: {
     dataTable
   },
   computed:{
        cssVars(){
            return{
                '--color': this.color,
                '--light-color': this.light_color,
            }
        },
    },

 }
</script>

<style>
.Table
{
    background-color: cornsilk !important;
    border-radius: 10px;
    box-shadow: 5px 5px 0px var(--color), 10px 10px 0px var(--light-color);
    max-width: 100vw;
}
</style>