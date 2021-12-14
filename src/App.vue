<template>
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
      drawer: false,
      group: null,
    }),
  name: 'App',
  computed: {
    currentRouteName() {
        return this.$route.params;
    }
  }
};
</script>
