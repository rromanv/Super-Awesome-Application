<template>
  <v-sheet color="transparent">
    <v-container>
      <v-row>
        <v-col class="text-center">
          <v-avatar size="120">
            <v-img :src="user.photoURL"></v-img>
          </v-avatar>
          <p class="title mt-1 mb-0">{{user.displayName}}</p>
          <p class="subtitle">{{user.email}}</p>
          <v-btn class="blue lighten-2" dark><v-icon left>mdi-account</v-icon>My Profile</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  name: 'UserInfo',
  computed: {
    user () {
      return this.$store.getters.getUser
    }
  }
}
</script>
