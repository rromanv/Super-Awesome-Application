<template>
  <v-app>
    <NavBar />
    <v-content class="blue-grey lighten-3">
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import NavBar from '../components/NavBar'

export default {
  name: 'MainPage',
  components: {
    NavBar
  }
}
</script>
