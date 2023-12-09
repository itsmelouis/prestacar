<template>
  <div ref="el" class="my-20">
    <div class="my-10 mx-10 sm:my-20 md:mx-40">
      <p class="text-base md:text-lg lg:text-xl">
        Laissez vous emporter dans le <span class="font-bold">combi T1</span> de
        Volkswagen. Fabriqué en 1972 son charme de l'époque vous séduira
        rapidement, ce minibus vous emmènera lors d'événements tels que votre
        mariage ou autres.
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
      class="flex flex-col md:flex-row md:justify-around items-center mt-20 space-y-10"
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
  ["Aller Simple", "Sur devis"],
  ["Aller Retour", "Sur devis"],
  ["1h", "200€"],
  ["3h", "400€"],
  ["Forfait Mariage", "500€"],
];

const options = [
  ["Intitulé", "Prix"],
  ["Décoration intérieur", "Sur devis"],
  ["Photographe", "Sur devis"],
  ["Fleurs", "Sur devis"],
];

const images = [
  {
    id: 1,
    src: getVehiculeImage("combi_t1/combi1.jpg"),
    avif: getVehiculeImageAvif("combi_t1/combi1.avif"),
    webp: getVehiculeImageWebp("combi_t1/combi1.webp"),
  },
  {
    id: 2,
    src: getVehiculeImage("combi_t1/combi2.jpg"),
    avif: getVehiculeImageAvif("combi_t1/combi2.avif"),
    webp: getVehiculeImageWebp("combi_t1/combi2.webp"),
  },
  {
    id: 3,
    src: getVehiculeImage("combi_t1/combi3.jpg"),
    avif: getVehiculeImageAvif("combi_t1/combi3.avif"),
    webp: getVehiculeImageWebp("combi_t1/combi3.webp"),
  },
  {
    id: 4,
    src: getVehiculeImage("combi_t1/combi4.jpg"),
    avif: getVehiculeImageAvif("combi_t1/combi4.avif"),
    webp: getVehiculeImageWebp("combi_t1/combi4.webp"),
  },
  {
    id: 5,
    src: getVehiculeImage("combi_t1/combi5.jpg"),
    avif: getVehiculeImageAvif("combi_t1/combi5.avif"),
    webp: getVehiculeImageWebp("combi_t1/combi5.webp"),
  },
  {
    id: 6,
    src: getVehiculeImage("combi_t1/combi6.jpg"),
    avif: getVehiculeImageAvif("combi_t1/combi6.avif"),
    webp: getVehiculeImageWebp("combi_t1/combi6.webp"),
  },
  {
    id: 7,
    src: getVehiculeImage("combi_t1/combi7.jpg"),
    avif: getVehiculeImageAvif("combi_t1/combi7.avif"),
    webp: getVehiculeImageWebp("combi_t1/combi7.webp"),
  },
  {
    id: 8,
    src: getVehiculeImage("combi_t1/combi8.jpg"),
    avif: getVehiculeImageAvif("combi_t1/combi8.avif"),
    webp: getVehiculeImageWebp("combi_t1/combi8.webp"),
  },
];

onMounted(() => {
  window.scrollTo(0, el.value!.offsetTop - 20);
});
</script>
