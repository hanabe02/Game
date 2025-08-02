import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Mainview from "@/views/Main.vue";
import IntroView from '@/views/intro.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "main",
    component: Mainview,
  },
  {
    path: "/intro",
    name: "intro",
    component: IntroView,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
