<template>
  <v-data-table :headers="headers" :items="teams" class="elevation-1">
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title class="font-weight-black">TEAM</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="success" dark class="mb-2" v-bind="attrs" v-on="on">New Team</v-btn>
          </template>

          <v-card>
            <v-card-title><span class="text-h5">{{ formTitle }}</span></v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.teamId" label="Team ID" type="number"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.name" label="Team Name"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.hierarchyLevel" label="Team's level in hierarchy" type="number"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-select v-model="editedItem.teamAbove" :items="teams" item-text="name" return-object label="Team above in hierarchy"></v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-select v-model="editedItem.teamBoss" :items="users" item-text="name" return-object label="Team Manager"></v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                     <v-select v-model="e6" :items="users" item-text="name" return-object :menu-props="{ maxHeight: '400' }" label="Team Members" multiple  persistent-hint></v-select>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red darken-1" text @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
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
</template>

<script>
import axios from 'axios'
  export default {
    data: () => ({
      dialog: false,
      dialogDelete: false,
      headers:
      [
        {text:"ID",value:"teamId"},
        {text:"Name", value:"name"},
        {text:"Hierarchy Level", value:"hierarchyLevel"},
        {text:"Team Above", value:"teamAbove.name"},
        {text:"Team Boss", value:"teamBoss.name"},
        {text:"Team Members", value:"teamMembers"},
        {text:"Created On", value:"createdOn"},
        {text:"Edited On", value:"editedOn"},
        {text:"", value:"actions"},
      ],
      teams:[],
      users:[],
      editedIndex: -1,
      editedItem: {
        teamId:'',
        name:'',
        hierarchyLevel:'',
        teamAbove:'',
        teamBoss:'',
        teamMembers:[],
      },
      defaultItem: {
        teamId:'',
        name:'',
        hierarchyLevel:'',
        teamAbove:'',
        teamBoss:'',
        teamMembers:[],
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    methods:{
      editItem (item) {
        this.editedIndex = this.users.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.users.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.users.splice(this.editedIndex, 1)
        axios.delete(this.$appUrl+'/team/'+encodeURIComponent(this.editedItem.teamId))
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.users[this.editedIndex], this.editedItem)
          axios.put(this.$appUrl+'/team',{ 
            teamId:this.editedItem.teamId,
            name: this.editedItem.name,
            hierarchyLevel:this.editedItem.hierarchyLevel,
            teamAbove:this.editedItem.teamAbove,
            teamBoss:this.editedItem.teamBoss,
            teamMembers:this.editedItem.teamMembers})
         
        } else {
          this.users.push(this.editedItem)
          console.log(this.editedItem)
          axios.post(this.$appUrl+'/team',{ 
            teamId:this.editedItem.teamId,
            name: this.editedItem.name,
            hierarchyLevel:this.editedItem.hierarchyLevel,
            teamAbove:this.editedItem.teamAbove,
            teamBoss:this.editedItem.teamBoss,
            teamMembers:this.editedItem.teamMembers})
        }
        this.close()
      },
    },

    mounted(){
      axios.get(this.$appUrl+'/team')
      .then(response => {this.teams = response.data})
      .catch(function (error) {
        console.log(error);
      }),
      axios.get(this.$appUrl+'/team')
      .then(response => {this.users = response.data})
      .catch(function (error) {
        console.log(error);
      })
    }
  }
</script>

<style>

</style>