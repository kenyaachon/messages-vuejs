import "vuetify/styles";
import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
// import { store, key } from "./store";
import { store } from "./store";
import { createRouter, createWebHistory } from "vue-router";
import MessageList from "./components/MessageList.vue";
import Message from "./components/Message.vue";
import CreateMessage from "./components/CreateMessage.vue";
import Register from "./components/Register.vue";

loadFonts();

const app = createApp(App);

const routes = [
  { path: "/", component: MessageList },
  { path: "/NewMessage", component: CreateMessage },
  { path: "/Message/:id", component: Message },
  { path: "/Register", component: Register },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// app.use(vuetify, store, key);
app.use(vuetify);
app.use(store);
app.use(router);
app.mount("#app");
