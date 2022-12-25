<template>
  <v-app>
    <v-toolbar app>
      <v-btn class="pa-3 ma-2" flat to="/">Messages</v-btn>
      <br />
      <v-btn class="pa-3 ma-2" flat to="/NewMessage">New Messages</v-btn>

      <v-spacer />
      <v-btn class="pa-3 ma-2" flat v-if="!auth" to="/Register">Register</v-btn>
      <v-btn class="pa-3 ma-2" flat v-if="!auth">Login</v-btn>
      <v-btn class="pa-3 ma-2" flat v-if="auth" @click="$store.commit('logout')"
        >Logout</v-btn
      >
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
      isAuthenticated: this.$store.state.token,
    };
  },
  methods: {
    passData(message: string) {
      console.log("were passing some data", message);
      // this.$refs.msg.addNewMessage(message);
    },
    logout() {
      this.$store.dispatch("logout");
    },
  },
  computed: {
    auth() {
      return this.$store.state.token;
    },
  },
});
</script>
