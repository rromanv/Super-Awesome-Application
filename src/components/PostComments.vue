<template>
<v-container>
  <v-row align="center" justify="end">
    <PostComment v-for="comment in comments" :key="comment.id" :comment="comment"/>
    <PostCommentAdd />
  </v-row>
</v-container>
</template>

<script>
import PostComment from './PostComment'
import PostCommentAdd from './PostCommentAdd'

export default {
  name: 'PostComments',
  data () {
    return {
      comments: [
        {
          id: 0,
          text: 'first commentfirst commentfirst commentfirst commentfirst commentfirst comment',
          author: 'John Smith',
          type: 'normal'
        },
        {
          id: 2,
          text: 'Second',
          author: 'John Smith',
          type: 'normal'
        },
        {
          id: 3,
          text: 'Other one',
          author: 'John Smith',
          type: 'normal'
        },
        {
          id: 4,
          text: 'The chosen One',
          author: 'Me',
          type: 'special'
        }
      ]
    }
  },
  components: {
    PostComment,
    PostCommentAdd
  }
}
</script>
