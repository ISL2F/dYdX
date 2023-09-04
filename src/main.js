import "@/assets/main.scss";

import { createApp } from "vue";
import App from "./App.vue";

import components from "@/components/index.js";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faXmark,
  faArrowRight,
  faPlus,
  faMinus,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import router from "@/router/index.js";

const app = createApp(App);
components.forEach((component) => {
  app.component(component.name, component);
});

app.use(router);

library.add(faBars, faXmark, faArrowRight, faPlus, faMinus, faCheck);
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
