<template>
  <v-container>
    <v-card>
      <v-toolbar color="black">
        <v-toolbar-title>Register New User</v-toolbar-title>
      </v-toolbar>
      <v-form>
        <v-container>
          <v-row no-gutters>
            <v-col class="pa-2 ma-2">
              <v-text-field
                v-model="userName"
                label="User Name"
                required
              ></v-text-field>
            </v-col>
            <v-col class="pa-2 ma-2">
              <v-text-field
                v-model="password"
                label="Password"
                required
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row no-gutters>
            <v-btn color="success" @click="register"> Register </v-btn>
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
      userName: "",
      password: "",
    };
  },
  components: {},
  methods: {
    async register() {
      try {
        console.log("I registered this user");
        console.log(this.userName);

        this.$store.dispatch("registerUser", {
          userName: this.userName,
          password: this.password,
        });
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style></style>
