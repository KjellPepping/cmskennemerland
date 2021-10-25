<template>
  <v-container fluid>
    <v-card class="mx-auto" max-width="1000" >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline">
          Welcome
        </div>
        <v-list-item-title class="text-h5 mb-1">
          This is the Kennemerland API Content Management System.
        </v-list-item-title>
        <v-list-item-subtitle>This is the Kennemerland API Content Management System.</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions>
      <v-btn outlined rounded text >
        Button
      </v-btn>
    </v-card-actions>
  </v-card>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
 
    }),
  }
</script>
