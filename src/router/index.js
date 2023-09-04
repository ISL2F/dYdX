import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import NotFound from "@/pages/NotFound.vue";
import DiscoverInitiativesPage from "@/pages/DiscoverInitiativesPage.vue";
import FundedGrantsPage from "@/pages/FundedGrantsPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomePage,
    },
    {
      path: "/discover",
      component: DiscoverInitiativesPage,
    },
    {
      path: "/:catchAll(.*)",
      component: NotFound,
    },
    {
      path: "/funded",
      component: FundedGrantsPage,
    },
  ],
});

export default router;
