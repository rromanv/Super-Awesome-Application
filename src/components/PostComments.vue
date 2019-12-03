<template>
  <v-container>
    <v-row align="center" justify="end">
      <PostCommentLike :postId="postId" @likeAdded="$emit('likeAdded')" @dislikeAdded="$emit('dislikeAdded')"/>
      <PostComment v-for="comment in comments" :key="comment.id" :comment="comment" />
      <PostCommentAdd :postId="postId" @commentAdded="$emit('commentAdded')" />
    </v-row>
  </v-container>
</template>

<script>
import PostComment from './PostComment'
import PostCommentAdd from './PostCommentAdd'
import PostCommentLike from './PostCommentLike'

export default {
  name: 'PostComments',
  props: {
    comments: {
      type: Array,
      default: () => []
    },
    postId: {
      type: Number,
      default: 0
    }
  },
  components: {
    PostComment,
    PostCommentAdd,
    PostCommentLike
  }
}
</script>
