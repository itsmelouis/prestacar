<template>
  <div ref="el" class="my-20">
    <div class="my-10 mx-10 sm:my-20 md:mx-40">
      <h1 class="text-xl md:text-2xl lg:text-3xl font-semibold text-center mya-8">Votre Mariage avec l'Élégance de la Mercedes Classe E Cabriolet chez LB-Prestacar à Valenciennes</h1>
      <p class="text-base md:text-lg lg:text-xl my-8">
        Offrez-vous une célébration unique avec la <span class="font-bold">Mercedes Classe E Cabriolet</span>, disponible exclusivement
        chez LB-Prestacar à Valenciennes. Cette voiture décapotable, symbole de raffinement et de liberté, est la promesse d'une arrivée spectaculaire et d'une expérience inoubliable pour les couples
        cherchant à ajouter une touche de luxe et d'élégance à leur mariage. 🚗💨
      </p>

      <Carousel :items="images" />

      <H2 class="font-bold text-xl md:text-2xl text-center mt-8 mb-8">La Mercedes Classe E Cabriolet : Synonyme de Raffinement et d'Ouverture</H2>

      <p class="text-base md:text-lg lg:text-xl mb-4">
        La Mercedes Classe E Cabriolet n'est pas juste un véhicule, c'est une expérience de luxe à ciel ouvert. Avec son design élégant,
        son intérieur luxueux et ses performances exceptionnelles, la Classe E Cabriolet est prête à vous offrir un moment d'exception
        sous le soleil de Valenciennes, marquant les esprits de tous vos invités avec style et sophistication. 🌞🌹
      </p>

      <p class="text-base md:text-lg lg:text-xl mb-4">
        <span class="font-bold">Confort Premium et Design Exquis:</span> Profitez de sièges en cuir luxueux, d'un espace ouvert respirant et des finitions haut de gamme
        qui caractérisent l'intérieur de la Mercedes Classe E Cabriolet. Parfaite pour un moment de détente en route vers le lieu de la cérémonie,
        elle garantit une expérience mémorable et confortable pour les mariés. 🛋️🍾
      </p>

      <p class="text-base md:text-lg lg:text-xl mb-4">
        <span class="font-bold">Des Photographies Magnifiques: </span> L'élégance et le charme de la Mercedes Classe E Cabriolet offrent un cadre idéal pour vos photos de mariage,
        assurant des souvenirs visuels élégants et intemporels. Son allure sophistiquée sera le complément parfait à la beauté de votre journée. 📸💏
      </p>

      <p class="text-base md:text-lg lg:text-xl mb-4">
        <span class="font-bold">Une Expérience de Conduite Plaisante:</span> Nos chauffeurs expérimentés vous assureront une arrivée et des déplacements relaxants et stylés,
        vous permettant de profiter pleinement de votre journée spéciale, enveloppés dans le luxe de la Classe E Cabriolet. 🚘🎉
      </p>

      <H2 class="font-bold text-xl md:text-2xl text-center mt-8 mb-8">Service Personnalisé pour une Célébration Mémorable</H2>

      <p class="text-base md:text-lg lg:text-xl mb-4">
        Chez LB-Prestacar, nous savons que chaque mariage est unique. C'est pourquoi nous proposons un service sur mesure avec la Mercedes Classe E Cabriolet. Que vous désiriez
        des décorations florales élégantes ou une musique d'ambiance pour accompagner votre trajet, notre équipe est à votre disposition pour personnaliser votre expérience
        et rendre votre mariage véritablement inoubliable. 🌸🎵
      </p>

      <H2 class="font-bold text-xl md:text-2xl text-center mt-8 mb-8">Réservez Votre Mercedes Classe E Cabriolet Dès Aujourd'hui</H2>

      <p class="text-base md:text-lg lg:text-xl mb-4">
        Pour assurer la présence de la Mercedes Classe E Cabriolet à votre mariage à Valenciennes, contactez LB-Prestacar sans tarder. Notre équipe passionnée est prête à écouter
        vos souhaits et à organiser chaque aspect de votre journée pour qu'elle soit parfaitement alignée avec vos rêves. 📅💕
      </p>

      <p class="text-base md:text-lg lg:text-xl mb-4">
        Contactez-nous dès aujourd'hui au 06 52 74 34 05 ou via
        <router-link
            to="/contact"
            class="underline">notre page de contact
        </router-link>
        pour intégrer ce symbole de luxe et de confort à votre célébration. Avec LB-Prestacar,
        vivez un mariage d'exception, sublimé par la présence imposante et élégante du Cadillac Escalade. 💌🚐
      </p>

      <p class="text-base md:text-lg lg:text-xl mb-4">
        Capacité: 6 passagers. (4 recommandés)
      </p>

      <p class="text-base md:text-lg lg:text-xl mb-4">
        Si votre souhait ne se trouve pas dans la grille tarifaire, n'hésitez
        pas à nous contacter pour obtenir rapidement un devis. Nous saurons nous
        adapter aisément.
      </p>

      <p class="text-base md:text-lg lg:text-xl mb-4">
        Les expositions et visites sont sur devis. L'approche est de 30km autour
        de Valenciennes, au-delà un supplément sera demandé.
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
  ["Temps", "Prix"],
  ["Aller Simple", "Sur devis"],
  ["Aller Retour", "Sur devis"],
  ["1h", "150€"],
  ["3h", "300€"],
  ["Forfait Mariage", "400€"],
];

const options = [
  ["Intitulé", "Prix"],
  ["Diffusion musique ou vidéo", "Inclus"],
  ["Photographe", "Sur devis"],
  ["Fleurs", "Sur devis"],
];

const images = [
  {
    id: 1,
    src: getVehiculeImage("mercedes/mercedes.jpg"),
    avif: getVehiculeImageAvif("mercedes/mercedes.avif"),
    webp: getVehiculeImageWebp("mercedes/mercedes.webp"),
  },
  {
    id: 2,
    src: getVehiculeImage("mercedes/mercedes-1.jpg"),
    avif: getVehiculeImageAvif("mercedes/mercedes-1.avif"),
    webp: getVehiculeImageWebp("mercedes/mercedes-1.webp"),
  },
  {
    id: 3,
    src: getVehiculeImage("mercedes/mercedes-2.jpg"),
    avif: getVehiculeImageAvif("mercedes/mercedes-2.avif"),
    webp: getVehiculeImageWebp("mercedes/mercedes-2.webp"),
  },
  {
    id: 4,
    src: getVehiculeImage("mercedes/mercedes-3.jpg"),
    avif: getVehiculeImageAvif("mercedes/mercedes-3.avif"),
    webp: getVehiculeImageWebp("mercedes/mercedes-3.webp"),
  },
  {
    id: 5,
    src: getVehiculeImage("mercedes/mercedes-4.jpg"),
    avif: getVehiculeImageAvif("mercedes/mercedes-4.avif"),
    webp: getVehiculeImageWebp("mercedes/mercedes-4.webp"),
  },
  {
    id: 6,
    src: getVehiculeImage("mercedes/mercedes-5.jpg"),
    avif: getVehiculeImageAvif("mercedes/mercedes-5.avif"),
    webp: getVehiculeImageWebp("mercedes/mercedes-5.webp"),
  },
  {
    id: 7,
    src: getVehiculeImage("mercedes/mercedes-6.jpg"),
    avif: getVehiculeImageAvif("mercedes/mercedes-6.avif"),
    webp: getVehiculeImageWebp("mercedes/mercedes-6.webp"),
  },
  {
    id: 8,
    src: getVehiculeImage("mercedes/mercedes-7.jpg"),
    avif: getVehiculeImageAvif("mercedes/mercedes-7.avif"),
    webp: getVehiculeImageWebp("mercedes/mercedes-7.webp"),
  },
  {
    id: 9,
    src: getVehiculeImage("mercedes/mercedes-8.jpg"),
    avif: getVehiculeImageAvif("mercedes/mercedes-8.avif"),
    webp: getVehiculeImageWebp("mercedes/mercedes-8.webp"),
  },
  {
    id: 10,
    src: getVehiculeImage("mercedes/mercedes-9.jpg"),
    avif: getVehiculeImageAvif("mercedes/mercedes-9.avif"),
    webp: getVehiculeImageWebp("mercedes/mercedes-9.webp"),
  },

];

onMounted(() => {
  window.scrollTo(0, el.value!.offsetTop - 20);
});
</script>
