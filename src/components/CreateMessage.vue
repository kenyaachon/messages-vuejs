<template>
  <v-container>
    <v-card>
      <v-toolbar color="black">
        <v-toolbar-title>New Messages</v-toolbar-title>
      </v-toolbar>
      <v-form>
        <v-container>
          <v-row no-gutters>
            <v-col>
              <v-text-field
                v-model="messageBody"
                label="Message"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-btn color="success" @click="submit"> Submit </v-btn>
          </v-row>
        </v-container>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
// import InputText from "primevue/inputtext";
import axios from "axios";
import { store } from "../store";
export default {
  data() {
    return {
      messageBody: "",
    };
  },
  components: {
    // InputText,
  },
  methods: {
    async submit() {
      try {
        console.log("I submitted something");
        console.log(this.messageBody);

        store.dispatch("addMessage", this.messageBody);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style></style>
