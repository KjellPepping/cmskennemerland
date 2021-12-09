<template>
    <v-container>
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
    props:['headerText','infoText']
}
</script>

<style>

</style>