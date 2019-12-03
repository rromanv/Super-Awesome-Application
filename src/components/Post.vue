<template>
  <v-expansion-panel class="mt-5">
    <v-expansion-panel-header>
      <v-card flat>
        <v-card-text class="headline">{{post.text}}</v-card-text>
        <v-card-actions>
          <v-list-item>
            <v-list-item-avatar>
              <v-img :src="post.authorPhoto"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{post.authorName}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-spacer></v-spacer>
          <p class="subtitle mr-2">10 Comments</p>
          <v-icon class="subtitle mr-2">mdi-heart</v-icon>
          <span class="mr-4">100</span>
          <v-icon class="subtitle mr-2">mdi-heart-broken</v-icon>
          <span class="mr-4">10</span>
        </v-card-actions>
      </v-card>
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <PostComments />
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
import PostComments from './PostComments'

export default {
  name: 'Post',
  props: {
    post: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    PostComments
  }
}
</script>
