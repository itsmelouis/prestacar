<template>
  <div ref="el" class="my-20">
    <div class="my-10 mx-10 sm:my-20 md:mx-40">
      <h1 class="text-xl md:text-2xl lg:text-3xl font-semibold text-center">Élevez Votre Mariage avec la Puissance de la Mustang GT chez LB-Prestacar à Valenciennes</h1>
      <p class="text-base md:text-lg lg:text-xl">
        <br />
        <br />
        Offrez à votre mariage une dose d'adrénaline et de sophistication avec la Mustang GT, disponible exclusivement chez LB-Prestacar à Valenciennes.
        Ce monument de la performance automobile américaine est le choix parfait pour les couples cherchant à infuser leur journée spéciale d'un
        esprit de liberté et d'aventure. 🐎💨
        <br />
        <br />
      </p>

      <Carousel :items="images" />
      <br />
      <br />
      <H2 class="font-bold text-xl md:text-2xl text-center">La Mustang GT : Synonyme de Puissance et d'Élégance</H2>

      <p class="text-base md:text-lg lg:text-xl">
        <br />
        <br />
        La Mustang GT n'est pas seulement une voiture ; c'est une légende vivante qui incarne la puissance, la vitesse et le style.
        Avec son allure agressive, son rugissement caractéristique et son intérieur luxueux, la Mustang GT est prête à transformer
        votre arrivée en un moment épique et inoubliable. 🚗🔥
        <br />
        <br />
        <span class="font-bold">Confort et Prestige:</span> Asseyez-vous dans le confort suprême des sièges en cuir,
        entourés par un design intérieur alliant modernité et élégance. La Mustang GT offre une expérience de conduite
        sans pareil, garantissant une entrée remarquable à votre cérémonie ou réception. 🛣️✨
        <br />
        <br />
        <span class="font-bold">Photographies Spectaculaires:</span> La Mustang GT, avec son design iconique et sa stature imposante,
        fournit un cadre magnifique pour des séances photo de mariage, capturant l'intensité et la passion de votre union avec une
        puissance visuelle frappante. 📸💖
        <br />
        <br />
        <span class="font-bold">Une Conduite à Couper le Souffle:</span> Nos chauffeurs professionnels et passionnés
        sont à votre disposition pour vous offrir une conduite fluide et excitante, vous permettant de savourer
        chaque instant de votre voyage vers le bonheur conjugal. 🏁👨‍✈️
        <br />
        <br />
      </p>

      <H2 class="font-bold text-xl md:text-2xl text-center">Service Sur Mesure pour une Célébration Mémorable</H2>

      <p class="text-base md:text-lg lg:text-xl">
        <br />
        <br />
        Chez LB-Prestacar, nous comprenons que votre mariage est une expression de votre personnalité unique.
        C'est pourquoi nous offrons des services personnalisés avec la Mustang GT. Des décorations élégantes
        à une sélection musicale qui accompagne votre style, ou même des parcours spécialement choisis pour
        maximiser votre expérience, notre équipe est là pour adapter chaque détail à vos désirs. 🌹🎵
        <br />
        <br />
      </p>

      <H2 class="font-bold text-xl md:text-2xl text-center">Réservez Votre Mustang GT Aujourd'hui</H2>

      <p class="text-base md:text-lg lg:text-xl">
        <br />
        <br />
        Pour garantir la présence de la Mustang GT à votre mariage à Valenciennes, contactez LB-Prestacar sans attendre.
        Notre équipe dédiée est prête à vous aider à planifier chaque aspect de votre expérience pour que celle-ci soit parfaite. 📅❤️
        <br />
        <br />
        Contactez-nous dès aujourd'hui au 06 52 74 34 05 ou via
        <router-link
            to="/contact"
            class="underline">notre page de contact
        </router-link>
        pour placer cette icône de la performance et du style au cœur de votre mariage. Avec LB-Prestacar, prenez le départ vers un moment exceptionnel qui restera gravé dans les mémoires. 💌🚘
        <br />
        <br />
        Capacité: 3 passagers.
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
    src: getVehiculeImage("mustang_gt/mustang-15.jpg"),
    avif: getVehiculeImageAvif("mustang_gt/mustang-15.avif"),
    webp: getVehiculeImageWebp("mustang_gt/mustang-15.webp"),
  },
  {
    id: 2,
    src: getVehiculeImage("mustang_gt/mustang-14.jpg"),
    avif: getVehiculeImageAvif("mustang_gt/mustang-14.avif"),
    webp: getVehiculeImageWebp("mustang_gt/mustang-14.webp"),
  },
  {
    id: 3,
    src: getVehiculeImage("mustang_gt/mustang-11.jpg"),
    avif: getVehiculeImageAvif("mustang_gt/mustang-11.avif"),
    webp: getVehiculeImageWebp("mustang_gt/mustang-11.webp"),
  },
  {
    id: 4,
    src: getVehiculeImage("mustang_gt/mustang-10.jpg"),
    avif: getVehiculeImageAvif("mustang_gt/mustang-10.avif"),
    webp: getVehiculeImageWebp("mustang_gt/mustang-10.webp"),
  },
  {
    id: 5,
    src: getVehiculeImage("mustang_gt/mustang-9.jpg"),
    avif: getVehiculeImageAvif("mustang_gt/mustang-9.avif"),
    webp: getVehiculeImageWebp("mustang_gt/mustang-9.webp"),
  },
  {
    id: 6,
    src: getVehiculeImage("mustang_gt/mustang-7.jpg"),
    avif: getVehiculeImageAvif("mustang_gt/mustang-7.avif"),
    webp: getVehiculeImageWebp("mustang_gt/mustang-7.webp"),
  },
  {
    id: 7,
    src: getVehiculeImage("mustang_gt/mustang-8.jpg"),
    avif: getVehiculeImageAvif("mustang_gt/mustang-8.avif"),
    webp: getVehiculeImageWebp("mustang_gt/mustang-8.webp"),
  },
  {
    id: 8,
    src: getVehiculeImage("mustang_gt/mustang-3.jpg"),
    avif: getVehiculeImageAvif("mustang_gt/mustang-3.avif"),
    webp: getVehiculeImageWebp("mustang_gt/mustang-3.webp"),
  },
  {
    id: 9,
    src: getVehiculeImage("mustang_gt/mustang-4.jpg"),
    avif: getVehiculeImageAvif("mustang_gt/mustang-4.avif"),
    webp: getVehiculeImageWebp("mustang_gt/mustang-4.webp"),
  },
  {
    id: 10,
    src: getVehiculeImage("mustang_gt/mustang-2.jpg"),
    avif: getVehiculeImageAvif("mustang_gt/mustang-2.avif"),
    webp: getVehiculeImageWebp("mustang_gt/mustang-2.webp"),
  },
  {
    id: 11,
    src: getVehiculeImage("mustang_gt/mustang-5.jpg"),
    avif: getVehiculeImageAvif("mustang_gt/mustang-5.avif"),
    webp: getVehiculeImageWebp("mustang_gt/mustang-5.webp"),
  },
  {
    id: 12,
    src: getVehiculeImage("mustang_gt/mustang-6.jpg"),
    avif: getVehiculeImageAvif("mustang_gt/mustang-6.avif"),
    webp: getVehiculeImageWebp("mustang_gt/mustang-6.webp"),
  },
  {
    id: 13,
    src: getVehiculeImage("mustang_gt/mustang-16.jpg"),
    avif: getVehiculeImageAvif("mustang_gt/mustang-16.avif"),
    webp: getVehiculeImageWebp("mustang_gt/mustang-16.webp"),
  },
  {
    id: 14,
    src: getVehiculeImage("mustang_gt/mustang.jpg"),
    avif: getVehiculeImageAvif("mustang_gt/mustang.avif"),
    webp: getVehiculeImageWebp("mustang_gt/mustang.webp"),
  },
];

onMounted(() => {
  window.scrollTo(0, el.value!.offsetTop - 20);
});
</script>
