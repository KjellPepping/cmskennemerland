<template>
  <h1>
      This is the dashboard
  </h1>

</template>

<script>
import axios from 'axios'
export default {

    data()
    {
        return{
            villager:[]
        }
    },
    mounted(){
        axios.get('http://acnhapi.com/v1/villagers/1')
        .then(result => this.villager = result.data)
        .catch(error=>console.log(error));
    }
}
</script>

<style>

</style>