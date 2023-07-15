import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";
import Contact from "./pages/Contact.vue";
import Car from "./pages/Car.vue";

import Cadillac from "./pages/Cars/Cadillac.vue";
import CoccinelleCox from "./pages/Cars/CoccinelleCox.vue";
import CombiT1 from "./pages/Cars/CombiT1.vue";
import LincolnTowncar from "./pages/Cars/LincolnTowncar.vue";
import NewBeetleCabriolet from "./pages/Cars/NewBeetleCabriolet.vue";
import CGU from "./pages/CGU.vue";

const routes = [
  { path: "/", component: Home, meta: { title: "Accueil - PrestaCar" } },
  {
    path: "/vehicules",
    component: Car,
    children: [
      {
        path: "cadillac-escalade",
        component: Cadillac,
        meta: { title: "Cadillac Escalade - PrestaCar" },
      },
      {
        path: "limousine-lincoln-towncar",
        component: LincolnTowncar,
        meta: { title: "Limousine Lincoln TownCar - PrestaCar" },
      },
      {
        path: "volkswagen-combi-t1",
        component: CombiT1,
        meta: { title: "Volkswagen CombiT1 - PrestaCar" },
      },
      {
        path: "volkswagen-coccinelle",
        component: CoccinelleCox,
        meta: { title: "Volkswagen Coccinelle Cox - PrestaCar" },
      },
      {
        path: "volkswagen-new-beetle-cabriolet",
        component: NewBeetleCabriolet,
        meta: { title: "Volkswagen New Beetle Cabriolet - PrestaCar" },
      },
    ],
    meta: { title: "Véhicules - PrestaCar" },
  },
  {
    path: "/contact",
    component: Contact,
    meta: { title: "Contact - PrestaCar" },
  },
  {
    path: "/conditions-generales",
    component: CGU,
    meta: { title: "Conditions Générales - PrestaCar" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _from, next) => {
  document.title = to.meta.title;
  next();
});
export default router;
