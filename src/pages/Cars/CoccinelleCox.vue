<template>
  <div ref="el" class="my-20">
    <div class="my-10 mx-10 sm:my-20 md:mx-40">
      <p class="text-base md:text-lg lg:text-xl">
        La célèbre <span class="font-bold">coccinelle</span> de chez Volkswagen
        imaginée par Ferdinand Porsche est à votre portée. Ce magnifique
        véhicule de 1973 s'offre à vous pour tous types d'événements. Souvent
        associée au Combi, les deux véhicules sont disponibles simultanément à
        la location.
        <br />
        <br />
        Capacité: 3 passagers. (2 recommandés)
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
  ["1h", "150€"],
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
    src: getVehiculeImage("coccinel_cox/cox1.jpg"),
    avif: getVehiculeImageAvif("coccinel_cox/cox1.avif"),
    webp: getVehiculeImageWebp("coccinel_cox/cox1.webp"),
  },
  {
    id: 2,
    src: getVehiculeImage("coccinel_cox/cox2.jpg"),
    avif: getVehiculeImageAvif("coccinel_cox/cox2.avif"),
    webp: getVehiculeImageWebp("coccinel_cox/cox2.webp"),
  },
  {
    id: 3,
    src: getVehiculeImage("coccinel_cox/cox3.jpg"),
    avif: getVehiculeImageAvif("coccinel_cox/cox3.avif"),
    webp: getVehiculeImageWebp("coccinel_cox/cox3.webp"),
  },
  {
    id: 4,
    src: getVehiculeImage("coccinel_cox/cox4.jpg"),
    avif: getVehiculeImageAvif("coccinel_cox/cox4.avif"),
    webp: getVehiculeImageWebp("coccinel_cox/cox4.webp"),
  },
  {
    id: 5,
    src: getVehiculeImage("coccinel_cox/cox5.jpg"),
    avif: getVehiculeImageAvif("coccinel_cox/cox5.avif"),
    webp: getVehiculeImageWebp("coccinel_cox/cox5.webp"),
  },
  {
    id: 6,
    src: getVehiculeImage("coccinel_cox/cox6.jpg"),
    avif: getVehiculeImageAvif("coccinel_cox/cox6.avif"),
    webp: getVehiculeImageWebp("coccinel_cox/cox6.webp"),
  },
  {
    id: 7,
    src: getVehiculeImage("coccinel_cox/cox7.jpg"),
    avif: getVehiculeImageAvif("coccinel_cox/cox7.avif"),
    webp: getVehiculeImageWebp("coccinel_cox/cox7.webp"),
  },
  {
    id: 8,
    src: getVehiculeImage("coccinel_cox/cox8.jpg"),
    avif: getVehiculeImageAvif("coccinel_cox/cox8.avif"),
    webp: getVehiculeImageWebp("coccinel_cox/cox8.webp"),
  },
  {
    id: 9,
    src: getVehiculeImage("coccinel_cox/cox9.jpg"),
    avif: getVehiculeImageAvif("coccinel_cox/cox9.avif"),
    webp: getVehiculeImageWebp("coccinel_cox/cox9.webp"),
  },
  {
    id: 10,
    src: getVehiculeImage("coccinel_cox/cox10.jpg"),
    avif: getVehiculeImageAvif("coccinel_cox/cox10.avif"),
    webp: getVehiculeImageWebp("coccinel_cox/cox10.webp"),
  },
  {
    id: 11,
    src: getVehiculeImage("coccinel_cox/cox11.jpg"),
    avif: getVehiculeImageAvif("coccinel_cox/cox11.avif"),
    webp: getVehiculeImageWebp("coccinel_cox/cox11.webp"),
  },
  {
    id: 12,
    src: getVehiculeImage("coccinel_cox/cox12.jpg"),
    avif: getVehiculeImageAvif("coccinel_cox/cox12.avif"),
    webp: getVehiculeImageWebp("coccinel_cox/cox12.webp"),
  },
  {
    id: 13,
    src: getVehiculeImage("coccinel_cox/cox13.jpg"),
    avif: getVehiculeImageAvif("coccinel_cox/cox13.avif"),
    webp: getVehiculeImageWebp("coccinel_cox/cox13.webp"),
  },
  {
    id: 14,
    src: getVehiculeImage("coccinel_cox/cox14.jpg"),
    avif: getVehiculeImageAvif("coccinel_cox/cox14.avif"),
    webp: getVehiculeImageWebp("coccinel_cox/cox14.webp"),
  },
  {
    id: 15,
    src: getVehiculeImage("coccinel_cox/cox15.jpg"),
    avif: getVehiculeImageAvif("coccinel_cox/cox15.avif"),
    webp: getVehiculeImageWebp("coccinel_cox/cox15.webp"),
  },
  {
    id: 16,
    src: getVehiculeImage("coccinel_cox/cox16.jpg"),
    avif: getVehiculeImageAvif("coccinel_cox/cox16.avif"),
    webp: getVehiculeImageWebp("coccinel_cox/cox16.webp"),
  },
  {
    id: 17,
    src: getVehiculeImage("coccinel_cox/cox17.jpg"),
    avif: getVehiculeImageAvif("coccinel_cox/cox17.avif"),
    webp: getVehiculeImageWebp("coccinel_cox/cox17.webp"),
  },
];

onMounted(() => {
  window.scrollTo(0, el.value!.offsetTop - 20);
});
</script>
