<template>
   <v-container class="Table" :style="cssVars">
      <v-data-table :headers='dataHeaders' :items='dataItems' class='elevation-1 dataTable'>
        <template v-slot:top>
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
    
   </v-container>
</template>

<script>
export default {
    props:['dataHeaders','dataItems','color','light_color'],
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
  border-radius: 10px;
  box-shadow: 5px 5px 0px var(--color), 10px 10px 0px var(--light-color);
  max-width: 100vw;
  background-color: cornsilk;
  margin-top: 30px;
}

</style>