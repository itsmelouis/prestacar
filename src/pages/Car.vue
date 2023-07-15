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
    car: "Volkswagen CombiT1",
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
    src: getVehiculeImageUrl("cadillac_escalade/cadillac1.jpg"),
    href: "/vehicules/volkswagen-coccinelle",
  },
];
</script>
