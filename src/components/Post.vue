<template>
  <v-expansion-panel class="mt-5">
    <v-expansion-panel-header>
      <v-card flat>
        <v-card-text
          class="headline"
        >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur est reprehenderit maxime molestiae enim deleniti dignissimos asperiores nisi quam eum numquam illo ut id rem, possimus adipisci et maiores illum!</v-card-text>
        <v-card-actions>
          <v-list-item>
            <v-list-item-avatar>
              <v-img src="http://localhost:8080/user.png"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>John Smith</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-spacer></v-spacer>
          <p class="subtitle mr-2 ">10 Comments</p>
          <v-icon class="subtitle mr-2">mdi-heart</v-icon>
          <span class="mr-4">100</span>
          <v-icon class="subtitle mr-2">mdi-heart-broken</v-icon>
          <span class="mr-4">10</span>
        </v-card-actions>
      </v-card>
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <PostComments />
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
import PostComments from './PostComments'

export default {
  name: 'Post',
  components: {
    PostComments
  },
  methods: {
    sayHello () {
      console.log('Hello')
    }
  }
}
</script>
