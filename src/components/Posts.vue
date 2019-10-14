<template>
  <v-expansion-panels>
    <Post v-for="(item,i) in 5" :key="i"/>
  </v-expansion-panels>
</template>

<script>
import Post from './Post'

export default {
  name: 'Posts',
  components: {
    Post
  }
}
</script>
