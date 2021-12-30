//Dit moet eigenlijk de Tables wrapper component worden waarin de Table components worden 
//ingeladen met de juiste headers en objecten

<template class="template">
  <v-container>
    <Navbar v-bind:color="color" :light_color="light_color"/>
    <TitleHeader class="TitleHeader" v-bind:headerText="headerText" v-bind:infoText="infoText" v-bind:color="color" :light_color="light_color"/>
    <div v-if="headerText != 'Home'">
      <TableView :dataHeaders="getJsonHeaders" :dataItems="getDataItems" v-bind:color="color" :light_color="light_color" />
    </div>
  </v-container>
</template>

<script>
import TitleHeader from "./Title.vue"
import TableView from "./Table.vue"
import Navbar from "./Navbar.vue"
import axios from 'axios'

export default {
  data: () => ({
    dataItems:[],
    dataHeaders:[],
  }),

  props:['headerText','infoText','color','light_color','bg_color'],
  name: 'Home',
  components:{TitleHeader,Navbar,TableView},

  mounted(){
    axios.get(this.$appUrl+'policy')
    .then(response => {this.dataItems = response.data})
    .catch(function (error) {
      console.log(error);
    })
  },

  computed: {
    getJsonHeaders () {
      var headerArray = []
      var sampleItem = this.dataItems[0]
   

      for(var key in sampleItem){
        var header = JSON.stringify({text:key,value:key})
        headerArray[sampleItem.findIndex[sampleItem[key]]] += header
      }

      console.log(headerArray)
     
      return headerArray
    },

    getDataItems()
    {
      return this.dataItems
    }
  },


   

  
  
}
</script>
<style>

</style>
