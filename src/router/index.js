import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import AddCardLinkView from "@/views/AddCardLinkView.vue";
import CommunicatesView from "@/views/CommunicatesView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/add-card-link",
    name: "add-card-link",
    component: AddCardLinkView,
  },
  {
    path: "/noticias",
    name: "noticias",
  },
  {
    path: "/communicates",
    name: "communicates",
    component: CommunicatesView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
