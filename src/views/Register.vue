<template>
  <v-app>
    <v-content class="cover">
      <v-container fluid class="fill-height">
        <v-row justify="center" align="center">
          <v-col cols="4">
            <v-card>
              <v-card-title class="yellow darken-4 white--text">Welcome to the 😎 Super Awesome App</v-card-title>
              <v-form v-model="valid" @submit.prevent="signUp">
                <v-card-text>
                  <v-text-field v-model="name" label="Name" :rules="nameRules" required></v-text-field>
                  <v-text-field v-model="email" label="Email" :rules="emailRules" required></v-text-field>
                  <v-text-field
                    v-model="password"
                    type="password"
                    label="Password"
                    :rules="passwordRules"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="confirmPassword"
                    type="password"
                    label="Confirm Password"
                    :rules="confirmPasswordRules"
                    required
                  ></v-text-field>
                </v-card-text>
                <v-card-actions>
                  <v-btn text color="warning" to="/login">Log In</v-btn>
                  <v-spacer />
                  <v-btn :disabled="!valid" color="success" class="mr-2" type="submit">sign Up</v-btn>

                  <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                      <v-btn @click="signUpWithGoogle" color="#DB4437" fab small class="white--text" v-on="on">
                        <v-icon>mdi-google</v-icon>
                      </v-btn>
                    </template>
                    <span>Sign Up with Google</span>
                  </v-tooltip>
                </v-card-actions>
              </v-form>
              <v-alert type="error" v-if="getError.error">
                {{getError.msg}}
              </v-alert>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      valid: false,
      name: '',
      nameRules: [v => !!v || 'Name is required'],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      password: '',
      passwordRules: [v => !!v || 'Password is required'],
      confirmPassword: '',
      confirmPasswordRules: [
        v => !!v || 'Confirm Password is required',
        v => this.password === v || 'Password must match'
      ]
    }
  },
  methods: {
    signUp () {
      this.$store.dispatch('signUp', {
        email: this.email,
        password: this.password,
        name: this.name
      })
    },
    signUpWithGoogle () {
      this.$store.dispatch('signUpWithGoogle')
    }
  },
  computed: {
    getError () {
      return this.$store.getters.getError
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
