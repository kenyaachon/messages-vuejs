import "vuetify/styles";
import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
// import { store, key } from "./store";
import { store } from "./store";

loadFonts();

const app = createApp(App);

// app.use(vuetify, store, key);
app.use(vuetify, store);
app.mount("#app");
