<template>
  <v-col cols="12" class="pa-0">
    <v-chip class="ma-2 body-2" :class="comment.authorId == user.uid ? `blue lighten-2 white--text` : `black--text`" large>{{comment.text}}</v-chip>
    <v-chip color="transparent" class="ma-2 caption">{{comment.authorName}}</v-chip>
  </v-col>
</template>

<script>
export default {
  name: 'PostComment',
  props: {
    comment: {
      type: Object,
      default: function () {
        return {}
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
