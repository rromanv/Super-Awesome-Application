<template>
<v-container>
  <v-row>
    <v-col cols="2">
      <UserInfo />
    </v-col>
    <v-col>
      <Publish />
    </v-col>
  </v-row>
</v-container>
</template>

<script>
import UserInfo from '@/components/UserInfo'
import Publish from '@/components/Publish'

export default {
  name: 'Feed',
  components: {
    UserInfo,
    Publish
  }
}
</script>
