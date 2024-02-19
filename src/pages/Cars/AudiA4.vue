<template>
  <div ref="el" class="my-20">
    <div class="my-10 mx-10 sm:my-20 md:mx-40">
      <h1 class="text-xl md:text-2xl lg:text-3xl font-semibold text-center">Votre Mariage Sublimé par l'Audi A4 Allroad chez LB-Prestacar à Valenciennes</h1>
      <p class="text-base md:text-lg lg:text-xl">
        <br />
        <br />
        Célébrez votre union en choisissant l'<span class="font-bold">Audi A4 Allroad</span>, disponible
        chez LB-Prestacar à Valenciennes. Ce modèle, parfait mélange de sophistication et de polyvalence, est l'option idéale
        pour les couples cherchant à combiner élégance et capacité d'adaptation pour leur journée spéciale. 🚙💨
        <br />
        <br />
      </p>

      <Carousel :items="images" />

      <br />
      <br />

      <H2 class="font-bold text-xl md:text-2xl text-center">L'Audi A4 Allroad : Synonyme de Confort et d'Élégance</H2>

      <p class="text-base md:text-lg lg:text-xl">
        <br />
        <br />
        L'Audi A4 Allroad n'est pas seulement une voiture, c'est une invitation à vivre une expérience de luxe et de
        confort. Avec son allure raffinée, son intérieur haut de gamme et sa capacité tout-terrain, l'A4 Allroad est
        conçue pour transformer votre arrivée en un moment d'élégance et de distinction, captant l'attention de tous
        vos invités. 🌟🌲
        <br />
        <br />
        <span class="font-bold">Confort Supérieur et Finitions de Haute Qualité:</span> Bénéficiez d'un confort
        exceptionnel avec les sièges ergonomiques, l'espace ample pour vos invités et les finitions luxueuses qui
        caractérisent l'intérieur de l'Audi A4 Allroad. Parfaite pour assurer une expérience relaxante et élégante,
        elle promet une entrée remarquable et des déplacements tout en douceur. 🛋️🌄
        <br />
        <br />
        <span class="font-bold">Des Photographies Élégantes: </span> L'Audi A4 Allroad offre un cadre magnifique
        pour vos photos de mariage, assurant des souvenirs visuels élégants et sophistiqués. Sa présence ajoute une
        touche de raffinement inégalable à vos clichés. 📸💑
        <br />
        <br />
        <span class="font-bold">Une Expérience de Conduite Incomparable:</span> Nos chauffeurs professionnels vous
        garantiront une arrivée fluide et élégante, vous permettant de vous détendre et de savourer chaque instant
        de votre journée spéciale, entourés par le luxe de l'A4 Allroad. 🚘🛤️
        <br />
        <br />
      </p>

      <H2 class="font-bold text-xl md:text-2xl text-center">Service Personnalisé pour un Mariage Mémorable</H2>

      <p class="text-base md:text-lg lg:text-xl">
        <br />
        <br />
        Chez LB-Prestacar, nous savons que votre mariage est l'expression de votre parcours unique. C'est pourquoi
        nous offrons un service sur mesure avec l'Audi A4 Allroad. Qu'il s'agisse de décorations personnalisées ou
        d'une playlist adaptée pour le trajet, notre équipe est engagée à personnaliser votre expérience selon
        vos préférences, rendant votre célébration véritablement exceptionnelle. 🌹🎵
        <br />
        <br />
      </p>

      <H2 class="font-bold text-xl md:text-2xl text-center">Réservez Votre Audi A4 Allroad Dès Aujourd'hui</H2>

      <p class="text-base md:text-lg lg:text-xl">
        <br />
        <br />
        Pour assurer la disponibilité de l'Audi A4 Allroad pour votre mariage à Valenciennes, contactez LB-Prestacar
        sans attendre. Notre équipe passionnée est à votre écoute pour planifier chaque détail de votre expérience
        afin qu'elle soit en parfaite harmonie avec vos attentes. 📅💖
        <br />
        <br />
        Contactez-nous dès maintenant au 06 52 74 34 05 ou via
        <router-link
            to="/contact"
            class="underline">notre page de contact
        </router-link>
        pour intégrer cette alliance de confort et d'aventure à votre journée spéciale. Avec LB-Prestacar,
        embarquez pour un mariage exceptionnel, magnifié par le charme et la polyvalence de l'Audi A4 Allroad. 💌🚙
        <br />
        <br />
        Capacité: 4 passagers.
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
    src: getVehiculeImage("audi_a4/audiA4_2.jpg"),
    avif: getVehiculeImageAvif("audi_a4/audiA4_2.avif"),
    webp: getVehiculeImageWebp("audi_a4/audiA4_2.webp"),
  },
  {
    id: 2,
    src: getVehiculeImage("audi_a4/audiA4_1.jpg"),
    avif: getVehiculeImageAvif("audi_a4/audiA4_1.avif"),
    webp: getVehiculeImageWebp("audi_a4/audiA4_1.webp"),
  },
  {
    id: 3,
    src: getVehiculeImage("audi_a4/audiA4_3.jpg"),
    avif: getVehiculeImageAvif("audi_a4/audiA4_3.avif"),
    webp: getVehiculeImageWebp("audi_a4/audiA4_3.webp"),
  },
  {
    id: 4,
    src: getVehiculeImage("audi_a4/audiA4_4.jpg"),
    avif: getVehiculeImageAvif("audi_a4/audiA4_4.avif"),
    webp: getVehiculeImageWebp("audi_a4/audiA4_4.webp"),
  },
  {
    id: 5,
    src: getVehiculeImage("audi_a4/audiA4_5.jpg"),
    avif: getVehiculeImageAvif("audi_a4/audiA4_5.avif"),
    webp: getVehiculeImageWebp("audi_a4/audiA4_5.webp"),
  },
  {
    id: 6,
    src: getVehiculeImage("audi_a4/audiA4_6.jpg"),
    avif: getVehiculeImageAvif("audi_a4/audiA4_6.avif"),
    webp: getVehiculeImageWebp("audi_a4/audiA4_6.webp"),
  },
  {
    id: 7,
    src: getVehiculeImage("audi_a4/audiA4_7.jpg"),
    avif: getVehiculeImageAvif("audi_a4/audiA4_7.avif"),
    webp: getVehiculeImageWebp("audi_a4/audiA4_7.webp"),
  },
  {
    id: 8,
    src: getVehiculeImage("audi_a4/audiA4_8.jpg"),
    avif: getVehiculeImageAvif("audi_a4/audiA4_8.avif"),
    webp: getVehiculeImageWebp("audi_a4/audiA4_8.webp"),
  },
  {
    id: 9,
    src: getVehiculeImage("audi_a4/audiA4_9.jpg"),
    avif: getVehiculeImageAvif("audi_a4/audiA4_9.avif"),
    webp: getVehiculeImageWebp("audi_a4/audiA4_9.webp"),
  },
  {
    id: 10,
    src: getVehiculeImage("audi_a4/audiA4_10.jpg"),
    avif: getVehiculeImageAvif("audi_a4/audiA4_10.avif"),
    webp: getVehiculeImageWebp("audi_a4/audiA4_10.webp"),
  },
  {
    id: 11,
    src: getVehiculeImage("audi_a4/audiA4_11.jpg"),
    avif: getVehiculeImageAvif("audi_a4/audiA4_11.avif"),
    webp: getVehiculeImageWebp("audi_a4/audiA4_11.webp"),
  },
  {
    id: 12,
    src: getVehiculeImage("audi_a4/audiA4_12.jpg"),
    avif: getVehiculeImageAvif("audi_a4/audiA4_12.avif"),
    webp: getVehiculeImageWebp("audi_a4/audiA4_1.webp"),
  },
  {
    id: 13,
    src: getVehiculeImage("audi_a4/audiA4_13.jpg"),
    avif: getVehiculeImageAvif("audi_a4/audiA4_13.avif"),
    webp: getVehiculeImageWebp("audi_a4/audiA4_13.webp"),
  },
  {
    id: 14,
    src: getVehiculeImage("audi_a4/audiA4_14.jpg"),
    avif: getVehiculeImageAvif("audi_a4/audiA4_14.avif"),
    webp: getVehiculeImageWebp("audi_a4/audiA4_14.webp"),
  },
];

onMounted(() => {
  window.scrollTo(0, el.value!.offsetTop - 20);
});
</script>
