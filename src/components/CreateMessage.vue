<template>
  <v-container>
    <v-card>
      <v-form>
        <v-container>
          <v-row no-gutters>
            <v-col>
              <v-text-field label="Message" required></v-text-field>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-btn color="success" @click="submit"> Submit </v-btn>
          </v-row>
        </v-container>
      </v-form>
    </v-card>
  </v-container>
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
