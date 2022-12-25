<template>
  <v-app>
    <v-toolbar app>
      <v-btn class="pa-3 ma-2" flat to="/">Messages</v-btn>
      <br />
      <v-btn class="pa-3 ma-2" flat to="/NewMessage">New Messages</v-btn>

      <v-spacer />
      <v-btn class="pa-3 ma-2" flat>Register</v-btn>
      <v-btn class="pa-3 ma-2" flat>Login</v-btn>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import MessageList from "./components/MessageList.vue";
// import CreateMessage from "./components/CreateMessage.vue";

export default defineComponent({
  name: "App",

  components: {
    // Messages,
    // CreateMessage,
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
