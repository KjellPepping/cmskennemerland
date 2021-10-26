<template>
  <v-data-table :headers="headers" :items="tasks" class="elevation-1">
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title class="font-weight-black">TASK</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="success" dark class="mb-2" v-bind="attrs" v-on="on">New Task</v-btn>
          </template>

          <v-card>
            <v-card-title><span class="text-h5">{{ formTitle }}</span></v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.taskId" label="Task ID" type="number"></v-text-field>
                  </v-col>
         
              
                  <v-dialog ref="dialog" v-model="modal" :return-value.sync="editedItem.startDate" persistent width="290px">
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field v-model="editedItem.startDate" label="Start Date" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>
                    </template>
                      <v-date-picker v-model="editedItem.startDate" scrollable>
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
                        <v-btn text color="primary" @click="$refs.dialog.save(editedItem.startDate)">OK</v-btn>
                      </v-date-picker>
                  </v-dialog>

                  <v-dialog ref="dialog1" v-model="modal1" :return-value.sync="editedItem.endDate" persistent width="290px">
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field v-model="editedItem.endDate" label="End Date" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>
                    </template>
                    <v-date-picker v-model="editedItem.endDate" scrollable>
                      <v-spacer></v-spacer>
                      <v-btn text color="primary" @click="modal1 = false">Cancel</v-btn>
                      <v-btn text color="primary" @click="$refs.dialog1.save(editedItem.endDate)">OK</v-btn>
                    </v-date-picker>
                  </v-dialog>
         
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.description" label="Description"></v-text-field>
                  </v-col>
              
                  <v-col cols="12" sm="6" md="4">
                    <v-select v-model="editedItem.linkedGoal" :items="goals" item-text="description" return-object label="Linked Goal"></v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-select v-model="editedItem.linkedTeam" :items="teams" item-text="name" return-object label="Linked Team"></v-select>
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
      modal: false,
      modal1:false,
      dialog: false,
      dialog1:false,
      dialogDelete: false,
      headers:
      [
        {text:"ID",value:"taskId"},
        {text:"Start date", value:"startDate"},
        {text:"End date", value:"endDate"},
        {text:"Created on", value:"createdOn"},
        {text:"Edited On", value:"editedOn"},
        {text:"Description", value:"description"},
        {text:"Completed", value:"completed"},
        {text:"Completed When", value:"completedWhen"},
        {text:"Linked Goal", value:"linkedGoal.description"},
        {text:"Linked Team", value:"linkedTeam.name"},
        {text:"", value:"actions"},
      ],
      tasks:[],
      goals:[],
      teams:[],
      editedIndex: -1,
      editedItem: {
        taskId: '',
        startDate: '',
        endDate: '',
        description: '',
        completed:'',
        linkedGoal:'',
        linkedTeam:''
      },
      defaultItem: {
        taskId: '',
        startDate: new Date(),
        endDate: new Date(),
        description: 'This is a sample task',
       
        linkedGoal:'',
        linkedTeam:''
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
        this.editedIndex = this.tasks.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.tasks.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.tasks.splice(this.editedIndex, 1)

        axios.delete(this.$appUrl+'/task/'+encodeURIComponent(this.editedItem.taskId))
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
          Object.assign(this.tasks[this.editedIndex], this.editedItem)
          axios.put(this.$appUrl+'/task',{ 
            taskId:this.editedItem.taskId,
            startDate: this.editedItem.startDate,
            endDate:this.editedItem.endDate,
            description:this.editedItem.description,
            linkedGoal:this.editedItem.linkedGoal,
            linkedTeam:this.editedItem.linkedTeam,
            })
         
        } else {
          this.tasks.push(this.editedItem)
          console.log(this.editedItem)
          axios.post(this.$appUrl+'/task',{ 
            taskId:5,
            startDate: this.editedItem.startDate,
            endDate:this.editedItem.endDate,
            description:this.editedItem.description,
            linkedGoal:this.editedItem.linkedGoal,
            linkedTeam:this.editedItem.linkedTeam,
            })
        }
        this.close()
      },
    },

    mounted(){
      axios.get(this.$appUrl+'/task')
      .then(response => {this.tasks = response.data})
      .catch(function (error) {
        console.log(error);
      }),
      axios.get(this.$appUrl+'/goal')
      .then(response => {this.goals = response.data})
      .catch(function (error) {
        console.log(error);
      }),
      axios.get(this.$appUrl+'/team')
      .then(response => {this.teams = response.data})
      .catch(function (error) {
        console.log(error);
      })
    }
  }
</script>

<style>

</style>