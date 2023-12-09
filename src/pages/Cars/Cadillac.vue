<template>
  <div ref="el" class="my-20">
    <div class="my-10 mx-10 sm:my-20 md:mx-40">
      <p class="text-base md:text-lg lg:text-xl">
        Le <span class="font-bold">Cadillac Escalade</span> est un des véhicules
        les plus célèbres de la marque américaine. Esthétique et confortable, ce
        4x4 de plus de 400 chevaux vous dévoilera sa vitesse combinée au luxe
        pour une expérience unique. Son V8 ne vous laissera pas indifférent et
        son confort vous permettra de passer un agréable moment.
        <br />
        <br />
        Capacité: 6 passagers. (4 recommandés)
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
  ["Diffusion musique ou vidéo", "Inclus"],
  ["Photographe", "Sur devis"],
  ["Fleurs", "Sur devis"],
];

const images = [
  {
    id: 1,
    src: getVehiculeImage("cadillac_escalade/cadillac1.jpg"),
    avif: getVehiculeImageAvif("cadillac_escalade/cadillac1.avif"),
    webp: getVehiculeImageWebp("cadillac_escalade/cadillac1.webp"),
  },
  {
    id: 2,
    src: getVehiculeImage("cadillac_escalade/cadillac2.jpg"),
    avif: getVehiculeImageAvif("cadillac_escalade/cadillac2.avif"),
    webp: getVehiculeImageWebp("cadillac_escalade/cadillac2.webp"),
  },
  {
    id: 3,
    src: getVehiculeImage("cadillac_escalade/cadillac3.jpg"),
    avif: getVehiculeImageAvif("cadillac_escalade/cadillac3.avif"),
    webp: getVehiculeImageWebp("cadillac_escalade/cadillac3.webp"),
  },
  {
    id: 4,
    src: getVehiculeImage("cadillac_escalade/cadillac4.jpg"),
    avif: getVehiculeImageAvif("cadillac_escalade/cadillac4.avif"),
    webp: getVehiculeImageWebp("cadillac_escalade/cadillac4.webp"),
  },
  {
    id: 5,
    src: getVehiculeImage("cadillac_escalade/cadillac5.jpg"),
    avif: getVehiculeImageAvif("cadillac_escalade/cadillac5.avif"),
    webp: getVehiculeImageWebp("cadillac_escalade/cadillac5.webp"),
  },
  {
    id: 6,
    src: getVehiculeImage("cadillac_escalade/cadillac6.jpg"),
    avif: getVehiculeImageAvif("cadillac_escalade/cadillac6.avif"),
    webp: getVehiculeImageWebp("cadillac_escalade/cadillac6.webp"),
  },
  {
    id: 7,
    src: getVehiculeImage("cadillac_escalade/cadillac7.jpg"),
    avif: getVehiculeImageAvif("cadillac_escalade/cadillac7.avif"),
    webp: getVehiculeImageWebp("cadillac_escalade/cadillac7.webp"),
  },
  {
    id: 8,
    src: getVehiculeImage("cadillac_escalade/cadillac8.jpg"),
    avif: getVehiculeImageAvif("cadillac_escalade/cadillac8.avif"),
    webp: getVehiculeImageWebp("cadillac_escalade/cadillac8.webp"),
  },
  {
    id: 9,
    src: getVehiculeImage("cadillac_escalade/cadillac9.jpg"),
    avif: getVehiculeImageAvif("cadillac_escalade/cadillac9.avif"),
    webp: getVehiculeImageWebp("cadillac_escalade/cadillac9.webp"),
  },
  {
    id: 10,
    src: getVehiculeImage("cadillac_escalade/cadillac10.jpg"),
    avif: getVehiculeImageAvif("cadillac_escalade/cadillac10.avif"),
    webp: getVehiculeImageWebp("cadillac_escalade/cadillac10.webp"),
  },
  {
    id: 11,
    src: getVehiculeImage("cadillac_escalade/cadillac11.jpg"),
    avif: getVehiculeImageAvif("cadillac_escalade/cadillac11.avif"),
    webp: getVehiculeImageWebp("cadillac_escalade/cadillac11.webp"),
  },
  {
    id: 12,
    src: getVehiculeImage("cadillac_escalade/cadillac12.jpg"),
    avif: getVehiculeImageAvif("cadillac_escalade/cadillac12.avif"),
    webp: getVehiculeImageWebp("cadillac_escalade/cadillac12.webp"),
  },
  {
    id: 13,
    src: getVehiculeImage("cadillac_escalade/cadillac13.jpg"),
    avif: getVehiculeImageAvif("cadillac_escalade/cadillac13.avif"),
    webp: getVehiculeImageWebp("cadillac_escalade/cadillac13.webp"),
  },
];

onMounted(() => {
  window.scrollTo(0, el.value!.offsetTop - 20);
});
</script>
