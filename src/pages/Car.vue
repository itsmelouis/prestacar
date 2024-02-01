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

const summary = [
  {
    car: "Limousine Lincoln TownCar",
    src: getVehiculeImage("lincoln_towncar/limo.jpg"),
    href: "/vehicules/limousine-lincoln-towncar",
  },
  {
    car: "Ford Mustang Cabriolet",
    src: getVehiculeImage("mustang_blanche/mustang_blanche-6.jpg"),
    href: "/vehicules/ford-mustang",
  },
  {
    car: "Cadillac Escalade",
    src: getVehiculeImage("cadillac_escalade/cadillac.jpg"),
    href: "/vehicules/cadillac-escalade",
  },
  {
    car: "Volkswagen Combi T1",
    src: getVehiculeImage("combi_t1/combi.jpg"),
    href: "/vehicules/volkswagen-combi-t1",
  },
  {
    car: "Volkswagen Coccinelle Cox",
    src: getVehiculeImage("coccinel_cox/cox3.jpg"),
    href: "/vehicules/volkswagen-coccinelle",
  },
  {
    car: "Citroën 2CV",
    src: getVehiculeImage("citroen_2cv/2cv-8.jpg"),
    href: "/vehicules/citroen-2CV",
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
    car: "Porsche 986",
    src: getVehiculeImage("porsche_986/boxster-17.jpg"),
    href: "/vehicules/porsche-986",
  },
  {
    car: "Ford Capri Crayford Cabriolet",
    src: getVehiculeImage("ford_capri/capri.jpg"),
    href: "/vehicules/ford-capri",
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
