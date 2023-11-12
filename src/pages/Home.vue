<template>
  <div class="bg-slate-50">
    <Header></Header>
    <div
      class="flex flex-col items-center space-y-8 md:space-y-16 mb-10 rounded-md min-h-[50vh]"
    >
      <CarouselComp :items="images"></CarouselComp>
      <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
        Bienvenue sur PrestaCar !
      </h1>
      <p class="text-base md:text-lg lg:text-xl text-center">
        Une envie de voyager dans la voiture de vos rêves pour le moment le plus
        important de votre vie ? N'attendez plus !
      </p>
      <h2 class="text-xl md:text-2xl lg:text-3xl font-bold uppercase">
        Découvrez nos véhicules
      </h2>
      <p class="text-base md:text-lg lg:text-xl text-center">
        Organisez vos déplacements à plusieurs grâce à nos véhicules de confort
        et de prestige.
      </p>
      <router-link
        to="/vehicules"
        class="bg-yellow-400 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full"
        >Plus d'infos</router-link
      >
    </div>
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import CarouselComp from "../components/CarouselComp.vue";

const getVehiculeImageUrl = (name: string): string => {
  return new URL(`../assets/vehicules/${name}`, import.meta.url).href;
};

const images = [
  { id: 1, src: getVehiculeImageUrl("cadillac_escalade/cadillac1.jpg") },
  { id: 2, src: getVehiculeImageUrl("combi_t1/combi1.jpg") },
  { id: 3, src: getVehiculeImageUrl("lincoln_towncar/limo1.jpg") },
  { id: 4, src: getVehiculeImageUrl("cadillac_escalade/cadillac14.jpg") },
  {
    id: 4,
    src: getVehiculeImageUrl("bentley_continental_gt_sport/bentley-5.jpg"),
  },
  { id: 4, src: getVehiculeImageUrl("rolls_royce_phantom/rolls-11.jpg") },
];
</script>

<style></style>
