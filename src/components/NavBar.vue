<template>
  <v-app-bar app absolute color="yellow darken-4" dark>
    <router-link to="/" class="no-decoration white--text">
      <v-toolbar-title>😎  Super Awesome App</v-toolbar-title>
    </router-link>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.no-decoration {
  text-decoration: none;
}
</style>
