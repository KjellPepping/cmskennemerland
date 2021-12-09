//Dit moet eigenlijk de Tables wrapper component worden waarin de Table components worden 
//ingeladen met de juiste headers en objecten

<template>
<v-container>
  <TitleHeader headerText='test' infoText="Dit is een test"/>
  <TableView :dataHeaders="[{text:'Test',value:'Test'},{text:'Value',value:'Value'}]" :dataItems="[{Test:'Test',Value:'Value'}]" tableTitle='Test' />
  <div @load="getJsonHeaders()"/>
</v-container>
</template>

<script>
import TitleHeader from "./Title.vue"
import TableView from "./Table.vue"
import axios from 'axios'

  export default {

    data: () => ({
      dataItems:[],
    }),

    name: 'HelloWorld',
    components:{TitleHeader,TableView},
    

    mounted(){
      axios.get(this.$appUrl+'policy')
      .then(response => {this.dataItems = response.data})
      .catch(function (error) {
        console.log(error);
      })
    },

    methods:{
      getJsonHeaders(){
        this.dataItems.array.forEach(element => {
          console.log(element);
        });
      }
    },

   
  }
</script>
