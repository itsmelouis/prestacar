<template>
  <div ref="el" class="my-20">
    <div class="my-10 mx-10 sm:my-20 md:mx-40">
      <p class="text-base md:text-lg lg:text-xl">
        La <span class="font-bold">Rolls Royce Phantom</span>
        est le modèle emblématique de la marque anglaise mais aussi le summum du
        luxe, parfait pour les mariages elle vous garantira une entrée
        inoubliable.
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
    src: getVehiculeImage("rolls_royce_phantom/rolls.jpg"),
    avif: getVehiculeImageAvif("rolls_royce_phantom/rolls.avif"),
    webp: getVehiculeImageWebp("rolls_royce_phantom/rolls.webp"),
  },
  {
    id: 2,
    src: getVehiculeImage("rolls_royce_phantom/rolls-1.jpg"),
    avif: getVehiculeImageAvif("rolls_royce_phantom/rolls-1.avif"),
    webp: getVehiculeImageWebp("rolls_royce_phantom/rolls-1.webp"),
  },
  {
    id: 3,
    src: getVehiculeImage("rolls_royce_phantom/rolls-2.jpg"),
    avif: getVehiculeImageAvif("rolls_royce_phantom/rolls-2.avif"),
    webp: getVehiculeImageWebp("rolls_royce_phantom/rolls-2.webp"),
  },
  {
    id: 4,
    src: getVehiculeImage("rolls_royce_phantom/rolls-3.jpg"),
    avif: getVehiculeImageAvif("rolls_royce_phantom/rolls-3.avif"),
    webp: getVehiculeImageWebp("rolls_royce_phantom/rolls-3.webp"),
  },
  {
    id: 5,
    src: getVehiculeImage("rolls_royce_phantom/rolls-4.jpg"),
    avif: getVehiculeImageAvif("rolls_royce_phantom/rolls-4.avif"),
    webp: getVehiculeImageWebp("rolls_royce_phantom/rolls-4.webp"),
  },
  {
    id: 6,
    src: getVehiculeImage("rolls_royce_phantom/rolls-5.jpg"),
    avif: getVehiculeImageAvif("rolls_royce_phantom/rolls-5.avif"),
    webp: getVehiculeImageWebp("rolls_royce_phantom/rolls-5.webp"),
  },
  {
    id: 7,
    src: getVehiculeImage("rolls_royce_phantom/rolls-6.jpg"),
    avif: getVehiculeImageAvif("rolls_royce_phantom/rolls-6.avif"),
    webp: getVehiculeImageWebp("rolls_royce_phantom/rolls-6.webp"),
  },
  {
    id: 8,
    src: getVehiculeImage("rolls_royce_phantom/rolls-7.jpg"),
    avif: getVehiculeImageAvif("rolls_royce_phantom/rolls-7.avif"),
    webp: getVehiculeImageWebp("rolls_royce_phantom/rolls-7.webp"),
  },
  {
    id: 9,
    src: getVehiculeImage("rolls_royce_phantom/rolls-8.jpg"),
    avif: getVehiculeImageAvif("rolls_royce_phantom/rolls-8.avif"),
    webp: getVehiculeImageWebp("rolls_royce_phantom/rolls-8.webp"),
  },
  {
    id: 10,
    src: getVehiculeImage("rolls_royce_phantom/rolls-9.jpg"),
    avif: getVehiculeImageAvif("rolls_royce_phantom/rolls-9.avif"),
    webp: getVehiculeImageWebp("rolls_royce_phantom/rolls-9.webp"),
  },
  {
    id: 11,
    src: getVehiculeImage("rolls_royce_phantom/rolls-10.jpg"),
    avif: getVehiculeImageAvif("rolls_royce_phantom/rolls-10.avif"),
    webp: getVehiculeImageWebp("rolls_royce_phantom/rolls-10.webp"),
  },
  {
    id: 12,
    src: getVehiculeImage("rolls_royce_phantom/rolls-11.jpg"),
    avif: getVehiculeImageAvif("rolls_royce_phantom/rolls-11.avif"),
    webp: getVehiculeImageWebp("rolls_royce_phantom/rolls-11.webp"),
  },
  {
    id: 13,
    src: getVehiculeImage("rolls_royce_phantom/rolls-12.jpg"),
    avif: getVehiculeImageAvif("rolls_royce_phantom/rolls-12.avif"),
    webp: getVehiculeImageWebp("rolls_royce_phantom/rolls-12.webp"),
  },
  {
    id: 14,
    src: getVehiculeImage("rolls_royce_phantom/rolls-13.jpg"),
    avif: getVehiculeImageAvif("rolls_royce_phantom/rolls-13.avif"),
    webp: getVehiculeImageWebp("rolls_royce_phantom/rolls-13.webp"),
  },
];

onMounted(() => {
  window.scrollTo(0, el.value!.offsetTop - 20);
});
</script>
