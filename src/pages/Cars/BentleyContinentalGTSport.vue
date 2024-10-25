<template>
  <div ref="el" class="my-20">
    <div class="my-10 mx-10 sm:my-20 md:mx-40">
      <h1 class="text-xl md:text-2xl lg:text-3xl font-semibold text-center mt-8">Votre Mariage avec l'Élégance de la Bentley Continental GT Sport chez LB-Prestacar à Valenciennes</h1>
      <p class="text-base md:text-lg lg:text-xl mb-8">
        Faites de votre mariage une célébration du luxe et de la performance en choisissant la <span class="font-bold">Bentley Continental GT Sport</span>, offerte exclusivement
        par LB-Prestacar à Valenciennes. Ce coupé de grand luxe, alliant sophistication et puissance, est l'option idéale pour les couples
        aspirant à incorporer une touche d'exclusivité et d'élégance dynamique à leur union. 🚗💨
      </p>

      <Carousel :items="images" />

      <h2 class="font-bold text-xl md:text-2xl text-center mt-8 mb-8">La Bentley Continental GT Sport : Un Synonyme de Luxe et de Performance</H2>

      <p class="text-base md:text-lg lg:text-xl mb-4">
        La Bentley Continental GT Sport n'est pas seulement un véhicule, c'est une affirmation de style et de puissance. Avec sa silhouette élégante,
        son intérieur artisanal raffiné, et ses capacités dynamiques hors pair, la Continental GT Sport est promise à faire de votre arrivée
        un moment d'exception et de prestige, captivant l'admiration de tous vos invités. 🌟🛣️
      </p>

      <p class="text-base md:text-lg lg:text-xl mb-4">
        <span class="font-bold">Confort de Luxe et Finitions Exquises:</span> Savourez le confort ultime offert par les sièges en cuir somptueux, l'espace accueillant pour vos invités, et les détails minutieux
        qui caractérisent l'intérieur de la Bentley Continental GT Sport. Parfaite pour une expérience de voyage relaxante et sophistiquée,
        elle assure une présence remarquable et des déplacements tout en élégance. 🛋️🍾
      </p>

      <p class="text-base md:text-lg lg:text-xl mb-4">
        <span class="font-bold">Photographies Magnifiques: </span> Mettez en valeur l'élégance et le caractère sportif de la Bentley Continental GT Sport dans vos photos de mariage, créant des souvenirs visuels
        luxueux et emblématiques. Sa prestance indéniable enrichira vos clichés d'une touche de grandeur. 📸💍
      </p>

      <p class="text-base md:text-lg lg:text-xl mb-4">
        <span class="font-bold">Expérience de Conduite Exhilarante:</span> Nos chauffeurs experts vous offriront une arrivée fluide et impressionnante, vous permettant de vous immerger dans le bonheur de votre
        journée spéciale, entourés par le raffinement exceptionnel de la Continental GT Sport. 🚘✨
      </p>

      <h2 class="font-bold text-xl md:text-2xl text-center mb-8 mt-8">Service Personnalisé pour un Mariage Inoubliable</H2>

      <p class="text-base md:text-lg lg:text-xl mb-4">
        Chez LB-Prestacar, nous croyons que votre mariage doit refléter votre personnalité unique. C'est pourquoi nous proposons un service sur mesure avec la Bentley Continental GT Sport. Que ce soit pour des arrangements floraux sophistiqués ou une playlist qui accompagne élégamment vos déplacements, notre équipe est engagée
        à personnaliser votre expérience selon vos souhaits, rendant votre célébration véritablement exceptionnelle. 🌸🎵
      </p>

      <h2 class="font-bold text-xl md:text-2xl text-center mb-8 mt-8">Réservez Votre Bentley Continental GT Sport Dès Aujourd'hui</H2>

      <p class="text-base md:text-lg lg:text-xl mb-4">
        Pour assurer la disponibilité de la Bentley Continental GT Sport pour votre mariage à Valenciennes, contactez LB-Prestacar
        sans plus tarder. Notre équipe passionnée est à votre écoute pour planifier chaque aspect de votre expérience afin qu'elle corresponde parfaitement à vos attentes. 📅🖤
      </p>

      <p class="text-base md:text-lg lg:text-xl mb-4">
        Contactez-nous dès maintenant au 06 52 74 34 05 ou via
        <router-link
            to="/contact"
            class="underline">notre page de contact
        </router-link>
        pour faire de cette merveille de luxe et de sportivité une partie de votre grand jour. Avec LB-Prestacar,
        embrassez un mariage d'élégance suprême, sublimé par la grâce et la puissance de la Bentley Continental GT Sport. 💌🚗
      </p>

      <p class="text-base md:text-lg lg:text-xl mb-4">
        Capacité: 3 passagers (1 recommandé).
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
