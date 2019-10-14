<template>
  <v-text-field
    v-model="newMessage"
    color="blue lighten-2"
    class="mt-8"
    label="New Comment"
    append-outer-icon="mdi-send"
    @click:append-outer="log"
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
  methods: {
    log () {
      console.log(this.newMessage)
    }
  }
}
</script>
