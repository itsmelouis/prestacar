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

const getVehiculeImageUrl = (name: string): string => {
  return new URL(`../assets/vehicules/${name}`, import.meta.url).href;
};

const summary = [
  {
    car: "Cadillac Escalade",
    src: getVehiculeImageUrl("cadillac_escalade/cadillac1.jpg"),
    href: "/vehicules/cadillac-escalade",
  },
  {
    car: "Limousine Lincoln TownCar",
    src: getVehiculeImageUrl("lincoln_towncar/limo1.jpg"),
    href: "/vehicules/limousine-lincoln-towncar",
  },
  {
    car: "Volkswagen Combi T1",
    src: getVehiculeImageUrl("combi_t1/combi1.jpg"),
    href: "/vehicules/volkswagen-combi-t1",
  },
  {
    car: "Volkswagen New Beetle Cabriolet",
    src: getVehiculeImageUrl("new_beetle/new-beetle1.jpg"),
    href: "/vehicules/volkswagen-new-beetle-cabriolet",
  },
  {
    car: "Volkswagen Coccinelle Cox",
    src: getVehiculeImageUrl("coccinel_cox/cox1.jpg"),
    href: "/vehicules/volkswagen-coccinelle",
  },
  {
    car: "Audi A4 Allroad blanche Quattro",
    src: getVehiculeImageUrl("audi_a4/audiA4_2.jpg"),
    href: "/vehicules/audi-a4-allroad-blanche-quattro",
  },
  {
    car: "Mustang Legend Lime",
    src: getVehiculeImageUrl("mustang_legend/mustang3.jpg"),
    href: "/vehicules/mustang-legend-lime",
  },
  {
    car: "Ford Mustang GT",
    src: getVehiculeImageUrl("mustang_gt/mustang-15.jpg"),
    href: "/vehicules/mustang-gt",
  },
  {
    car: "Porsche 986",
    src: getVehiculeImageUrl("porsche_986/boxster-15.jpg"),
    href: "/vehicules/porsche-986",
  },
];
</script>
