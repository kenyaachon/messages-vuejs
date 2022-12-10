<template>
  <div>
    <h4 class="text-h4">Messages</h4>

    <v-card>
      <v-list lines="one" @click="messageClicked">
        <v-list-item
          v-for="(message, i) in messages"
          :key="i"
          subtitle="..."
          :title="message"
        >
          <!-- <v-list-item-content>
          <v-list-item-title v-text="message"></v-list-item-title>
        </v-list-item-content> -->
        </v-list-item>
      </v-list>
    </v-card>
    <p>{{ message }}</p>

    <v-card>
      <v-list :items="items"></v-list>
    </v-card>
  </div>
</template>

<script lang="ts">
import axios from "axios";
export default {
  data() {
    return {
      messages: [],
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
  },
  methods: {
    messageClicked(event: Event) {
      this.message = "this is the messaged clicked" + event.target;
    },
  },
};
</script>

<style></style>
