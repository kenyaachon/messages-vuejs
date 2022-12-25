<template>
  <v-container>
    <v-card>
      <v-toolbar color="black">
        <v-toolbar-title>New Messages</v-toolbar-title>
      </v-toolbar>
      <v-form>
        <v-container>
          <v-row no-gutters>
            <v-col>
              <v-text-field
                v-model="messageBody"
                label="Message"
                required
              ></v-text-field>
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

<script lang="ts">
// import InputText from "primevue/inputtext";

export default {
  data() {
    return {
      messageBody: "",
    };
  },
  components: {},
  methods: {
    async submit() {
      try {
        console.log("I submitted something");
        console.log(this.messageBody);

        //store.dispatch("addMessage", this.messageBody);
        this.$store.dispatch("addMessage", this.messageBody);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style></style>
