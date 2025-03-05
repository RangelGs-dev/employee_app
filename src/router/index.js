import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import AddCardLinkView from "@/views/AddCardLinkView.vue";
import ReleaseView from "@/views/ReleaseView.vue";
import AddNewReleaseView from "@/views/AddNewReleaseView.vue";

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
    path: "/releases",
    name: "releases",
    component: ReleaseView,
  },
  {
    path: "/add-release",
    name: "add-release",
    component: AddNewReleaseView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
