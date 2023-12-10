<template>
  <div ref="el" class="my-20">
    <div class="my-10 mx-10 sm:my-20 md:mx-40">
      <p class="text-base md:text-lg lg:text-xl">
        La <span class="font-bold">Ford Capri Crayford Cabriolet</span>,
        découvrez ce modèle unique de seulement 7 exemplaires en France ! Un
        moteur V6 et des belles courbes épurées c’est le véhicule rétro idéals
        pour vos événements en tout genre. N’attendez plus et laissez vous
        conduire dans cette sublime décapotable.
        <br />
        <br />
        Capacité: 4 passagers (2 recommandés).
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
  ["3h", "350€"],
  ["4h", "450€"],
  ["Forfait Mariage", "500€"],
];

const options = [
  ["Intitulé", "Prix"],
  ["Photographe", "Sur devis"],
  ["Fleurs", "Sur devis"],
];

const images = [
  {
    id: 1,
    src: getVehiculeImage("ford_capri/capri-1.jpg"),
    avif: getVehiculeImageAvif("ford_capri/capri-1.avif"),
    webp: getVehiculeImageWebp("ford_capri/capri-1.webp"),
  },
  {
    id: 2,
    src: getVehiculeImage("ford_capri/capri-2.jpg"),
    avif: getVehiculeImageAvif("ford_capri/capri-2.avif"),
    webp: getVehiculeImageWebp("ford_capri/capri-2.webp"),
  },
  {
    id: 24,
    src: getVehiculeImage("ford_capri/capri-2-2.jpg"),
    avif: getVehiculeImageAvif("ford_capri/capri-2-2.avif"),
    webp: getVehiculeImageWebp("ford_capri/capri-2-2.webp"),
  },

  {
    id: 3,
    src: getVehiculeImage("ford_capri/capri-3.jpg"),
    avif: getVehiculeImageAvif("ford_capri/capri-3.avif"),
    webp: getVehiculeImageWebp("ford_capri/capri-3.webp"),
  },
  {
    id: 4,
    src: getVehiculeImage("ford_capri/capri-4.jpg"),
    avif: getVehiculeImageAvif("ford_capri/capri-4.avif"),
    webp: getVehiculeImageWebp("ford_capri/capri-4.webp"),
  },
  {
    id: 5,
    src: getVehiculeImage("ford_capri/capri-5.jpg"),
    avif: getVehiculeImageAvif("ford_capri/capri-5.avif"),
    webp: getVehiculeImageWebp("ford_capri/capri-5.webp"),
  },
  {
    id: 6,
    src: getVehiculeImage("ford_capri/capri-6.jpg"),
    avif: getVehiculeImageAvif("ford_capri/capri-6.avif"),
    webp: getVehiculeImageWebp("ford_capri/capri-6.webp"),
  },
  {
    id: 7,
    src: getVehiculeImage("ford_capri/capri-7.jpg"),
    avif: getVehiculeImageAvif("ford_capri/capri-7.avif"),
    webp: getVehiculeImageWebp("ford_capri/capri-7.webp"),
  },
  {
    id: 8,
    src: getVehiculeImage("ford_capri/capri-8.jpg"),
    avif: getVehiculeImageAvif("ford_capri/capri-8.avif"),
    webp: getVehiculeImageWebp("ford_capri/capri-8.webp"),
  },
  {
    id: 9,
    src: getVehiculeImage("ford_capri/capri-9.jpg"),
    avif: getVehiculeImageAvif("ford_capri/capri-9.avif"),
    webp: getVehiculeImageWebp("ford_capri/capri-9.webp"),
  },
  {
    id: 10,
    src: getVehiculeImage("ford_capri/capri-10.jpg"),
    avif: getVehiculeImageAvif("ford_capri/capri-10.avif"),
    webp: getVehiculeImageWebp("ford_capri/capri-10.webp"),
  },
  {
    id: 11,
    src: getVehiculeImage("ford_capri/capri-11.jpg"),
    avif: getVehiculeImageAvif("ford_capri/capri-11.avif"),
    webp: getVehiculeImageWebp("ford_capri/capri-11.webp"),
  },
  {
    id: 12,
    src: getVehiculeImage("ford_capri/capri-12.jpg"),
    avif: getVehiculeImageAvif("ford_capri/capri-12.avif"),
    webp: getVehiculeImageWebp("ford_capri/capri-12.webp"),
  },
  {
    id: 13,
    src: getVehiculeImage("ford_capri/capri-13.jpg"),
    avif: getVehiculeImageAvif("ford_capri/capri-13.avif"),
    webp: getVehiculeImageWebp("ford_capri/capri-13.webp"),
  },
  {
    id: 14,
    src: getVehiculeImage("ford_capri/capri-14.jpg"),
    avif: getVehiculeImageAvif("ford_capri/capri-14.avif"),
    webp: getVehiculeImageWebp("ford_capri/capri-14.webp"),
  },
  {
    id: 15,
    src: getVehiculeImage("ford_capri/capri-15.jpg"),
    avif: getVehiculeImageAvif("ford_capri/capri-15.avif"),
    webp: getVehiculeImageWebp("ford_capri/capri-15.webp"),
  },
  {
    id: 16,
    src: getVehiculeImage("ford_capri/capri-16.jpg"),
    avif: getVehiculeImageAvif("ford_capri/capri-16.avif"),
    webp: getVehiculeImageWebp("ford_capri/capri-16.webp"),
  },
  {
    id: 17,
    src: getVehiculeImage("ford_capri/capri-17.jpg"),
    avif: getVehiculeImageAvif("ford_capri/capri-17.avif"),
    webp: getVehiculeImageWebp("ford_capri/capri-17.webp"),
  },
  {
    id: 18,
    src: getVehiculeImage("ford_capri/capri-18.jpg"),
    avif: getVehiculeImageAvif("ford_capri/capri-18.avif"),
    webp: getVehiculeImageWebp("ford_capri/capri-18.webp"),
  },
  {
    id: 19,
    src: getVehiculeImage("ford_capri/capri-19.jpg"),
    avif: getVehiculeImageAvif("ford_capri/capri-19.avif"),
    webp: getVehiculeImageWebp("ford_capri/capri-19.webp"),
  },
  {
    id: 20,
    src: getVehiculeImage("ford_capri/capri-20.jpg"),
    avif: getVehiculeImageAvif("ford_capri/capri-20.avif"),
    webp: getVehiculeImageWebp("ford_capri/capri-20.webp"),
  },
  {
    id: 21,
    src: getVehiculeImage("ford_capri/capri-21.jpg"),
    avif: getVehiculeImageAvif("ford_capri/capri-21.avif"),
    webp: getVehiculeImageWebp("ford_capri/capri-21.webp"),
  },
  {
    id: 22,
    src: getVehiculeImage("ford_capri/capri-22.jpg"),
    avif: getVehiculeImageAvif("ford_capri/capri-22.avif"),
    webp: getVehiculeImageWebp("ford_capri/capri-22.webp"),
  },
  {
    id: 23,
    src: getVehiculeImage("ford_capri/capri-23.jpg"),
    avif: getVehiculeImageAvif("ford_capri/capri-23.avif"),
    webp: getVehiculeImageWebp("ford_capri/capri-23.webp"),
  },
];

onMounted(() => {
  window.scrollTo(0, el.value!.offsetTop - 20);
});
</script>
