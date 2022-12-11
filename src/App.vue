<template>
  <v-app>
    <v-toolbar app> </v-toolbar>

    <v-content>
      <CreateMessage @new-message="passData" ref="createmsg" />
      <br />
      <Messages ref="msg" />
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
      console.log("were passing some data");
      this.$refs.msg.addNewMessage(message);
    },
  },
});
</script>
