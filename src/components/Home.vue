//Dit moet eigenlijk de Tables wrapper component worden waarin de Table components worden 
//ingeladen met de juiste headers en objecten

<template>
  <v-container>
    <Navbar v-bind:color="color" v-bind:lighter_color="light_color"/>
    <TitleHeader class="TitleHeader" v-bind:headerText="headerText" v-bind:infoText="infoText" v-bind:color="color" v-bind:lighter-color="lighter_color"/>
    <TableView :dataHeaders="[{text:'Test',value:'Test'},{text:'Value',value:'Value'}]" :dataItems="[{Test:'Test',Value:'Value'}]" tableTitle='Test' />
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

  props:['headerText','infoText','color','light_color'],
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
     cssVars(){
        return{
            'light_color': this.calculateColor(this.color,200)
        }
    },
  },

  methods:{
    calculateColor(col,amt){
        var usePound = false;

        if (col[0] == "#") {
            col = col.slice(1);
            usePound = true;
        }

        var num = parseInt(col,16);

        var r = (num >> 16) + amt;

        if (r > 255) r = 255;
        else if  (r < 0) r = 0;

        var b = ((num >> 8) & 0x00FF) + amt;

        if (b > 255) b = 255;
        else if  (b < 0) b = 0;

        var g = (num & 0x0000FF) + amt;

        if (g > 255) g = 255;
        else if (g < 0) g = 0;

        return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
      }
    },
  }
</script>
