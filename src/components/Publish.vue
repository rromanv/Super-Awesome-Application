<template>
  <v-card>
    <v-form v-model="valid" ref="publishForm" @submit.prevent="publish">
      <v-card-text>
        <v-container>
          <v-textarea v-model="textToPublish" no-resize counter="1337" label="What do you want to publish today?" :rules="publishRules">
            <template v-slot:prepend-inner>
              <v-btn icon @click.stop="showPicker=true">
                <v-icon>mdi-emoticon</v-icon>
              </v-btn>
              <v-dialog v-model="showPicker" max-width="340">
                <Picker title="Pick your emoji…" emoji="point_up" @select="addEmoji"/>
              </v-dialog>
            </template>
          </v-textarea>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn color="success" type="submit">Publish</v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
import { Picker } from 'emoji-mart-vue'

export default {
  name: 'Publish',
  data () {
    return {
      valid: false,
      textToPublish: '',
      publishRules: [
        v => !!v || 'Text to Publish is required',
        v => (v && v.length <= 1337) || 'Max 1337 characters'
      ],
      showPicker: false
    }
  },
  components: {
    Picker
  },
  methods: {
    addEmoji (emoji) {
      this.textToPublish = this.textToPublish.concat(emoji.native)
    },
    publish () {
      if (this.$refs.publishForm.validate()) {
        console.log(this.textToPublish)
        this.$refs.publishForm.reset()
        this.textToPublish = ''
      }
    }
  }
}
</script>
