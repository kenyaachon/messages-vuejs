import "vuetify/styles";
import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
// import { store, key } from "./store";
import { store } from "./store";
import { createRouter, createWebHashHistory } from "vue-router";
import Messages from "./components/Messages.vue";
import CreateMessage from "./components/CreateMessage.vue";

loadFonts();

const app = createApp(App);

const routes = [
  { path: "/", component: Messages },
  { path: "/NewMessage", component: CreateMessage },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// app.use(vuetify, store, key);
app.use(vuetify);
app.use(store);
app.use(router);
app.mount("#app");
