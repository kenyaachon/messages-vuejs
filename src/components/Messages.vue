<template>
  <v-container>
    <v-card>
      <v-container>
        <!-- <h4 class="text-h4">Messages</h4> -->
        <v-toolbar color="black">
          <v-toolbar-title>Messages</v-toolbar-title>
        </v-toolbar>
        <v-list lines="one" @click="messageClicked">
          <v-list-item
            v-for="(message, i) in messages"
            @new-message="addNewMessage"
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

export default {
  data() {
    return {
      messages: [] as string[],
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
  mounted() {
    axios
      .get("http://localhost:3000/messages")
      .then((res) => (this.messages = res.data));

    // update message list
  },
  async created() {},
  methods: {
    messageClicked(event: Event) {
      this.message = "this is the messaged clicked" + event.target;
    },
    addNewMessage(message: string) {
      console.log("hello there we see you");
      this.messages.push(message);
    },
  },
};
</script>

<style></style>
