<template>
  <div ref="el" class="my-20">
    <div class="my-10 mx-10 sm:my-20 md:mx-40">
      <p class="text-base md:text-lg lg:text-xl">
        Découvrez la légendaire <span class="font-bold">Citroën 2CV</span> édition spéciale France 3,
        une icône intemporelle au charme unique. Cette voiture emblématique, datant de 1983, incarne
        le mariage parfait entre l'authenticité du design français et la simplicité élégante.
        <br />
        <br />
        À bord de cette 2CV, chaque instant devient une escapade rétro, avec un intérieur empreint
        de nostalgie. L'atmosphère décontractée de cette voiture de collection se marie parfaitement
        avec l'esprit des célébrations, faisant de chaque trajet une expérience mémorable.
        <br />
        <br />
        Opter pour la location de cette Citroën 2CV pour votre mariage à Valenciennes. C'est bien
        plus qu'un choix de transport, c'est une déclaration d'amour au style classique et à l'élégance
        décontractée. Notre équipe dévouée veillera à ce que chaque détail soit parfait, ajoutant une note
        d'originalité et d'authenticité à votre journée spéciale.
        <br />
        <br />
        Choisissez l'élégance intemporelle, optez pour la location de la Citroën 2CV édition spéciale
        France 3. Transformez votre mariage en un voyage à travers l'histoire automobile française,
        mêlant charme, simplicité et sophistication. Rendez cette journée vraiment parfaite en ajoutant
        une touche rétro-chic à votre cérémonie. Réservez dès maintenant pour créer des souvenirs uniques
        au volant de cette voiture emblématique.
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

const grille_tarifiaire = [
  ["Temps", "Prix"],
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
    src: getVehiculeImage("citroen_2cv/2cv-2.jpg"),
    avif: getVehiculeImageAvif("citroen_2cv/2cv-2.avif"),
    webp: getVehiculeImageWebp("citroen_2cv/2cv-2.webp"),
  },
  {
    id: 2,
    src: getVehiculeImage("citroen_2cv/2cv-3.jpg"),
    avif: getVehiculeImageAvif("citroen_2cv/2cv-3.avif"),
    webp: getVehiculeImageWebp("citroen_2cv/2cv-3.webp"),
  },
  {
    id: 3,
    src: getVehiculeImage("citroen_2cv/2cv-1.jpg"),
    avif: getVehiculeImageAvif("citroen_2cv/2cv-1.avif"),
    webp: getVehiculeImageWebp("citroen_2cv/2cv-1.webp"),
  },
  {
    id: 4,
    src: getVehiculeImage("citroen_2cv/2cv-4.jpg"),
    avif: getVehiculeImageAvif("citroen_2cv/2cv-4.avif"),
    webp: getVehiculeImageWebp("citroen_2cv/2cv-4.webp"),
  },
  {
    id: 5,
    src: getVehiculeImage("citroen_2cv/2cv-5.jpg"),
    avif: getVehiculeImageAvif("citroen_2cv/2cv-5.avif"),
    webp: getVehiculeImageWebp("citroen_2cv/2cv-5.webp"),
  },
  {
    id: 7,
    src: getVehiculeImage("citroen_2cv/2cv-7.jpg"),
    avif: getVehiculeImageAvif("citroen_2cv/2cv-7.avif"),
    webp: getVehiculeImageWebp("citroen_2cv/2cv-7.webp"),
  },
];

onMounted(() => {
  window.scrollTo(0, el.value!.offsetTop - 20);
});
</script>
