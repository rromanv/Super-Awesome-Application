<template>
  <v-container fluid class="pa-0">
    <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-parallax>
    <v-container>
      <v-row justify="center">
        <v-col cols="2">
          <v-avatar size="240" class="profilepic elevation-12">
            <v-img :src="user.photoURL"></v-img>
          </v-avatar>
        </v-col>
        <v-col cols="3">
          <span class="display-3">{{user.displayName}}</span>
          <br />
          <span class="headline">{{user.email}}</span>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="10">
          <v-tabs v-model="tab" right color="error" background-color="transparent">
            <v-tab>Posts</v-tab>
            <v-tab>Friends</v-tab>
          </v-tabs>
          <v-tabs-items class="transparent" v-model="tab">
            <v-tab-item>
              <Posts />
            </v-tab-item>
            <v-tab-item>
              <Friends />
            </v-tab-item>
          </v-tabs-items>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import Posts from '@/components/Posts'
import Friends from '@/components/Friends'

export default {
  name: 'Profile',
  data () {
    return {
      tab: 0
    }
  },
  components: {
    Posts,
    Friends
  },
  computed: {
    user () {
      return this.$store.getters.getUser
    }
  }
}
</script>

<style lang="scss" scoped>
.profilepic {
  margin-top: -120px;
}
</style>
