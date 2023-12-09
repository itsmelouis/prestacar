<template>
  <div ref="el" class="my-20">
    <div class="my-10 mx-10 sm:my-20 md:mx-40">
      <p class="text-base md:text-lg lg:text-xl">
        Notre <span class="font-bold">Porsche 986</span> vous dévoileras luxe et
        performance. Ce bijou allemand de 210 chevaux incarne l'élégance
        intemporelle et la sportivité. Prêt à transformer votre événement en un
        moment inoubliable grâce à ce sublime cabriolet gris ?
        <br />
        <br />
        Capacité: 1 passager.
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
  ["Aller Simple", "Sur devis"],
  ["Aller Retour", "Sur devis"],
  ["3h", "300€"],
  ["Forfait Mariage", "400€"],
];

const options = [
  ["Intitulé", "Prix"],
  ["Photographe", "Sur devis"],
  ["Fleurs", "Sur devis"],
];

const images = [
  {
    id: 1,
    src: getVehiculeImage("porsche_986/boxster.jpg"),
    avif: getVehiculeImageAvif("porsche_986/boxster.avif"),
    webp: getVehiculeImageWebp("porsche_986/boxster.webp"),
  },
  {
    id: 2,
    src: getVehiculeImage("porsche_986/boxster-2.jpg"),
    avif: getVehiculeImageAvif("porsche_986/boxster-2.avif"),
    webp: getVehiculeImageWebp("porsche_986/boxster-2.webp"),
  },
  {
    id: 3,
    src: getVehiculeImage("porsche_986/boxster-3.jpg"),
    avif: getVehiculeImageAvif("porsche_986/boxster-3.avif"),
    webp: getVehiculeImageWebp("porsche_986/boxster-3.webp"),
  },
  {
    id: 4,
    src: getVehiculeImage("porsche_986/boxster-4.jpg"),
    avif: getVehiculeImageAvif("porsche_986/boxster-4.avif"),
    webp: getVehiculeImageWebp("porsche_986/boxster-4.webp"),
  },
  {
    id: 5,
    src: getVehiculeImage("porsche_986/boxster-5.jpg"),
    avif: getVehiculeImageAvif("porsche_986/boxster-5.avif"),
    webp: getVehiculeImageWebp("porsche_986/boxster-5.webp"),
  },
  {
    id: 6,
    src: getVehiculeImage("porsche_986/boxster-6.jpg"),
    avif: getVehiculeImageAvif("porsche_986/boxster-6.avif"),
    webp: getVehiculeImageWebp("porsche_986/boxster-6.webp"),
  },
  {
    id: 7,
    src: getVehiculeImage("porsche_986/boxster-7.jpg"),
    avif: getVehiculeImageAvif("porsche_986/boxster-7.avif"),
    webp: getVehiculeImageWebp("porsche_986/boxster-7.webp"),
  },
  {
    id: 8,
    src: getVehiculeImage("porsche_986/boxster-8.jpg"),
    avif: getVehiculeImageAvif("porsche_986/boxster-8.avif"),
    webp: getVehiculeImageWebp("porsche_986/boxster-8.webp"),
  },
  {
    id: 9,
    src: getVehiculeImage("porsche_986/boxster-9.jpg"),
    avif: getVehiculeImageAvif("porsche_986/boxster-9.avif"),
    webp: getVehiculeImageWebp("porsche_986/boxster-9.webp"),
  },
  {
    id: 10,
    src: getVehiculeImage("porsche_986/boxster-10.jpg"),
    avif: getVehiculeImageAvif("porsche_986/boxster-10.avif"),
    webp: getVehiculeImageWebp("porsche_986/boxster-10.webp"),
  },
  {
    id: 11,
    src: getVehiculeImage("porsche_986/boxster-11.jpg"),
    avif: getVehiculeImageAvif("porsche_986/boxster-11.avif"),
    webp: getVehiculeImageWebp("porsche_986/boxster-11.webp"),
  },
  {
    id: 12,
    src: getVehiculeImage("porsche_986/boxster-12.jpg"),
    avif: getVehiculeImageAvif("porsche_986/boxster-12.avif"),
    webp: getVehiculeImageWebp("porsche_986/boxster-12.webp"),
  },
  {
    id: 13,
    src: getVehiculeImage("porsche_986/boxster-13.jpg"),
    avif: getVehiculeImageAvif("porsche_986/boxster-13.avif"),
    webp: getVehiculeImageWebp("porsche_986/boxster-13.webp"),
  },
  {
    id: 14,
    src: getVehiculeImage("porsche_986/boxster-14.jpg"),
    avif: getVehiculeImageAvif("porsche_986/boxster-14.avif"),
    webp: getVehiculeImageWebp("porsche_986/boxster-14.webp"),
  },
  {
    id: 15,
    src: getVehiculeImage("porsche_986/boxster-15.jpg"),
    avif: getVehiculeImageAvif("porsche_986/boxster-15.avif"),
    webp: getVehiculeImageWebp("porsche_986/boxster-15.webp"),
  },
  {
    id: 16,
    src: getVehiculeImage("porsche_986/boxster-16.jpg"),
    avif: getVehiculeImageAvif("porsche_986/boxster-16.avif"),
    webp: getVehiculeImageWebp("porsche_986/boxster-16.webp"),
  },
];

onMounted(() => {
  window.scrollTo(0, el.value!.offsetTop - 20);
});
</script>
