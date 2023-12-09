<template>
  <div ref="el" class="my-20">
    <div class="my-10 mx-10 sm:my-20 md:mx-40">
      <p class="text-base md:text-lg lg:text-xl">
        La sublime <span class="font-bold">New Beetle</span> cabriolet de chez
        Volkswagen vous permettra de sillonner les routes de la région. Ce
        véhicule vous offrira le plaisir du cabriolet lors des journées les plus
        ensoleillées. Son moteur diesel de 105 chevaux vous permettra de faire
        des trajets économiques et dynamiques.
        <br />
        <br />
        Capacité: 3 passagers. (2 recommandés) Avec chauffeur 4 personnes sans
        chauffeur.
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
        Louez cette voiture sans chauffeur pour 60€ / jour avec 250km inclus
        (0,50 centimes facturés par km supplémentaire). L'âge de 23 ans minimum
        et 5 ans de permis sont requis. (caution de 3000€)
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
  ["Temps", "Prix avec chauffeur"],
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
    src: getVehiculeImage("new_beetle/new-beetle10.jpg"),
    avif: getVehiculeImageAvif("new_beetle/new-beetle10.avif"),
    webp: getVehiculeImageWebp("new_beetle/new-beetle10.webp"),
  },
  {
    id: 2,
    src: getVehiculeImage("new_beetle/new-beetle11.jpg"),
    avif: getVehiculeImageAvif("new_beetle/new-beetle11.avif"),
    webp: getVehiculeImageWebp("new_beetle/new-beetle11.webp"),
  },
  {
    id: 3,
    src: getVehiculeImage("new_beetle/new-beetle12.jpg"),
    avif: getVehiculeImageAvif("new_beetle/new-beetle12.avif"),
    webp: getVehiculeImageWebp("new_beetle/new-beetle12.webp"),
  },
  {
    id: 4,
    src: getVehiculeImage("new_beetle/new-beetle13.jpg"),
    avif: getVehiculeImageAvif("new_beetle/new-beetle13.avif"),
    webp: getVehiculeImageWebp("new_beetle/new-beetle13.webp"),
  },
  {
    id: 5,
    src: getVehiculeImage("new_beetle/new-beetle14.jpg"),
    avif: getVehiculeImageAvif("new_beetle/new-beetle14.avif"),
    webp: getVehiculeImageWebp("new_beetle/new-beetle14.webp"),
  },
  {
    id: 6,
    src: getVehiculeImage("new_beetle/new-beetle15.jpg"),
    avif: getVehiculeImageAvif("new_beetle/new-beetle15.avif"),
    webp: getVehiculeImageWebp("new_beetle/new-beetle15.webp"),
  },
  {
    id: 7,
    src: getVehiculeImage("new_beetle/new-beetle16.jpg"),
    avif: getVehiculeImageAvif("new_beetle/new-beetle16.avif"),
    webp: getVehiculeImageWebp("new_beetle/new-beetle16.webp"),
  },
  {
    id: 8,
    src: getVehiculeImage("new_beetle/new-beetle17.jpg"),
    avif: getVehiculeImageAvif("new_beetle/new-beetle17.avif"),
    webp: getVehiculeImageWebp("new_beetle/new-beetle17.webp"),
  },
  {
    id: 9,
    src: getVehiculeImage("new_beetle/new-beetle18.jpg"),
    avif: getVehiculeImageAvif("new_beetle/new-beetle18.avif"),
    webp: getVehiculeImageWebp("new_beetle/new-beetle18.webp"),
  },
  {
    id: 10,
    src: getVehiculeImage("new_beetle/new-beetle19.jpg"),
    avif: getVehiculeImageAvif("new_beetle/new-beetle19.avif"),
    webp: getVehiculeImageWebp("new_beetle/new-beetle19.webp"),
  },
  {
    id: 11,
    src: getVehiculeImage("new_beetle/new-beetle20.jpg"),
    avif: getVehiculeImageAvif("new_beetle/new-beetle20.avif"),
    webp: getVehiculeImageWebp("new_beetle/new-beetle20.webp"),
  },
  {
    id: 12,
    src: getVehiculeImage("new_beetle/new-beetle21.jpg"),
    avif: getVehiculeImageAvif("new_beetle/new-beetle21.avif"),
    webp: getVehiculeImageWebp("new_beetle/new-beetle21.webp"),
  },
  {
    id: 13,
    src: getVehiculeImage("new_beetle/new-beetle22.jpg"),
    avif: getVehiculeImageAvif("new_beetle/new-beetle22.avif"),
    webp: getVehiculeImageWebp("new_beetle/new-beetle22.webp"),
  },
  {
    id: 14,
    src: getVehiculeImage("new_beetle/new-beetle23.jpg"),
    avif: getVehiculeImageAvif("new_beetle/new-beetle23.avif"),
    webp: getVehiculeImageWebp("new_beetle/new-beetle23.webp"),
  },
  {
    id: 15,
    src: getVehiculeImage("new_beetle/new-beetle8.jpg"),
    avif: getVehiculeImageAvif("new_beetle/new-beetle8.avif"),
    webp: getVehiculeImageWebp("new_beetle/new-beetle8.webp"),
  },
  {
    id: 16,
    src: getVehiculeImage("new_beetle/new-beetle9.jpg"),
    avif: getVehiculeImageAvif("new_beetle/new-beetle9.avif"),
    webp: getVehiculeImageWebp("new_beetle/new-beetle9.webp"),
  },
];

onMounted(() => {
  window.scrollTo(0, el.value!.offsetTop - 20);
});
</script>
