<template>
  <v-app>
    <v-toolbar app>
      <v-btn flat to="/">Messages</v-btn>
      <br />
      <v-btn flat to="/NewMessage">New Messages</v-btn>

      <v-spacer />
      <v-btn flat>Login</v-btn>
    </v-toolbar>

    <v-content>
      <!-- <CreateMessage @new-message="passData" ref="createmsg" /> -->
      <!-- <CreateMessage />
      <br />
      <Messages ref="msg" /> -->
      <router-view />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Messages from "./components/Messages.vue";
import CreateMessage from "./components/CreateMessage.vue";

export default defineComponent({
  name: "App",

  components: {
    Messages,
    CreateMessage,
  },

  data() {
    return {
      //
    };
  },
  methods: {
    passData(message: string) {
      console.log("were passing some data", message);
      // this.$refs.msg.addNewMessage(message);
    },
  },
});
</script>
