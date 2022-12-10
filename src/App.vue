<template>
  <v-app>
    <v-toolbar app> </v-toolbar>

    <v-content>
      <CreateMessage />
      <br />
      <Messages />
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
});
</script>
