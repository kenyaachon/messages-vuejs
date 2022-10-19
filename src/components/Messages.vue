<template>
  <div>
    <h2>Messages</h2>
    <!-- <ul v-for="(message, index) in messages" :key="index">
      <li>{{ message }}</li>
    </ul> -->
    <Listbox v-model="message" :options="messages" optionLabe="name" />
  </div>
</template>

<script lang="ts">
import Listbox from "primevue/listbox";
import axios from "axios";
export default {
  data() {
    return {
      messages: ["what is up my guy", "hi", "We are"],
      message: "",
    };
  },
  components: {
    Listbox,
  },
  mounted() {
    axios
      .get("http://localhost:3000/messages")
      .then((res) => (this.messages = res.data));
  },
};
</script>

<style></style>
