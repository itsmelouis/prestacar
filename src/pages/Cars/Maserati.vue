<template>
  <div ref="el" class="my-20">
    <div class="my-10 mx-10 sm:my-20 md:mx-40">
      <p class="text-base md:text-lg lg:text-xl">
        Découvrez cette sublime <span class="font-bold">Maserati Ghibli</span>.
        Ce véhicule de 2017 est la représentation de l’élégance du luxe et de la sportivité Italienne.
        <br />
        <br />
        Très confortable et dotée d’une sonorité très particulière, son intérieur cuir rouge vous
        séduira à coup sûr.
        <br />
        <br />
        Le mariage se rapproche tout est presque prêt, la location d’une maserati à Valenciennes et
        ses alentours est sûrement la touche finale qu’il manquait afin de rendre cette journée
        vraiment parfaite !
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

onMounted(() => {
  window.scrollTo(0, el.value!.offsetTop - 20);
});

const grille_tarifiaire = [
  ["Temps", "Prix"],
  ["Forfait Mariage", "700€"],
];

const options = [
  ["Intitulé", "Prix"],
  ["Photographe", "Sur devis"],
  ["Fleurs", "Sur devis"],
];

const images = [
  {
    id: 1,
    src: getVehiculeImage("maserati/maserati.jpg"),
    avif: getVehiculeImageAvif("maserati/maserati.avif"),
    webp: getVehiculeImageWebp("maserati/maserati.jpg"),
  },
  {
    id: 2,
    src: getVehiculeImage("maserati/maserati-2.jpg"),
    avif: getVehiculeImageAvif("maserati/maserati-2.avif"),
    webp: getVehiculeImageWebp("maserati/maserati-2.jpg"),
  },
  {
    id: 3,
    src: getVehiculeImage("maserati/maserati-1.jpg"),
    avif: getVehiculeImageAvif("maserati/maserati-1.avif"),
    webp: getVehiculeImageWebp("maserati/maserati-1.jpg"),
  },
  {
    id: 4,
    src: getVehiculeImage("maserati/maserati-10.jpg"),
    avif: getVehiculeImageAvif("maserati/maserati-10.avif"),
    webp: getVehiculeImageWebp("maserati/maserati-10.jpg"),
  },
  {
    id: 5,
    src: getVehiculeImage("maserati/maserati-9.jpg"),
    avif: getVehiculeImageAvif("maserati/maserati-9.avif"),
    webp: getVehiculeImageWebp("maserati/maserati-9.jpg"),
  },
  {
    id: 6,
    src: getVehiculeImage("maserati/maserati-8.jpg"),
    avif: getVehiculeImageAvif("maserati/maserati-8.avif"),
    webp: getVehiculeImageWebp("maserati/maserati-8.jpg"),
  },
  {
    id: 7,
    src: getVehiculeImage("maserati/maserati-3.jpg"),
    avif: getVehiculeImageAvif("maserati/maserati-3.avif"),
    webp: getVehiculeImageWebp("maserati/maserati-3.jpg"),
  },
  {
    id: 8,
    src: getVehiculeImage("maserati/maserati-4.jpg"),
    avif: getVehiculeImageAvif("maserati/maserati-4.avif"),
    webp: getVehiculeImageWebp("maserati/maserati-4.jpg"),
  },
  {
    id: 9,
    src: getVehiculeImage("maserati/maserati-11.jpg"),
    avif: getVehiculeImageAvif("maserati/maserati-11.avif"),
    webp: getVehiculeImageWebp("maserati/maserati-11.jpg"),
  },
  {
    id: 10,
    src: getVehiculeImage("maserati/maserati-5.jpg"),
    avif: getVehiculeImageAvif("maserati/maserati-5.avif"),
    webp: getVehiculeImageWebp("maserati/maserati-5.jpg"),
  },
  {
    id: 11,
    src: getVehiculeImage("maserati/maserati-6.jpg"),
    avif: getVehiculeImageAvif("maserati/maserati-6.avif"),
    webp: getVehiculeImageWebp("maserati/maserati-6.jpg"),
  },
  {
    id: 12,
    src: getVehiculeImage("maserati/maserati-7.jpg"),
    avif: getVehiculeImageAvif("maserati/maserati-7.avif"),
    webp: getVehiculeImageWebp("maserati/maserati-7.jpg"),
  },
];
</script>
