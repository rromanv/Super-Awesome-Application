<template>
  <v-expansion-panels>
    <Post v-for="post in posts" :key="post.id" :post="post"/>
  </v-expansion-panels>
</template>

<script>
import Post from './Post'

export default {
  name: 'Posts',
  components: {
    Post
  },
  computed: {
    posts () {
      return this.$store.getters.getPosts
    }
  }
}
</script>
