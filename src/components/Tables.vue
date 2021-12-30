<template>
   <v-layout row wrap :style="cssVars" class=".Table">
     <v-flex md8>
       <v-card class='mb-2 Table'>
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
</template>
<script>
 import dataTable from "./Table.vue"
 export default {
   props:['color'],
   components: {
     dataTable
   },
   computed:{
        cssVars(){
            return{
                '--color': this.color,
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
    box-shadow: 5px 5px 0px var(--color);
    max-width: 100vw;
}
</style>