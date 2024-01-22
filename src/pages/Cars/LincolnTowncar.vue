<template>
  <div ref="el" class="my-20">
    <div class="my-10 mx-10 sm:my-20 md:mx-40">
      <p class="text-base md:text-lg lg:text-xl">
        Cette incroyable <span class="font-bold">limousine Lincoln</span> de
        plus de 8 mètres vous accompagnera pour vos événements. 8 places
        passagers confortables, un intérieur cuir et un minibar luxueux sont
        présents dans le véhicule. Son moteur V8 saura vous transporter
        n'importe où.

        <br />
        <br />
        Capacité: 8 passagers.
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

onMounted(() => {
  window.scrollTo(0, el.value!.offsetTop - 20);
});

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
  ["Striptiseur/seuse", "Sur devis"],
  ["Magicien", "Sur devis"],
  ["Bouteille de champagne", "30€"],
  ["Gâteau", "Sur devis"],
  ["Photographe", "Sur devis"],
  ["Fleurs", "Sur devis"],
];

const images = [
  {
    id: 1,
    src: getVehiculeImage("lincoln_towncar/limo-5.jpg"),
    avif: getVehiculeImageAvif("lincoln_towncar/limo-5.avif"),
    webp: getVehiculeImageWebp("lincoln_towncar/limo.webp"),
  },
  {
    id: 2,
    src: getVehiculeImage("lincoln_towncar/limo-7.jpg"),
    avif: getVehiculeImageAvif("lincoln_towncar/limo-6.avif"),
    webp: getVehiculeImageWebp("lincoln_towncar/limo-6.webp"),
  },
  {
    id: 3,
    src: getVehiculeImage("lincoln_towncar/limo-8.jpg"),
    avif: getVehiculeImageAvif("lincoln_towncar/limo-9.avif"),
    webp: getVehiculeImageWebp("lincoln_towncar/limo-9.webp"),
  },
  {
    id: 4,
    src: getVehiculeImage("lincoln_towncar/limo-2.jpg"),
    avif: getVehiculeImageAvif("lincoln_towncar/limo-1.avif"),
    webp: getVehiculeImageWebp("lincoln_towncar/limo-1.webp"),
  },
  {
    id: 5,
    src: getVehiculeImage("lincoln_towncar/limo-11.jpg"),
    avif: getVehiculeImageAvif("lincoln_towncar/limo-10.avif"),
    webp: getVehiculeImageWebp("lincoln_towncar/limo-10.webp"),
  },
];
</script>
