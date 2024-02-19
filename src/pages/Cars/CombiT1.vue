<template>
  <div ref="el" class="my-20">
    <div class="my-10 mx-10 sm:my-20 md:mx-40">
      <h1 class="text-xl md:text-2xl lg:text-3xl font-semibold text-center">Ajoutez une Note de Charme Vintage à Votre Mariage avec le Volkswagen Combi T1 chez LB-Prestacar à Valenciennes</h1>
      <p class="text-base md:text-lg lg:text-xl">
        <br />
        <br />
        Rendez votre mariage unique et inoubliable en intégrant le Volkswagen Combi T1, disponible
        chez LB-Prestacar à Valenciennes. Ce véhicule emblématique, symbole de liberté et d'aventure, est le choix
        parfait pour les couples à la recherche d'une touche de nostalgie et d'originalité pour leur grand jour. 🚌💐
        <br />
        <br />
      </p>

      <Carousel :items="images" />
      <br />
      <br />

      <H2 class="font-bold text-xl md:text-2xl text-center">Le Volkswagen Combi T1 : Un Icône de Convivialité et d'Originalité</H2>

      <p class="text-base md:text-lg lg:text-xl">
        <br />
        <br />
        Le <span class="font-bold">Volkswagen Combi T1</span> n'est pas juste un moyen de transport ; c'est une invitation au voyage dans le temps,
        évoquant des souvenirs d'époques révolues avec son design unique et sa silhouette reconnaissable. Avec son
        intérieur spacieux et convivial, le Combi T1 promet de faire de votre arrivée et de vos déplacements des moments
        joyeux et pleins de charme. 🌼🚐
        <br />
        <br />
        <span class="font-bold">Confort Rétro et Atmosphère Accueillante:</span> Profitez de l'espace intérieur du Combi T1,
        parfait pour partager des moments privilégiés avec vos témoins ou votre famille proche, tout en créant une ambiance
        chaleureuse et détendue. Son intérieur authentiquement vintage est idéal pour ajouter une dimension de convivialité
        à votre célébration. 🛋️🎉
        <br />
        <br />
        <span class="font-bold">Photographies Pleines de Caractère:</span> Le Volkswagen Combi T1 offre un cadre idyllique et
        plein de personnalité pour vos photos de mariage, garantissant des clichés uniques qui captureront l'esprit joyeux et
        insouciant de votre union. 📸💞
        <br />
        <br />
        <span class="font-bold">Une Expérience de Voyage Mémorable:</span> Laissez-vous transporter avec style et originalité
        par nos chauffeurs professionnels, qui sauront faire de vos trajets en Combi T1 une partie intégrante de la célébration
        de votre amour, ajoutant une note de conte de fées à votre journée spéciale. 🚍💫
        <br />
        <br />
      </p>

      <H2 class="font-bold text-xl md:text-2xl text-center">Service Sur Mesure pour un Jour Inoubliable</H2>

      <p class="text-base md:text-lg lg:text-xl">
        <br />
        <br />
        Chez LB-Prestacar, nous savons que votre mariage est le reflet de votre histoire d'amour. C'est pourquoi nous proposons
        des services personnalisés avec le Volkswagen Combi T1. Notre équipe est à votre écoute pour adapter chaque détail à vos
        préférences, rendant votre expérience véritablement unique. 🌸🎵
        <br />
        <br />
      </p>

      <H2 class="font-bold text-xl md:text-2xl text-center">Réservez Votre Volkswagen Combi T1 Dès Aujourd'hui</H2>

      <p class="text-base md:text-lg lg:text-xl">
        <br />
        <br />
        Pour que le Volkswagen Combi T1 soit à vos côtés lors de votre mariage à Valenciennes, contactez LB-Prestacar
        sans attendre. Notre équipe dévouée est prête à discuter de vos idées et à tout mettre en œuvre pour que votre
        journée soit parfaitement mémorable. 📅❤️
        <br />
        <br />
        Contactez-nous dès aujourd'hui au 06 52 74 34 05 ou via
        <router-link
            to="/contact"
            class="underline">notre page de contact
        </router-link>
        pour apporter cette touche de charme vintage à votre mariage. Avec LB-Prestacar, offrez-vous un cadre festif
        et original qui enrichira votre célébration d'une ambiance authentique et chaleureuse, grâce à la présence du Volkswagen Combi T1. 💌🚌
        <br />
        <br />
        Capacité: 3 passagers.
        <br />
        <br />
        Les expositions et visites sont sur devis. L'approche est de 30km autour
        de Valenciennes, au-delà un supplément sera demandé.
        <br />
        <br />
      </p>
    </div>

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
  ["1h", "200€"],
  ["3h", "400€"],
  ["Forfait Mariage", "500€"],
];

const options = [
  ["Intitulé", "Prix"],
  ["Décoration intérieur", "Sur devis"],
  ["Photographe", "Sur devis"],
  ["Fleurs", "Sur devis"],
];

const images = [
  {
    id: 1,
    src: getVehiculeImage("combi_t1/combi1.jpg"),
    avif: getVehiculeImageAvif("combi_t1/combi1.avif"),
    webp: getVehiculeImageWebp("combi_t1/combi1.webp"),
  },
  {
    id: 2,
    src: getVehiculeImage("combi_t1/combi2.jpg"),
    avif: getVehiculeImageAvif("combi_t1/combi2.avif"),
    webp: getVehiculeImageWebp("combi_t1/combi2.webp"),
  },
  {
    id: 3,
    src: getVehiculeImage("combi_t1/combi3.jpg"),
    avif: getVehiculeImageAvif("combi_t1/combi3.avif"),
    webp: getVehiculeImageWebp("combi_t1/combi3.webp"),
  },
  {
    id: 4,
    src: getVehiculeImage("combi_t1/combi4.jpg"),
    avif: getVehiculeImageAvif("combi_t1/combi4.avif"),
    webp: getVehiculeImageWebp("combi_t1/combi4.webp"),
  },
  {
    id: 5,
    src: getVehiculeImage("combi_t1/combi5.jpg"),
    avif: getVehiculeImageAvif("combi_t1/combi5.avif"),
    webp: getVehiculeImageWebp("combi_t1/combi5.webp"),
  },
  {
    id: 6,
    src: getVehiculeImage("combi_t1/combi6.jpg"),
    avif: getVehiculeImageAvif("combi_t1/combi6.avif"),
    webp: getVehiculeImageWebp("combi_t1/combi6.webp"),
  },
  {
    id: 7,
    src: getVehiculeImage("combi_t1/combi7.jpg"),
    avif: getVehiculeImageAvif("combi_t1/combi7.avif"),
    webp: getVehiculeImageWebp("combi_t1/combi7.webp"),
  },
  {
    id: 8,
    src: getVehiculeImage("combi_t1/combi8.jpg"),
    avif: getVehiculeImageAvif("combi_t1/combi8.avif"),
    webp: getVehiculeImageWebp("combi_t1/combi8.webp"),
  },
];

onMounted(() => {
  window.scrollTo(0, el.value!.offsetTop - 20);
});
</script>
