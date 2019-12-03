<template>
  <v-text-field
    v-model="newMessage"
    color="blue lighten-2"
    class="mt-8"
    label="New Comment"
    append-outer-icon="mdi-send"
    @click:append-outer="addComment"
    @change="addComment"
  ></v-text-field>
</template>

<script>
export default {
  name: 'PostCommentAdd',
  data () {
    return {
      newMessage: ''
    }
  },
  props: {
    postId: {
      type: Number,
      default: 0
    }
  },
  methods: {
    async addComment () {
      if (this.newMessage.length > 0) {
        await this.$axios.post(`api/posts/${this.postId}/comments`, {
          comment: {
            text: this.newMessage,
            authorId: this.user.uid,
            authorName: this.user.displayName
          }
        })
        this.newMessage = ''
        this.$emit('commentAdded')
      }
    }
  },
  computed: {
    user () {
      return this.$store.getters.getUser
    }
  }
}
</script>
