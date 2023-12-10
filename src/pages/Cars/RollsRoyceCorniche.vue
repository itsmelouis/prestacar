<template>
  <div ref="el" class="my-20">
    <div class="my-10 mx-10 sm:my-20 md:mx-40">
      <p class="text-base md:text-lg lg:text-xl">
        Si l’élégance devait être une voiture, ça serais sûrement cette
        <span class="font-bold">Rolls Royce Corniche</span> blanche décapotable
        ! Les Rolls Royce n’ont plus besoin de faire leur preuve, luxe,
        élégance, c’est le véhicule idéal, sa version décapotable s’acclimatera
        très bien avec vos évènements d’été.
        <br />
        <br />
        Capacité: 3 passagers (2 recommandés).
        <br />
        <br />
        Si votre souhait ne se trouve pas dans la grille tarifaire, n'hésitez
        pas à nous contacter pour obtenir rapidement un devis. Nous saurons nous
        adapter aisément.
        <br />
        <br />
        Les expositions et visites sont sur devis. L'approche est de 30km autour
        de Valenciennes, au-delà un supplément sera demandé.
        <br />
        <br />
      </p>
    </div>
    <Carousel :items="images" />
    <div
      class="flex flex-col md:flex-row md:justify-around items-center mt-20 space-y-10 md:space-y-0"
    >
      <div class="space-y-8">
        <p class="text-center">
          Grille Tarifaire <br />(Tous nos tarifs sont dégressifs si vous louez
          plusieurs véhicules, Tarifs avec Chauffeur)
        </p>
        <Table :data="grille_tarifiaire"></Table>
      </div>
      <div class="space-y-8">
        <p class="text-center">Options</p>
        <Table :data="options"></Table>
      </div>
    </div>
    <div class="flex justify-center items-center mt-20">
      <router-link
        to="/contact"
        class="bg-yellow-400 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full text-center w-44"
        >Réserver</router-link
      >
    </div>
    <GoTop />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import {
  getVehiculeImage,
  getVehiculeImageAvif,
  getVehiculeImageWebp,
} from "../../utils/importImages";
import Carousel from "../../components/Carousel.vue";
import Table from "../../components/Table.vue";
import GoTop from "../../components/GoTop.vue";

const el = ref<HTMLDivElement>();

const grille_tarifiaire = [
  ["Temps", "Prix"],
  ["Évènement", "Sur devis"],
  ["Forfait Mariage", "1800€"],
];

const options = [
  ["Intitulé", "Prix"],
  ["Photographe", "Sur devis"],
  ["Fleurs", "Sur devis"],
];

const images = [
  {
    id: 1,
    src: getVehiculeImage("rolls_royce_corniche/corniche1.jpg"),
    avif: getVehiculeImageAvif("rolls_royce_corniche/corniche1.avif"),
    webp: getVehiculeImageWebp("rolls_royce_corniche/corniche1.webp"),
  },
  {
    id: 2,
    src: getVehiculeImage("rolls_royce_corniche/corniche2.jpg"),
    avif: getVehiculeImageAvif("rolls_royce_corniche/corniche2.avif"),
    webp: getVehiculeImageWebp("rolls_royce_corniche/corniche2.webp"),
  },
  {
    id: 3,
    src: getVehiculeImage("rolls_royce_corniche/corniche3.jpg"),
    avif: getVehiculeImageAvif("rolls_royce_corniche/corniche3.avif"),
    webp: getVehiculeImageWebp("rolls_royce_corniche/corniche3.webp"),
  },
  {
    id: 4,
    src: getVehiculeImage("rolls_royce_corniche/corniche4.jpg"),
    avif: getVehiculeImageAvif("rolls_royce_corniche/corniche4.avif"),
    webp: getVehiculeImageWebp("rolls_royce_corniche/corniche4.webp"),
  },
  {
    id: 5,
    src: getVehiculeImage("rolls_royce_corniche/corniche5.jpg"),
    avif: getVehiculeImageAvif("rolls_royce_corniche/corniche5.avif"),
    webp: getVehiculeImageWebp("rolls_royce_corniche/corniche5.webp"),
  },
  {
    id: 6,
    src: getVehiculeImage("rolls_royce_corniche/corniche6.jpg"),
    avif: getVehiculeImageAvif("rolls_royce_corniche/corniche6.avif"),
    webp: getVehiculeImageWebp("rolls_royce_corniche/corniche6.webp"),
  },
  {
    id: 7,
    src: getVehiculeImage("rolls_royce_corniche/corniche7.jpg"),
    avif: getVehiculeImageAvif("rolls_royce_corniche/corniche7.avif"),
    webp: getVehiculeImageWebp("rolls_royce_corniche/corniche7.webp"),
  },
  {
    id: 8,
    src: getVehiculeImage("rolls_royce_corniche/corniche8.jpg"),
    avif: getVehiculeImageAvif("rolls_royce_corniche/corniche8.avif"),
    webp: getVehiculeImageWebp("rolls_royce_corniche/corniche8.webp"),
  },
  {
    id: 9,
    src: getVehiculeImage("rolls_royce_corniche/corniche9.jpg"),
    avif: getVehiculeImageAvif("rolls_royce_corniche/corniche9.avif"),
    webp: getVehiculeImageWebp("rolls_royce_corniche/corniche9.webp"),
  },
  {
    id: 10,
    src: getVehiculeImage("rolls_royce_corniche/corniche10.jpg"),
    avif: getVehiculeImageAvif("rolls_royce_corniche/corniche10.avif"),
    webp: getVehiculeImageWebp("rolls_royce_corniche/corniche10.webp"),
  },
  {
    id: 11,
    src: getVehiculeImage("rolls_royce_corniche/corniche11.jpg"),
    avif: getVehiculeImageAvif("rolls_royce_corniche/corniche11.avif"),
    webp: getVehiculeImageWebp("rolls_royce_corniche/corniche11.webp"),
  },
  {
    id: 12,
    src: getVehiculeImage("rolls_royce_corniche/corniche12.jpg"),
    avif: getVehiculeImageAvif("rolls_royce_corniche/corniche12.avif"),
    webp: getVehiculeImageWebp("rolls_royce_corniche/corniche12.webp"),
  },
  {
    id: 13,
    src: getVehiculeImage("rolls_royce_corniche/corniche13.jpg"),
    avif: getVehiculeImageAvif("rolls_royce_corniche/corniche13.avif"),
    webp: getVehiculeImageWebp("rolls_royce_corniche/corniche13.webp"),
  },
  {
    id: 14,
    src: getVehiculeImage("rolls_royce_corniche/corniche14.jpg"),
    avif: getVehiculeImageAvif("rolls_royce_corniche/corniche14.avif"),
    webp: getVehiculeImageWebp("rolls_royce_corniche/corniche14.webp"),
  },
];

onMounted(() => {
  window.scrollTo(0, el.value!.offsetTop - 20);
});
</script>
