<template>
<div class="pt-4 pl-4">
  <h1 class="display-2">Welcome {{user.displayName}}, this is the main page</h1>
  <h3 class="headline">{{user.email}}</h3>
</div>
</template>

<script>
export default {
  name: 'Feed',
  computed: {
    user () {
      return this.$store.getters.getUser
    }
  }
}
</script>
