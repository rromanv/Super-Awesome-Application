<template>
<v-container>
  <v-row>
    <v-col cols="2" sticky-container>
      <UserInfo v-sticky/>
    </v-col>
    <v-col>
      <Publish />
      <Posts />
    </v-col>
  </v-row>
</v-container>
</template>

<script>
import UserInfo from '@/components/UserInfo'
import Publish from '@/components/Publish'
import Posts from '@/components/Posts'

export default {
  name: 'Feed',
  components: {
    UserInfo,
    Publish,
    Posts
  }
}
</script>
