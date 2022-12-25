<template>
  <v-container>
    <v-card>
      <v-toolbar color="black">
        <v-toolbar-title>Message</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        {{ messageBody.text }}
      </v-card-text>
      <v-card-text> User {{ messageBody.user }} </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
export default {
  data() {
    return {
      messageBody: "oh yeah",
    };
  },
  components: {},
  async mounted() {
    this.messageBody = await this.$store.dispatch(
      "getMessage",
      this.$route.params.id
    );
  },
  methods: {},
};
</script>

<style></style>
