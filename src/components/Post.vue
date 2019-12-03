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
          <p class="subtitle mr-2">{{comments.length}} Comments</p>
          <v-icon class="subtitle mr-2">mdi-heart</v-icon>
          <span class="mr-4">{{likes}}</span>
          <v-icon class="subtitle mr-2">mdi-heart-broken</v-icon>
          <span class="mr-4">{{dislikes}}</span>
        </v-card-actions>
      </v-card>
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <PostComments :comments="comments" :postId="post.id" @commentAdded="fetchComments" @likeAdded="fetchLikes" @dislikeAdded="fetchDislikes"/>
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
  data () {
    return {
      comments: [],
      likes: 0,
      dislikes: 0
    }
  },
  mounted () {
    this.fetchComments()
    this.fetchLikes()
    this.fetchDislikes()
  },
  components: {
    PostComments
  },
  methods: {
    async fetchComments () {
      try {
        const commetsResponse = await this.$axios.get(`api/posts/${this.post.id}/comments`)
        this.comments = commetsResponse.data ? commetsResponse.data : []
      } catch (error) {}
    },
    async fetchLikes () {
      const likesResponse = await this.$axios.get(`api/posts/${this.post.id}/likes`)
      this.likes = likesResponse.data[0].likes
    },
    async fetchDislikes () {
      const dislikesResponse = await this.$axios.get(`api/posts/${this.post.id}/dislikes`)
      this.dislikes = dislikesResponse.data[0].dislikes
    }
  }
}
</script>
