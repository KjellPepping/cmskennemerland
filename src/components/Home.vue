//Dit moet eigenlijk de Tables wrapper component worden waarin de Table components worden 
//ingeladen met de juiste headers en objecten

<template>
  <v-container>
    <Navbar v-bind:color="color" v-bind:light_color="light_color"/>
    <TitleHeader class="TitleHeader" v-bind:headerText="headerText" v-bind:infoText="infoText" v-bind:color="color" v-bind:light_color="light_color"/>
    <TableView :dataHeaders="[{text:'Test',value:'Test'},{text:'Value',value:'Value'}]" :dataItems="[{Test:'Test',Value:'Value'}]" tableTitle='Test' v-bind:color="color" v-bind:light_color="light_color" />
  </v-container>
</template>

<script>
import TitleHeader from "./Title.vue"
import TableView from "./Tables.vue"
import Navbar from "./Navbar.vue"
import axios from 'axios'

export default {

  data: () => ({
    dataItems:[],
  }),

  props:['headerText','infoText','color', 'light_color'],
  name: 'Home',
  components:{TitleHeader,Navbar,TableView},
  
  mounted(){
    axios.get(this.$appUrl+'policy')
    .then(response => {this.dataItems = response.data})
    .catch(function (error) {
      console.log(error);
    })
  },

  computed:{
    getJsonHeaders(){
      console.log(this.dataItems.length)
      this.dataItems.forEach(element => {
        console.log(element);
      });
      return null
    },
  },
}
</script>
