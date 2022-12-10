<template>
  <v-flex>
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field label="Message" required></v-text-field>
          </v-col>
        </v-row>
      </v-container>

      <v-btn color="success" class="mr-4" @click="submit"> Submit </v-btn>
    </v-form>
  </v-flex>
</template>

<script>
// import InputText from "primevue/inputtext";
export default {
  data() {
    return {};
  },
  components: {
    // InputText,
  },
  methods: {
    async submit() {},
  },
};
</script>

<style></style>
