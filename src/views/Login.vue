<template>
  <v-app>
    <v-content class="cover">
      <v-container fluid class="fill-height">
        <v-row justify="center" align="center">
          <v-col cols="4">
            <v-card>
              <v-card-title class="yellow darken-4 white--text">Welcome to the 😎 Super Awesome App</v-card-title>
              <v-form v-model="valid" @submit.prevent="login">
                <v-card-text>
                  <v-text-field v-model="email" label="Email" :rules="emailRules" required></v-text-field>
                  <v-text-field
                    v-model="password"
                    type="password"
                    label="Password"
                    :rules="passwordRules"
                    required
                  ></v-text-field>
                </v-card-text>
                <v-card-actions>
                  <v-btn text color="warning" to="/register">Register</v-btn>
                  <v-spacer />
                  <v-btn :disabled="!valid" color="success" class="mr-2" type="submit">Log In</v-btn>

                  <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                      <v-btn color="#DB4437" fab small class="white--text" v-on="on">
                        <v-icon>mdi-google</v-icon>
                      </v-btn>
                    </template>
                    <span>Sign In with Google</span>
                  </v-tooltip>
                </v-card-actions>
              </v-form>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      valid: false,
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      password: '',
      passwordRules: [v => !!v || 'Password is required']
    }
  },
  methods: {
    login () {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style lang="scss" scoped>
.cover {
  background: linear-gradient(0deg, #fb872baa, #d9e021aa),
    url(https://picsum.photos/id/180/1920/1080) center center no-repeat;
  background-size: cover;
}
</style>
