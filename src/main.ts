import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import ListBox from "primevue/listbox";
import InputText from "primevue/inputtext";

import "./assets/main.css";

const app = createApp(App);

app.use(PrimeVue);

app.component("ListBox", ListBox);
app.component("InputText", InputText);
app.mount("#app");
