<template>
<v-content>
     <v-data-table
    :headers="headers"
    :items="user"
    class="elevation-1"
  >
  <template v-slot:items="props">
      <td>{{ props.item.UserId }}</td>
       <td>{{ props.item.UserType }}</td>
       <td>{{ props.item.Name }}</td>
      <td>{{ props.item.Username }}</td>
       <td>{{ props.item.CreatedOn }}</td>
     </template>
  </v-data-table>
</v-content>
 
</template>

<script>
import axios from 'axios'
export default {
    name:'App',
      data(){
        return{
            headers: [
      {text: 'ID', value: 'UserId'},
      {text: 'Type', value: 'UserType'},
      {text: 'Name', value: 'Name'},
      {text: 'UName', value: 'Username'},
      {text: 'Creation', value: 'CreatedOn'},
      ],
            user:[]
        }
    },

      mounted(){
        axios.get('http://localhost:7071/api/user/')
        .then(response => {this.user = response.data})
    
    }

}
</script>

<style>

</style>