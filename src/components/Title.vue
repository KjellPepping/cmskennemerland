<template>
    <v-container class="TitleHeader" :style="cssVars">
        <div>
            <h1 class="font-weight-black">{{headerText}}</h1>
        </div>
        <div>
            <span class="font-italic">{{infoText}}</span>
        </div>
    </v-container>
</template>

<script>
export default {
    props:['headerText','infoText','color','lighter_color'],
    computed:{
        cssVars(){
            return{
                '--color': this.color,
                '--lighter-color': this.lighter_color
            }
        },
    },
}
</script>

<style>
.TitleHeader
{
  border-radius: 10px;
  box-shadow: 5px 5px 0px var(--color), 10px 10px 0px var(--lighter-color);
  max-width: 100vw;
  background-color: cornsilk;
}


</style>