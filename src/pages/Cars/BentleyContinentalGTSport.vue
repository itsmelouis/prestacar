<template>
  <div ref="el" class="my-20">
    <div class="my-10 mx-10 sm:my-20 md:mx-40">
      <p class="text-base md:text-lg lg:text-xl">
        Offrez-vous l'élégance ultime avec notre
        <span class="font-bold">Bentley Continental GT Sport</span>, le choix
        parfait pour sublimer vos mariages. Louez ce symbole de luxe et de
        style, accompagné d'un chauffeur professionnel pour une expérience
        inoubliable.
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
  ["Forfait Mariage", "1000€"],
];

const options = [
  ["Intitulé", "Prix"],
  ["Photographe", "Sur devis"],
  ["Fleurs", "Sur devis"],
];

const images = [
  {
    id: 1,
    src: getVehiculeImage("bentley_continental_gt_sport/bentley.jpg"),
    avif: getVehiculeImageAvif("bentley_continental_gt_sport/bentley.avif"),
    webp: getVehiculeImageWebp("bentley_continental_gt_sport/bentley.webp"),
  },
  {
    id: 2,
    src: getVehiculeImage("bentley_continental_gt_sport/bentley-1.jpg"),
    avif: getVehiculeImageAvif("bentley_continental_gt_sport/bentley-1.avif"),
    webp: getVehiculeImageWebp("bentley_continental_gt_sport/bentley-1.webp"),
  },
  {
    id: 3,
    src: getVehiculeImage("bentley_continental_gt_sport/bentley-2.jpg"),
    avif: getVehiculeImageAvif("bentley_continental_gt_sport/bentley-2.avif"),
    webp: getVehiculeImageWebp("bentley_continental_gt_sport/bentley-2.webp"),
  },
  {
    id: 4,
    src: getVehiculeImage("bentley_continental_gt_sport/bentley-3.jpg"),
    avif: getVehiculeImageAvif("bentley_continental_gt_sport/bentley-3.avif"),
    webp: getVehiculeImageWebp("bentley_continental_gt_sport/bentley-3.webp"),
  },
  {
    id: 5,
    src: getVehiculeImage("bentley_continental_gt_sport/bentley-4.jpg"),
    avif: getVehiculeImageAvif("bentley_continental_gt_sport/bentley-4.avif"),
    webp: getVehiculeImageWebp("bentley_continental_gt_sport/bentley-4.webp"),
  },
  {
    id: 6,
    src: getVehiculeImage("bentley_continental_gt_sport/bentley-5.jpg"),
    avif: getVehiculeImageAvif("bentley_continental_gt_sport/bentley-5.avif"),
    webp: getVehiculeImageWebp("bentley_continental_gt_sport/bentley-5.webp"),
  },
  {
    id: 7,
    src: getVehiculeImage("bentley_continental_gt_sport/bentley-6.jpg"),
    avif: getVehiculeImageAvif("bentley_continental_gt_sport/bentley-6.avif"),
    webp: getVehiculeImageWebp("bentley_continental_gt_sport/bentley-6.webp"),
  },
  {
    id: 8,
    src: getVehiculeImage("bentley_continental_gt_sport/bentley-7.jpg"),
    avif: getVehiculeImageAvif("bentley_continental_gt_sport/bentley-7.avif"),
    webp: getVehiculeImageWebp("bentley_continental_gt_sport/bentley-7.webp"),
  },
  {
    id: 9,
    src: getVehiculeImage("bentley_continental_gt_sport/bentley-8.jpg"),
    avif: getVehiculeImageAvif("bentley_continental_gt_sport/bentley-8.avif"),
    webp: getVehiculeImageWebp("bentley_continental_gt_sport/bentley-8.webp"),
  },
  {
    id: 10,
    src: getVehiculeImage("bentley_continental_gt_sport/bentley-9.jpg"),
    avif: getVehiculeImageAvif("bentley_continental_gt_sport/bentley-9.avif"),
    webp: getVehiculeImageWebp("bentley_continental_gt_sport/bentley-9.webp"),
  },
  {
    id: 11,
    src: getVehiculeImage("bentley_continental_gt_sport/bentley-10.jpg"),
    avif: getVehiculeImageAvif("bentley_continental_gt_sport/bentley-10.avif"),
    webp: getVehiculeImageWebp("bentley_continental_gt_sport/bentley-10.webp"),
  },
  {
    id: 12,
    src: getVehiculeImage("bentley_continental_gt_sport/bentley-11.jpg"),
    avif: getVehiculeImageAvif("bentley_continental_gt_sport/bentley-11.avif"),
    webp: getVehiculeImageWebp("bentley_continental_gt_sport/bentley-11.webp"),
  },
  {
    id: 13,
    src: getVehiculeImage("bentley_continental_gt_sport/bentley-12.jpg"),
    avif: getVehiculeImageAvif("bentley_continental_gt_sport/bentley-12.avif"),
    webp: getVehiculeImageWebp("bentley_continental_gt_sport/bentley-12.webp"),
  },
  {
    id: 14,
    src: getVehiculeImage("bentley_continental_gt_sport/bentley-13.jpg"),
    avif: getVehiculeImageAvif("bentley_continental_gt_sport/bentley-13.avif"),
    webp: getVehiculeImageWebp("bentley_continental_gt_sport/bentley-13.webp"),
  },
  {
    id: 15,
    src: getVehiculeImage("bentley_continental_gt_sport/bentley-14.jpg"),
    avif: getVehiculeImageAvif("bentley_continental_gt_sport/bentley-14.avif"),
    webp: getVehiculeImageWebp("bentley_continental_gt_sport/bentley-14.webp"),
  },
  {
    id: 16,
    src: getVehiculeImage("bentley_continental_gt_sport/bentley-15.jpg"),
    avif: getVehiculeImageAvif("bentley_continental_gt_sport/bentley-15.avif"),
    webp: getVehiculeImageWebp("bentley_continental_gt_sport/bentley-15.webp"),
  },
  {
    id: 17,
    src: getVehiculeImage("bentley_continental_gt_sport/bentley-16.jpg"),
    avif: getVehiculeImageAvif("bentley_continental_gt_sport/bentley-16.avif"),
    webp: getVehiculeImageWebp("bentley_continental_gt_sport/bentley-16.webp"),
  },
  {
    id: 18,
    src: getVehiculeImage("bentley_continental_gt_sport/bentley-17.jpg"),
    avif: getVehiculeImageAvif("bentley_continental_gt_sport/bentley-17.avif"),
    webp: getVehiculeImageWebp("bentley_continental_gt_sport/bentley-17.webp"),
  },
  {
    id: 19,
    src: getVehiculeImage("bentley_continental_gt_sport/bentley-18.jpg"),
    avif: getVehiculeImageAvif("bentley_continental_gt_sport/bentley-18.avif"),
    webp: getVehiculeImageWebp("bentley_continental_gt_sport/bentley-18.webp"),
  },
  {
    id: 20,
    src: getVehiculeImage("bentley_continental_gt_sport/bentley-19.jpg"),
    avif: getVehiculeImageAvif("bentley_continental_gt_sport/bentley-19.avif"),
    webp: getVehiculeImageWebp("bentley_continental_gt_sport/bentley-19.webp"),
  },
];

onMounted(() => {
  window.scrollTo(0, el.value!.offsetTop - 20);
});
</script>
