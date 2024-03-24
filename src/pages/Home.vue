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
        et de prestige. <br />
        📍 Basé sur
        <a
          href="https://www.google.fr/maps/place/59300+Valenciennes/"
          class="underline"
          >Valenciennes</a
        >
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
import { getVehiculeImage } from "../utils/importImages";

const images = [
  { id: 1, src: getVehiculeImage("cadillac_escalade/cadillac14.jpg") },
  { id: 2, src: getVehiculeImage("combi_t1/combi9.jpg") },
  { id: 3, src: getVehiculeImage("mini/mini-15.jpg") },
  { id: 4, src: getVehiculeImage("lincoln_towncar/limo.jpg") },
  { id: 5, src: getVehiculeImage("rolls_royce_phantom/rolls-14.jpg") },
  { id: 6, src: getVehiculeImage("bentley_continental_gt_sport/bentley-2-1.jpg"),},
  { id: 7, src: getVehiculeImage("maserati/maserati-2.jpg") },
  { id: 8, src: getVehiculeImage("ford_capri/capri.jpg") },
  { id: 9, src: getVehiculeImage("porsche_986/boxster-17.jpg") },
];
</script>

<style></style>
