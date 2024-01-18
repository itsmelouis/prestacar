import { createRouter, createWebHashHistory } from "vue-router";

import Home from "./pages/Home.vue";
import Contact from "./pages/Contact.vue";
import Car from "./pages/Car.vue";
import Presation from "./pages/Prestation.vue"

import Cadillac from "./pages/Cars/Cadillac.vue";
import CoccinelleCox from "./pages/Cars/CoccinelleCox.vue";
import CombiT1 from "./pages/Cars/CombiT1.vue";
import LincolnTowncar from "./pages/Cars/LincolnTowncar.vue";
import NewBeetleCabriolet from "./pages/Cars/NewBeetleCabriolet.vue";
import CGU from "./pages/CGU.vue";
import MustangLegend from "./pages/Cars/MustangLegend.vue";
import AudiA4 from "./pages/Cars/AudiA4.vue";
import Porsche986 from "./pages/Cars/Porsche986.vue";
import MustangGT from "./pages/Cars/MustangGT.vue";
import RollsPhantom from "./pages/Cars/RollsPhantom.vue";
import BentleyContinentalGTSport from "./pages/Cars/BentleyContinentalGTSport.vue";
import AstonMartinVolante from "./pages/Cars/AstonMartinVolante.vue";
import DodgeCharger from "./pages/Cars/DodgeCharger.vue";
import FordCapri from "./pages/Cars/FordCapri.vue";
import RollsRoyceCorniche from "./pages/Cars/RollsRoyceCorniche.vue";
import FordMustang from "./pages/Cars/mustangBlanche.vue"

import Mariage from "./pages/prestations/Mariage.vue";
import Anniversaire from "./pages/prestations/Anniversaire.vue";
import Tournage from "./pages/prestations/Tournage.vue";
import Enterrement from "./pages/prestations/Enterrement.vue";
import Aeroport from "./pages/prestations/Aeroport.vue";
import Trajet from "./pages/prestations/Trajet.vue"

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
        meta: { title: "Volkswagen Combi T1 - PrestaCar" },
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
      {
        path: "mustang-legend-lime",
        component: MustangLegend,
        meta: { title: "Mustang Legend Lime - PrestaCar" },
      },
      {
        path: "audi-a4-allroad-blanche-quattro",
        component: AudiA4,
        meta: { title: "Audi A4 Allroad blanche Quattro - PrestaCar" },
      },
      {
        path: "porsche-986",
        component: Porsche986,
        meta: { title: "Porsche 986 - PrestaCar" },
      },
      {
        path: "mustang-gt",
        component: MustangGT,
        meta: { title: "Ford Mustang GT - PrestaCar" },
      },
      {
        path: "rolls-royce-phantom",
        component: RollsPhantom,
        meta: { title: "Rolls Royce Phantom - PrestaCar" },
      },
      {
        path: "bentley-continental-gt-sport",
        component: BentleyContinentalGTSport,
        meta: { title: "Bentley Continental GT Sport - PrestaCar" },
      },
      {
        path: "aston-martin-volante",
        component: AstonMartinVolante,
        meta: { title: "Aston Martin Volante - PrestaCar" },
      },
      {
        path: "dodge-charger-rt",
        component: DodgeCharger,
        meta: { title: "Dodge Charger RT - PrestaCar" },
      },
      {
        path: "ford-capri",
        component: FordCapri,
        meta: { title: "Ford Capri Crayford Cabriolet - PrestaCar" },
      },
      {
        path: "rolls-royce-corniche",
        component: RollsRoyceCorniche,
        meta: { title: "Rolls Royce Corniche - PrestaCar" },
      },
      {
        path: "ford-mustang",
        component: FordMustang,
        meta: { title: "Ford Mustang - PrestaCar" },
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
    path: "/prestation",
    component: Presation,
    children: [
      {
        path: "mariage",
        component: Mariage,
        meta: { title: "Mariage - PrestaCar" },
      },
      {
        path: "anniversaire",
        component: Anniversaire,
        meta: { title: "Anniversaire - PrestaCar" },
      },
      {
        path: "tournage",
        component: Tournage,
        meta: { title: "Tournage - PrestaCar" },
      },
      {
        path: "enterrement",
        component: Enterrement,
        meta: { title: "Enterrement - PrestaCar" },
      },
      {
        path: "aeroport",
        component: Aeroport,
        meta: { title: "Aeroport - PrestaCar" },
      },
      {
        path: "trajet",
        component: Trajet,
        meta: { title: "Trajet - PrestaCar" },
      },
    ],
    meta: { title: "Presation - PrestaCar" },
  },
  {
    path: "/conditions-generales",
    component: CGU,
    meta: { title: "Conditions Générales - PrestaCar" },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, _from, next) => {
  document.title = (to.meta.title as string) || "Prestacar";
  next();
});
export default router;
