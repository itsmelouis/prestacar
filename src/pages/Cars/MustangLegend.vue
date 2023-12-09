<template>
  <div ref="el" class="my-20">
    <div class="my-10 mx-10 sm:my-20 md:mx-40">
      <p class="text-base md:text-lg lg:text-xl">
        La <span class="font-bold">Mustang Legend Lime</span> en millésime 2006
        est rare, lumineuse grâce à sa teinte brillante et changeante au fil de
        la lumière naturelle. Strictement d'origine, intérieur sport avec volant
        cuir, novatrice et motorisée par un V6 mais au son légendaire de Ford
        Mustang, on croirait entendre un V8 ! Préservée dans sa condition
        originale de sortie d'usine de Flat Rock dans le Michigan (USA), c'est
        un véritable plaisir pour les yeux et les sens !
        <br />
        <br />
        Capacité: 3 passagers.
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
    src: getVehiculeImage("mustang_legend/mustang1.jpg"),
    avif: getVehiculeImageAvif("mustang_legend/mustang1.avif"),
    webp: getVehiculeImageWebp("mustang_legend/mustang1.webp"),
  },
  {
    id: 2,
    src: getVehiculeImage("mustang_legend/mustang2.jpg"),
    avif: getVehiculeImageAvif("mustang_legend/mustang2.avif"),
    webp: getVehiculeImageWebp("mustang_legend/mustang2.webp"),
  },
  {
    id: 3,
    src: getVehiculeImage("mustang_legend/mustang3.jpg"),
    avif: getVehiculeImageAvif("mustang_legend/mustang3.avif"),
    webp: getVehiculeImageWebp("mustang_legend/mustang3.webp"),
  },
  {
    id: 4,
    src: getVehiculeImage("mustang_legend/mustang4.jpg"),
    avif: getVehiculeImageAvif("mustang_legend/mustang4.avif"),
    webp: getVehiculeImageWebp("mustang_legend/mustang4.webp"),
  },
];

onMounted(() => {
  window.scrollTo(0, el.value!.offsetTop - 20);
});
</script>
