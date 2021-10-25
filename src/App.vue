<template>
  <v-app>
    <v-app-bar color="blue darken-3" dark app>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>Kennemerland CMS {{ currentRouteName }}</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary absolute>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">

            <v-list-item color="red">
            <v-list-item-title class="overline font-weight-black">Navigation Menu</v-list-item-title>
          </v-list-item>

          <v-list-item href="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title >Home</v-list-item-title>
          </v-list-item>

          <v-list-item href="/user">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>User</v-list-item-title>
          </v-list-item>

          <v-list-item href="/task">
            <v-list-item-icon>
              <v-icon>mdi-calendar-check</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Task</v-list-item-title>
          </v-list-item>

          <v-list-item href="/goal">
            <v-list-item-icon>
              <v-icon>mdi-flag-checkered</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Goal</v-list-item-title>
          </v-list-item>

          <v-list-item href="/report">
            <v-list-item-icon>
              <v-icon>mdi-chart-areaspline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Report</v-list-item-title>
          </v-list-item>

          <v-list-item href="/policy">
            <v-list-item-icon>
              <v-icon>mdi-ruler-square</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Policy</v-list-item-title>
          </v-list-item>

          <v-list-item href="/team">
            <v-list-item-icon>
              <v-icon>mdi-account-group</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Team</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
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
        return this.$router.name;
    }
}
};
</script>
