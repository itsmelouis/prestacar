<template>
  <div ref="el" class="my-20">
    <div class="my-10 mx-10 sm:my-20 md:mx-40">
      <p class="text-base md:text-lg lg:text-xl">
        Si vous aimez les voitures américaines puissantes et qui ont de
        l’allure, alors la <span class="font-bold">Dodge Charger RT</span> est
        le véhicule que vous cherchez ! Ce modèle récent de 2016 à tout pour
        plaire, il est sportif mais reste spacieux et confortable avec son
        sublime intérieur cuir rouge. Un moteur V8 qui sait se faire entendre et
        une allure qui ne passe pas inaperçue, n’hésitez plus et laissez vous
        embarquer dans une course folle !
        <br />
        <br />
        Capacité: 3 passagers (2 recommandés).
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
    src: getVehiculeImage("dodge_charger/charger1.jpg"),
    avif: getVehiculeImageAvif("dodge_charger/charger1.avif"),
    webp: getVehiculeImageWebp("dodge_charger/charger1.webp"),
  },
  {
    id: 2,
    src: getVehiculeImage("dodge_charger/charger2.jpg"),
    avif: getVehiculeImageAvif("dodge_charger/charger2.avif"),
    webp: getVehiculeImageWebp("dodge_charger/charger2.webp"),
  },
  {
    id: 3,
    src: getVehiculeImage("dodge_charger/charger3.jpg"),
    avif: getVehiculeImageAvif("dodge_charger/charger3.avif"),
    webp: getVehiculeImageWebp("dodge_charger/charger3.webp"),
  },
  {
    id: 4,
    src: getVehiculeImage("dodge_charger/charger4.jpg"),
    avif: getVehiculeImageAvif("dodge_charger/charger4.avif"),
    webp: getVehiculeImageWebp("dodge_charger/charger4.webp"),
  },
  {
    id: 5,
    src: getVehiculeImage("dodge_charger/charger5.jpg"),
    avif: getVehiculeImageAvif("dodge_charger/charger5.avif"),
    webp: getVehiculeImageWebp("dodge_charger/charger5.webp"),
  },
  {
    id: 6,
    src: getVehiculeImage("dodge_charger/charger6.jpg"),
    avif: getVehiculeImageAvif("dodge_charger/charger6.avif"),
    webp: getVehiculeImageWebp("dodge_charger/charger6.webp"),
  },
  {
    id: 7,
    src: getVehiculeImage("dodge_charger/charger7.jpg"),
    avif: getVehiculeImageAvif("dodge_charger/charger7.avif"),
    webp: getVehiculeImageWebp("dodge_charger/charger7.webp"),
  },
  {
    id: 8,
    src: getVehiculeImage("dodge_charger/charger8.jpg"),
    avif: getVehiculeImageAvif("dodge_charger/charger8.avif"),
    webp: getVehiculeImageWebp("dodge_charger/charger8.webp"),
  },
];

onMounted(() => {
  window.scrollTo(0, el.value!.offsetTop - 20);
});
</script>
