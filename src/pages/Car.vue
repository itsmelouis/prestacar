<template>
  <div class="bg-slate-50">
    <Header></Header>
    <div
      class="flex flex-col justify-center items-center space-y-8 md:space-y-16 my-10"
    >
      <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
        Nos véhicules
      </h1>
      <div class="grid grid-cols-1 md:grid-cols-3 md:gap-3 md:justify-center">
        <CardVoiture
            v-for="value in summary"
            :key="value.car"
            :items="value"
        ></CardVoiture>
        </div>
    <p class="text-xl md:text-2xl lg:text-3xl font-semibold text-center underline">
      Envie d'un véhicule non présent sur le catalogue ? N'hésitez pas à nous contacter !
      </p>
    </div>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import CardVoiture from "../components/Card/CardVoiture.vue";
import { getVehiculeImage } from "../utils/importImages";
import { getVehiculeImageAvif } from "../utils/importImages";
import { getVehiculeImageWebp } from "../utils/importImages";

const summary = [
  {
    car: "Limousine Lincoln TownCar",
    src: getVehiculeImage("lincoln_towncar/limo-6.jpg"),
    href: "/vehicules/limousine-lincoln-towncar",
  },
  {
    car: "Limousine Chrysler 300c",
    src: getVehiculeImage("limo-chrysler/limo-chrysler.jpg"),
    href: "/vehicules/limousine-chrysler-300c",
  },
  {
    car: "Limousine Lincoln TownCar",
    src: getVehiculeImage("limo-towncar/lincoln-2.jpg"),
    href: "/vehicules/limousine-lincoln",
  },
  {
    car: "Cadillac Escalade",
    src: getVehiculeImage("cadillac_escalade/cadillac.jpg"),
    href: "/vehicules/cadillac-escalade",
  },
  {
    car: "Porsche 986",
    src: getVehiculeImage("porsche_986/boxster-17.jpg"),
    href: "/vehicules/porsche-986",
  },
  {
    car: "Volkswagen Combi T1",
    src: getVehiculeImage("combi_t1/combi10.jpg"),
    href: "/vehicules/volkswagen-combi-t1",
  },
  {
    car: "Volkswagen Coccinelle Cox",
    src: getVehiculeImage("coccinel_cox/cox3.jpg"),
    href: "/vehicules/volkswagen-coccinelle",
  },
  {
    car: "Citroën 2CV",
    src: getVehiculeImage("citroen_2cv/2cv-10.jpg"),
    avif: getVehiculeImageAvif("citroen_2cv/2cv-10.avif"),
    webp: getVehiculeImageWebp("citroen_2cv/2cv-10.webp"),
    href: "/vehicules/citroen-2CV",
  },
  {
    car: "Ford Capri Crayford Cabriolet",
    src: getVehiculeImage("ford_capri/capri-6.jpg"),
    avif: getVehiculeImageAvif("ford_capri/capri-6.avif"),
    webp: getVehiculeImageWebp("ford_capri/capri-6.webp"),
    href: "/vehicules/ford-capri",
  },
  {
    car: "Mini Cooper",
    src: getVehiculeImage("mini/mini-15.jpg"),
    href: "/vehicules/mini-cooper",
  },
  {
    car: "Rolls Royce Phantom",
    src: getVehiculeImage("rolls_royce_phantom/rolls-14.jpg"),
    href: "/vehicules/rolls-royce-phantom",
  },
  {
    car: "Rolls Royce Corniche",
    src: getVehiculeImage("rolls_royce_corniche/corniche.jpg"),
    href: "/vehicules/rolls-royce-corniche",
  },
  {
    car: "Bentley Continental GT Sport",
    src: getVehiculeImage("bentley_continental_gt_sport/bentley-2-1.jpg"),
    href: "/vehicules/bentley-continental-gt-sport",
  },
  {
    car: "Mercedes Classe E Cabriolet",
    src: getVehiculeImage("mercedes/mercedes.jpg"),
    href: "/vehicules/mercedes-classe-e",
  },
  {
    car: "Aston Martin Volante",
    src: getVehiculeImage("aston_martin_volante/aston-cab-10.jpg"),
    href: "/vehicules/aston-martin-volante",
  },
  {
    car: "Maserati Ghibli",
    src: getVehiculeImage("maserati/maserati-2.jpg"),
    href: "/vehicules/maserati-ghibli",
  },
  {
    car: "Ford Mustang GT",
    src: getVehiculeImage("mustang_gt/mustang-15.jpg"),
    href: "/vehicules/mustang-gt",
  },
  {
    car: "Mustang Legend Lime",
    src: getVehiculeImage("mustang_legend/mustang_verte.jpg"),
    href: "/vehicules/mustang-legend-lime",
  },
  {
    car: "Dodge Charger RT",
    src: getVehiculeImage("dodge_charger/charger.jpg"),
    href: "/vehicules/dodge-charger-rt",
  },
  {
    car: "Volkswagen New Beetle Cabriolet",
    src: getVehiculeImage("new_beetle/new-beetle21.jpg"),
    href: "/vehicules/volkswagen-new-beetle-cabriolet",
  },
  {
    car: "Audi A4 Allroad blanche Quattro",
    src: getVehiculeImage("audi_a4/audiA4_2.jpg"),
    href: "/vehicules/audi-a4-allroad-blanche-quattro",
  },
];
</script>
