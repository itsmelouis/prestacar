<template>
  <div ref="el" class="my-20">
    <div class="my-10 mx-10 sm:my-20 md:mx-40">
      <h1 class="text-xl md:text-2xl lg:text-3xl font-semibold text-center">Célébrez Votre Mariage avec l'Élégance de l'Aston Martin Volante chez LB-Prestacar à Valenciennes</h1>
      <p class="text-base md:text-lg lg:text-xl mb-8 mt-8">
        Offrez-vous une touche de sophistication et de performance inégalée pour votre mariage en choisissant l'<span class="font-bold">Aston Martin Volante</span>, disponible exclusivement
        chez LB-Prestacar à Valenciennes. Cette convertible de luxe, symbole d'élégance et de puissance, est l'option idéale pour les couples
        aspirant à une entrée spectaculaire et mémorable. 🚗💨
      </p>

      <Carousel :items="images" />

      <h2 class="font-bold text-xl md:text-2xl text-center mb-8 mt-8">L'Aston Martin Volante : Un Chef-d'Œuvre d'Élégance et de Performance</H2>

      <p class="text-base md:text-lg lg:text-xl mb-4">
        L'Aston Martin Volante n'est pas juste une voiture, c'est une véritable expression de luxe et de raffinement. Avec son design iconique,
        son intérieur artisanal et ses capacités dynamiques, la Volante est conçue pour offrir une expérience de conduite exceptionnelle,
        faisant de chaque moment un instant de pur plaisir et d'élégance. 🌟🌹
      </p>
      <p class="text-base md:text-lg lg:text-xl mb-4">
        <span class="font-bold">Confort Suprême et Finitions Luxueuses:</span> Profitez du summum du confort avec les sièges en cuir haut de gamme et les finitions précises,
        qui définissent l'intérieur de l'Aston Martin Volante. Parfaite pour une expérience relaxante et hautement luxueuse,
        elle garantit une arrivée et des déplacements empreints de prestige et de style. 🛋️🥂
      </p>
      <p class="text-base md:text-lg lg:text-xl mb-4">
        <span class="font-bold">Des Photographies Éblouissantes: </span> Mettez en scène l'élégance intemporelle de l'Aston Martin Volante dans vos photos de mariage,
        assurant des souvenirs visuels somptueux et élégants. Son allure distinguée ajoutera une touche de luxe indéniable à vos clichés. 📸💑
      </p>
      <p class="text-base md:text-lg lg:text-xl mb-4">
        <span class="font-bold">Une Expérience de Conduite Exaltante:</span> Nos chauffeurs professionnels vous offriront une arrivée fluide et élégante, vous permettant de vous détendre
        et de savourer chaque instant de votre journée spéciale, entourés par le luxe absolu de la Volante. 🚘🛣️
      </p>

      <h2 class="font-bold text-xl md:text-2xl text-center mb-8 mt-8">Service Personnalisé pour un Mariage Inoubliable</H2>

      <p class="text-base md:text-lg lg:text-xl mb-4">
        Chez LB-Prestacar, nous comprenons que votre mariage doit refléter votre histoire unique. C'est pourquoi nous offrons un service sur mesure avec l'Aston Martin Volante. Des arrangements
        floraux raffinés à une ambiance musicale qui accompagne votre voyage, notre équipe est engagée à personnaliser votre expérience selon vos désirs, rendant votre mariage véritablement exceptionnel. 🌸🎵
      </p>

      <h2 class="font-bold text-xl md:text-2xl text-center mb-8 mt-8">Réservez Votre Aston Martin Volante Dès Aujourd'hui</H2>

      <p class="text-base md:text-lg lg:text-xl mb-4">
        Pour garantir la disponibilité de l'Aston Martin Volante pour votre mariage à Valenciennes, contactez LB-Prestacar
        sans attendre. Notre équipe passionnée est prête à écouter vos souhaits et à organiser chaque détail pour que votre expérience soit en parfaite harmonie avec vos attentes. 📅💖
      </p>
      <p class="text-base md:text-lg lg:text-xl mb-4">
        Contactez-nous dès aujourd'hui au 06 52 74 34 05 ou via
        <router-link
            to="/contact"
            class="underline">notre page de contact
        </router-link>
        pour faire de cette icône de l'automobile une partie intégrante de votre grand jour. Avec LB-Prestacar,
        embrassez un mariage d'élégance et de sophistication, magnifié par la présence et le charme de l'Aston Martin Volante. 💌🚗
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
    <div class="flex flex-col md:flex-row md:justify-around items-center mt-20 space-y-10 md:space-y-0">
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
