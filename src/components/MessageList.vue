<template>
  <v-container>
    <v-card>
      <v-container>
        <v-toolbar color="black">
          <v-toolbar-title>Messages</v-toolbar-title>
        </v-toolbar>
        <v-list lines="one" @click="messageClicked">
          <v-list-item
            v-for="(message, i) in messageList()"
            :key="i"
            :subtitle="message.user"
            :title="message.text"
            :to="'message/' + i"
          >
          </v-list-item>
        </v-list>
      </v-container>
    </v-card>
  </v-container>
</template>

<script lang="ts">
export default {
  data() {
    return {
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
      this.$store.dispatch("posts");
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
      return this.$store.state.messages;
    },
  },
  computed: {},
};
</script>

<style></style>
