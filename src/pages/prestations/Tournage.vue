<template>
  <div ref="el" class="my-20">
    <div class="my-10 mx-10 sm:my-20 md:mx-40">
      <p class="text-base md:text-lg lg:text-xl">
        L'<span class="font-bold">tournage</span> est le véhicule
        parfait pour vous accompagner lors de vos événements, luxe et élégance
        sont les maîtres mots. Ce véhicule d'une grande rareté produit à
        uniquement 7 exemplaires vous assurera une arrivée inoubliable et
        remarquable.
        <br />
        <br />
        Capacité: 3 passagers (1 recommandé).
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
  ["Forfait Mariage", "1200€"],
];

const options = [
  ["Intitulé", "Prix"],
  ["Photographe", "Sur devis"],
  ["Fleurs", "Sur devis"],
];

const images = [
  {
    id: 1,
    src: getVehiculeImage("aston_martin_volante/aston-cab.jpg"),
    avif: getVehiculeImageAvif("aston_martin_volante/aston-cab.avif"),
    webp: getVehiculeImageWebp("aston_martin_volante/aston-cab.webp"),
  },
  {
    id: 2,
    src: getVehiculeImage("aston_martin_volante/aston-cab-1.jpg"),
    avif: getVehiculeImageAvif("aston_martin_volante/aston-cab-1.avif"),
    webp: getVehiculeImageWebp("aston_martin_volante/aston-cab-1.webp"),
  },
  {
    id: 3,
    src: getVehiculeImage("aston_martin_volante/aston-cab-2.jpg"),
    avif: getVehiculeImageAvif("aston_martin_volante/aston-cab-2.avif"),
    webp: getVehiculeImageWebp("aston_martin_volante/aston-cab-2.webp"),
  },
  {
    id: 4,
    src: getVehiculeImage("aston_martin_volante/aston-cab-3.jpg"),
    avif: getVehiculeImageAvif("aston_martin_volante/aston-cab-3.avif"),
    webp: getVehiculeImageWebp("aston_martin_volante/aston-cab-3.webp"),
  },
  {
    id: 5,
    src: getVehiculeImage("aston_martin_volante/aston-cab-4.jpg"),
    avif: getVehiculeImageAvif("aston_martin_volante/aston-cab-4.avif"),
    webp: getVehiculeImageWebp("aston_martin_volante/aston-cab-4.webp"),
  },
  {
    id: 6,
    src: getVehiculeImage("aston_martin_volante/aston-cab-5.jpg"),
    avif: getVehiculeImageAvif("aston_martin_volante/aston-cab-5.avif"),
    webp: getVehiculeImageWebp("aston_martin_volante/aston-cab-5.webp"),
  },
  {
    id: 7,
    src: getVehiculeImage("aston_martin_volante/aston-cab-6.jpg"),
    avif: getVehiculeImageAvif("aston_martin_volante/aston-cab-6.avif"),
    webp: getVehiculeImageWebp("aston_martin_volante/aston-cab-6.webp"),
  },
  {
    id: 8,
    src: getVehiculeImage("aston_martin_volante/aston-cab-7.jpg"),
    avif: getVehiculeImageAvif("aston_martin_volante/aston-cab-7.avif"),
    webp: getVehiculeImageWebp("aston_martin_volante/aston-cab-7.webp"),
  },
  {
    id: 9,
    src: getVehiculeImage("aston_martin_volante/aston-cab-8.jpg"),
    avif: getVehiculeImageAvif("aston_martin_volante/aston-cab-8.avif"),
    webp: getVehiculeImageWebp("aston_martin_volante/aston-cab-8.webp"),
  },
  {
    id: 10,
    src: getVehiculeImage("aston_martin_volante/aston-cab-9.jpg"),
    avif: getVehiculeImageAvif("aston_martin_volante/aston-cab-9.avif"),
    webp: getVehiculeImageWebp("aston_martin_volante/aston-cab-9.webp"),
  },
  {
    id: 11,
    src: getVehiculeImage("aston_martin_volante/aston-cab-10.jpg"),
    avif: getVehiculeImageAvif("aston_martin_volante/aston-cab-10.avif"),
    webp: getVehiculeImageWebp("aston_martin_volante/aston-cab-10.webp"),
  },
  {
    id: 12,
    src: getVehiculeImage("aston_martin_volante/aston-cab-11.jpg"),
    avif: getVehiculeImageAvif("aston_martin_volante/aston-cab-11.avif"),
    webp: getVehiculeImageWebp("aston_martin_volante/aston-cab-11.webp"),
  },
  {
    id: 13,
    src: getVehiculeImage("aston_martin_volante/aston-cab-12.jpg"),
    avif: getVehiculeImageAvif("aston_martin_volante/aston-cab-12.avif"),
    webp: getVehiculeImageWebp("aston_martin_volante/aston-cab-12.webp"),
  },
];

onMounted(() => {
  window.scrollTo(0, el.value!.offsetTop - 20);
});
</script>
