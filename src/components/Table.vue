<template>
    <v-container  class="Table" >
    <v-layout row wrap>
      <v-data-table :headers='dataHeaders' :items='dataItems' class='elevation-1'>
        <template v-slot:top>
            <v-toolbar flat>
                <v-toolbar-title class="font-weight-black">{{tableTitle}}</v-toolbar-title>
                <v-spacer></v-spacer>   
            </v-toolbar>
        </template>
         <template v-slot:[`item.actions`]="{ item }">
            <v-icon small class="mr-2" @click="editItem(item)">
                mdi-pencil
            </v-icon>
            <v-icon small @click="deleteItem(item)">
                mdi-delete
            </v-icon>
        </template>
       </v-data-table>
    
    </v-layout>
    </v-container>
</template>

<script>
export default {
    props:['dataHeaders','dataItems','tableTitle','color','light_color'],
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
  
}
</style>