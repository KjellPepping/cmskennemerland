<template>
   <div class="Table" :style="cssVars">
      <v-data-table :headers='dataHeaders' :items='dataItems' class='elevation-1'>
        <template v-slot:top>
            <v-toolbar flat>
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
    </div>
</template>

<script>
export default {
    props:['dataHeaders','dataItems','color'],
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
  border-radius: 10px;
  box-shadow: 5px 5px 0px var(--color);
  max-width: 100vw;
  background-color: cornsilk;
}
</style>