<template>
  <div class="bg-slate-50">
    <Header></Header>
    <div
      class="flex flex-col justify-center items-center space-y-8 md:space-y-16 my-10"
    >
      <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
        Nos véhicules
      </h1>
      <div
        class="md:flex md:flex-row md:flex-wrap md:my-20 md:justify-center md:items-center md:gap-3"
      >
        <div v-for="value in summary" :key="value.car">
          <CardVoiture :items="value"></CardVoiture>
        </div>
      </div>
      <p
        class="text-xl md:text-2xl lg:text-3xl font-semibold text-center underline"
      >
        Envie d'un véhicule non présent sur le catalogue ? N'hésitez pas à nous
        contacter !
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
    car: "Cadillac Escalade",
    src: getVehiculeImage("cadillac_escalade/cadillac1.jpg"),
    href: "/vehicules/cadillac-escalade",
  },
  {
    car: "Limousine Lincoln TownCar",
    src: getVehiculeImage("lincoln_towncar/limo1.jpg"),
    href: "/vehicules/limousine-lincoln-towncar",
  },
  {
    car: "Volkswagen Combi T1",
    src: getVehiculeImage("combi_t1/combi1.jpg"),
    href: "/vehicules/volkswagen-combi-t1",
  },
  {
    car: "Volkswagen New Beetle Cabriolet",
    src: getVehiculeImage("new_beetle/new-beetle21.jpg"),
    href: "/vehicules/volkswagen-new-beetle-cabriolet",
  },
  {
    car: "Volkswagen Coccinelle Cox",
    src: getVehiculeImage("coccinel_cox/cox1.jpg"),
    href: "/vehicules/volkswagen-coccinelle",
  },
  {
    car: "Audi A4 Allroad blanche Quattro",
    src: getVehiculeImage("audi_a4/audiA4_2.jpg"),
    href: "/vehicules/audi-a4-allroad-blanche-quattro",
  },
  {
    car: "Mustang Legend Lime",
    src: getVehiculeImage("mustang_legend/mustang_verte.jpg"),
    href: "/vehicules/mustang-legend-lime",
  },
  {
    car: "Ford Mustang GT",
    src: getVehiculeImage("mustang_gt/mustang-15.jpg"),
    href: "/vehicules/mustang-gt",
  },
  {
    car: "Porsche 986",
    src: getVehiculeImage("porsche_986/boxster-15.jpg"),
    href: "/vehicules/porsche-986",
  },
  {
    car: "Rolls Royce Phantom",
    src: getVehiculeImage("rolls_royce_phantom/rolls-11.jpg"),
    href: "/vehicules/rolls-royce-phantom",
  },
  {
    car: "Aston Martin Volante",
    src: getVehiculeImage("aston_martin_volante/aston-cab-8.jpg"),
    href: "/vehicules/aston-martin-volante",
  },
  {
    car: "Bentley Continental GT Sport",
    src: getVehiculeImage("bentley_continental_gt_sport/bentley-5.jpg"),
    href: "/vehicules/bentley-continental-gt-sport",
  },
];
</script>
