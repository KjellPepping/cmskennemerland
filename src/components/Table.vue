<template>
   <div>
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
    </div>
</template>

<script>
export default {
    props:['dataHeaders','dataItems','tableTitle']
}
</script>

<style>

</style>