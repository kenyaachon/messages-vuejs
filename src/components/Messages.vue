<template>
  <v-container>
    <v-card>
      <v-container>
        <!-- <h4 class="text-h4">Messages</h4> -->
        <v-toolbar color="black">
          <v-toolbar-title>Messages</v-toolbar-title>
        </v-toolbar>
        <v-list lines="one" @click="messageClicked">
          <!-- <v-list-item
            v-for="(message, i) in store.messages"
            @new-message="addNewMessage"
            :key="i"
            subtitle="..."
            :title="message"
          >
          </v-list-item> -->
          <v-list-item
            v-for="(message, i) in messageList()"
            :key="i"
            subtitle="..."
            :title="message"
          >
          </v-list-item>
        </v-list>
      </v-container>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import axios from "axios";
import { store } from "../store";

export default {
  data() {
    return {
      // store: store,
      message: "",
      items: [
        { type: "subheader", title: "Group #1" },
        {
          value: 1,
        },
        {
          value: 2,
        },
        {
          value: 3,
        },
        { type: "divider" },
        { type: "subheader", title: "Group #2" },
        {
          value: 4,
        },
        {
          value: 5,
        },
        {
          value: 6,
        },
      ],
    };
  },
  components: {},
  async mounted() {
    try {
      store.dispatch("posts");
      // update message list
    } catch (error) {
      console.log("error");
    }
  },
  async created() {},
  methods: {
    messageClicked(event: Event) {
      this.message = "this is the messaged clicked" + event.target;
    },

    messageList() {
      return store.state.messages;
      // return ["hello"];
    },
  },
  computed: {},
};
</script>

<style></style>
