<template xmlns="http://www.w3.org/1999/html">
  <div ref="el" class="my-20">
    <div class="my-10 mx-10 sm:my-20 md:mx-40">
      <h1 class="text-xl md:text-2xl lg:text-3xl font-semibold text-center"> Louez une Rolls-Royce Corniche Blanche pour un Mariage Inoubliable à Valenciennes</h1>
      <p class="text-base md:text-lg lg:text-xl">
        <br />
        <br />
        Rendez votre mariage absolument magique et inoubliable avec la quintessence du luxe et de l'élégance : notre <span class="font-bold">Rolls-Royce Corniche</span>,
        disponible exclusivement chez LB-Prestacar 🌟, à Valenciennes. Cette pièce maîtresse de notre flotte de véhicules de luxe est le choix
        préféré des couples cherchant à apporter une touche de grandeur et de raffinement à leur journée spéciale 💍✨.
        <br />
        <br />
      </p>

      <H2 class="font-bold text-xl md:text-2xl text-center">La Rolls-Royce Corniche : Un Symbole d'Élégance et de Prestige 🚗💫</H2>

      <p class="text-base md:text-lg lg:text-xl">
        <br />
        <br />
        La Rolls-Royce Corniche est bien plus qu'une simple voiture ; c'est un symbole intemporel de sophistication et de prestige.
        Avec sa silhouette emblématique, son intérieur luxueux et son allure majestueuse, la Corniche promet de transformer votre
        arrivée en un moment spectaculaire et mémorable. 🌟
        <br />
        <br />
        <span class="font-bold">Confort Incomparable:</span> À bord de cette merveille d'ingénierie, vous découvrirez le summum du confort et du luxe, avec des
        sièges en cuir souple et un espace intérieur spacieux, parfait pour détendre et savourer chaque instant de votre trajet vers
        le lieu de la cérémonie ou de la réception. ❤️
        <br />
        <br />
        <span class="font-bold">Photographies Élégantes:</span> La Rolls-Royce Corniche blanche offre un arrière-plan exceptionnel pour vos photographies de mariage,
        garantissant des images aussi majestueuses et élégantes que votre union. 📸💒
        <br />
        <br />
        <span class="font-bold">Expérience de Conduite Royale:</span> Laissez-vous transporter dans le plus pur confort par nos chauffeurs professionnels et expérimentés, qui veilleront à ce que votre
        voyage soit aussi fluide et agréable que possible, vous permettant de vous concentrer pleinement sur la célébration de votre amour. 👑🚘
        <br />
        <br />
      </p>

      <H2 class="font-bold text-xl md:text-2xl text-center">Un Service Personnalisé pour Votre Journée Exceptionnelle</H2>

      <p class="text-base md:text-lg lg:text-xl">
        <br />
        <br />
        Chez LB-Prestacar, nous comprenons que votre mariage est unique. C'est pourquoi nous offrons des services personnalisés
        pour compléter votre expérience de location de la Rolls-Royce Corniche. Que vous souhaitiez des décorations florales spécifiques 🌸,
        une sélection de musiques pour accompagner votre trajet 🎶, ou tout autre détail qui rendra votre journée encore plus spéciale,
        notre équipe est à votre écoute pour répondre à vos désirs les plus précis.
        <br />
        <br />
      </p>

      <H2 class="font-bold text-xl md:text-2xl text-center">Un Service Personnalisé pour Votre Journée Exceptionnelle</H2>

      <p class="text-base md:text-lg lg:text-xl">
        <br />
        <br />
        Pour garantir la disponibilité de la Rolls-Royce Corniche pour votre mariage à Valenciennes, nous vous invitons
        à nous contacter bien à l'avance. Notre équipe dédiée est prête à discuter de vos besoins et à organiser chaque détail
        pour que votre expérience soit parfaite. 📅
        <br />
        <br />
        Contactez-nous dès aujourd'hui au 06 52 74 34 05 ou via
        <router-link
          to="/contact"
          class="underline">notre page de contact
        </router-link>
        pour réserver cette icône du
        luxe et de l'élégance pour votre mariage. Avec LB-Prestacar, faites le premier pas vers un moment inoubliable,
        à la hauteur de vos rêves les plus somptueux. 🌈💖
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
    src: getVehiculeImage("rolls_royce_corniche/corniche5.jpg"),
    avif: getVehiculeImageAvif("rolls_royce_corniche/corniche5.avif"),
    webp: getVehiculeImageWebp("rolls_royce_corniche/corniche5.webp"),
  },
  {
    id: 2,
    src: getVehiculeImage("rolls_royce_corniche/corniche2.jpg"),
    avif: getVehiculeImageAvif("rolls_royce_corniche/corniche2.avif"),
    webp: getVehiculeImageWebp("rolls_royce_corniche/corniche2.webp"),
  },
  {
    id: 3,
    src: getVehiculeImage("rolls_royce_corniche/corniche3.jpg"),
    avif: getVehiculeImageAvif("rolls_royce_corniche/corniche3.avif"),
    webp: getVehiculeImageWebp("rolls_royce_corniche/corniche3.webp"),
  },
  {
    id: 4,
    src: getVehiculeImage("rolls_royce_corniche/corniche4.jpg"),
    avif: getVehiculeImageAvif("rolls_royce_corniche/corniche4.avif"),
    webp: getVehiculeImageWebp("rolls_royce_corniche/corniche4.webp"),
  },
  {
    id: 5,
    src: getVehiculeImage("rolls_royce_corniche/corniche1.jpg"),
    avif: getVehiculeImageAvif("rolls_royce_corniche/corniche1.avif"),
    webp: getVehiculeImageWebp("rolls_royce_corniche/corniche1.webp"),
  },
  {
    id: 6,
    src: getVehiculeImage("rolls_royce_corniche/corniche6.jpg"),
    avif: getVehiculeImageAvif("rolls_royce_corniche/corniche6.avif"),
    webp: getVehiculeImageWebp("rolls_royce_corniche/corniche6.webp"),
  },
  {
    id: 7,
    src: getVehiculeImage("rolls_royce_corniche/corniche7.jpg"),
    avif: getVehiculeImageAvif("rolls_royce_corniche/corniche7.avif"),
    webp: getVehiculeImageWebp("rolls_royce_corniche/corniche7.webp"),
  },
  {
    id: 8,
    src: getVehiculeImage("rolls_royce_corniche/corniche8.jpg"),
    avif: getVehiculeImageAvif("rolls_royce_corniche/corniche8.avif"),
    webp: getVehiculeImageWebp("rolls_royce_corniche/corniche8.webp"),
  },
  {
    id: 9,
    src: getVehiculeImage("rolls_royce_corniche/corniche9.jpg"),
    avif: getVehiculeImageAvif("rolls_royce_corniche/corniche9.avif"),
    webp: getVehiculeImageWebp("rolls_royce_corniche/corniche9.webp"),
  },
  {
    id: 10,
    src: getVehiculeImage("rolls_royce_corniche/corniche10.jpg"),
    avif: getVehiculeImageAvif("rolls_royce_corniche/corniche10.avif"),
    webp: getVehiculeImageWebp("rolls_royce_corniche/corniche10.webp"),
  },
  {
    id: 11,
    src: getVehiculeImage("rolls_royce_corniche/corniche11.jpg"),
    avif: getVehiculeImageAvif("rolls_royce_corniche/corniche11.avif"),
    webp: getVehiculeImageWebp("rolls_royce_corniche/corniche11.webp"),
  },
  {
    id: 12,
    src: getVehiculeImage("rolls_royce_corniche/corniche12.jpg"),
    avif: getVehiculeImageAvif("rolls_royce_corniche/corniche12.avif"),
    webp: getVehiculeImageWebp("rolls_royce_corniche/corniche12.webp"),
  },
  {
    id: 13,
    src: getVehiculeImage("rolls_royce_corniche/corniche14.jpg"),
    avif: getVehiculeImageAvif("rolls_royce_corniche/corniche14.avif"),
    webp: getVehiculeImageWebp("rolls_royce_corniche/corniche14.webp"),
  },
];

onMounted(() => {
  window.scrollTo(0, el.value!.offsetTop - 20);
});
</script>
