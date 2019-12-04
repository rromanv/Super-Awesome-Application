<template>
  <v-container>
    <v-row>
      <v-spacer />
      <v-btn @click="addLike" small text><v-icon small color="red">mdi-heart</v-icon> Like</v-btn>
      <v-btn @click="addDislike" class="ml-4" small text><v-icon small color="red darken-4">mdi-heart-broken</v-icon> Dislike</v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'PostCommentLike',
  props: {
    postId: {
      type: Number,
      default: 0
    }
  },
  methods: {
    async addLike () {
      await this.$axios.post(`api/posts/${this.postId}/likes`, {
        like: {
          postId: this.postId,
          authorId: this.user.uid
        }
      })
      this.$emit('likeAdded')
    },
    async addDislike () {
      await this.$axios.post(`api/posts/${this.postId}/dislikes`, {
        dislike: {
          postId: this.postId,
          authorId: this.user.uid
        }
      })
      this.$emit('dislikeAdded')
    }
  },
  computed: {
    user () {
      return this.$store.getters.getUser
    }
  }
}
</script>
