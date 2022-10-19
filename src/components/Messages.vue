<template>
  <div>
    <h4>Messages</h4>
    <!-- <ul v-for="(message, index) in messages" :key="index">
      <li>{{ message }}</li>
    </ul> -->
    <Listbox v-model="message" :options="messages" optionLabe="name" />
  </div>
</template>

<script lang="ts">
import Listbox from "primevue/listbox";
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
};
</script>

<style></style>
