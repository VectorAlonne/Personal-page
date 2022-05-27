import { createRouter, createMemoryHistory } from "vue-router";

import ContactPage from "./pages/content/ContactPage.vue";
import HomePage from "./pages/home/HomePage.vue";

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: HomePage },
    { path: "/contact", component: ContactPage },
  ],
});

export default router;
