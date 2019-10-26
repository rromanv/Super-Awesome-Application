<template>
  <v-container fluid>
    <v-row justify="start">
      <v-col v-for="(friend, index) in friends" :key="index">
        <v-container>
          <v-row justify="center">
            <v-avatar size="200" class="elevation-12">
              <v-img :src="friend.photo" />
            </v-avatar>
          </v-row>
          <v-row>
            <v-col>
              <p class="headline text-center">{{friend.name}}</p>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Friends',
  data () {
    return {
      friends: []
    }
  },
  mounted () {
    axios.get('https://uinames.com/api/?amount=20&ext&region=england')
      .then(r => (this.friends = r.data))
  }
}
</script>

<style lang="scss" scoped>

</style>
