<template>
  <div ref="el" class="my-20">
    <div class="my-10 mx-10 sm:my-20 md:mx-40">
      <h1 class="text-xl md:text-2xl lg:text-3xl font-semibold text-center">Incorporez l'Élégance Italienne à Votre Mariage avec la Maserati Ghibli chez LB-Prestacar à Valenciennes</h1>
      <p class="text-base md:text-lg lg:text-xl">
        <br />
        <br />
        Apportez une touche d'élégance et de raffinement italiens à votre mariage avec la Maserati Ghibli,
        une exclusivité de LB-Prestacar à Valenciennes. Cette œuvre d'art sur roues, synonyme de luxe et
        de performance, est idéale pour les couples souhaitant profiter leur journée spéciale avec une présence
        spectaculaire et distinguée. 🇮🇹🚗
        <br />
        <br />
      </p>

      <Carousel :items="images" />
      <br />
      <br />

      <H2 class="font-bold text-xl md:text-2xl text-center">La Maserati Ghibli : Un Chef-d'Œuvre d'Élégance et de Puissance</H2>

      <p class="text-base md:text-lg lg:text-xl">
        <br />
        <br />
        La Maserati Ghibli est plus qu'une simple voiture de luxe ; c'est une expression de l'artisanat italien,
        combinant une esthétique magnifique avec une ingénierie exceptionnelle. Avec ses lignes fluides, son
        intérieur somptueux et son moteur puissant, la Ghibli promet de faire de votre arrivée un moment d'élégance
        inégalée et mémorable. 🌟💫
        <br />
        <br />
        <span class="font-bold">Confort Absolu et Style Incomparable:</span> Profitez de sièges en cuir finement travaillés
        et d'un espace intérieur conçu pour le summum du confort et du luxe. La Maserati Ghibli offre une expérience de
        voyage qui allie parfaitement le style à la performance, assurant une entrée des plus remarquables. 🛋️✨
        <br />
        <br />
        <span class="font-bold">Des Photos de Mariage Éblouissantes:</span> Avec son allure prestigieuse et son charme italien,
        la Maserati Ghibli offre un arrière-plan idéal pour des photographies de mariage époustouflantes, garantissant
        des images qui captureront la splendeur de votre union. 📸💍
        <br />
        <br />
        <span class="font-bold">Une Conduite Douce et Puissante: </span> Nos chauffeurs experts vous offriront une expérience
        de conduite à la fois douce et dynamique, vous permettant de vous détendre et de profiter pleinement de la célébration
        de votre amour, enveloppés dans le luxe italien. 🏎️💒
        <br />
        <br />
      </p>

      <H2 class="font-bold text-xl md:text-2xl text-center">Personnalisation pour une Journée Unique</H2>

      <p class="text-base md:text-lg lg:text-xl">
        <br />
        <br />
        Chez LB-Prestacar, nous reconnaissons que chaque mariage est unique. C'est pourquoi nous proposons des services sur
        mesure avec la Maserati Ghibli. Que vous désiriez une décoration spécifique, une playlist adaptée à votre goût, ou tout
        autre détail pour rendre votre journée encore plus spéciale, notre équipe est dédiée à réaliser vos rêves les plus sophistiqués. 🎶🌹
        <br />
        <br />
      </p>

      <H2 class="font-bold text-xl md:text-2xl text-center">Réservez Votre Maserati Ghibli Dès Aujourd'hui</H2>

      <p class="text-base md:text-lg lg:text-xl">
        <br />
        <br />
        Assurez-vous que la Maserati Ghibli soit disponible pour votre mariage à Valenciennes en contactant LB-Prestacar
        dès maintenant. Notre équipe passionnée est prête à discuter de vos préférences et à orchestrer chaque aspect de
        votre expérience pour qu'elle soit absolument parfaite. 📆🕊️
        <br />
        <br />
        Contactez-nous dès aujourd'hui au 06 52 74 34 05 ou via
        <router-link
            to="/contact"
            class="underline">notre page de contact
        </router-link>
        pour ajouter cette touche d'élégance italienne à votre mariage. Avec LB-Prestacar, préparez-vous à vivre un moment
        inoubliable, marqué par le luxe et la distinction de la Maserati Ghibli. 💌🚗
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

onMounted(() => {
  window.scrollTo(0, el.value!.offsetTop - 20);
});

const grille_tarifiaire = [
  ["Temps", "Prix"],
  ["Forfait Mariage", "700€"],
];

const options = [
  ["Intitulé", "Prix"],
  ["Photographe", "Sur devis"],
  ["Fleurs", "Sur devis"],
];

const images = [
  {
    id: 1,
    src: getVehiculeImage("maserati/maserati.jpg"),
    avif: getVehiculeImageAvif("maserati/maserati.avif"),
    webp: getVehiculeImageWebp("maserati/maserati.jpg"),
  },
  {
    id: 2,
    src: getVehiculeImage("maserati/maserati-2.jpg"),
    avif: getVehiculeImageAvif("maserati/maserati-2.avif"),
    webp: getVehiculeImageWebp("maserati/maserati-2.jpg"),
  },
  {
    id: 3,
    src: getVehiculeImage("maserati/maserati-1.jpg"),
    avif: getVehiculeImageAvif("maserati/maserati-1.avif"),
    webp: getVehiculeImageWebp("maserati/maserati-1.jpg"),
  },
  {
    id: 4,
    src: getVehiculeImage("maserati/maserati-10.jpg"),
    avif: getVehiculeImageAvif("maserati/maserati-10.avif"),
    webp: getVehiculeImageWebp("maserati/maserati-10.jpg"),
  },
  {
    id: 5,
    src: getVehiculeImage("maserati/maserati-9.jpg"),
    avif: getVehiculeImageAvif("maserati/maserati-9.avif"),
    webp: getVehiculeImageWebp("maserati/maserati-9.jpg"),
  },
  {
    id: 6,
    src: getVehiculeImage("maserati/maserati-8.jpg"),
    avif: getVehiculeImageAvif("maserati/maserati-8.avif"),
    webp: getVehiculeImageWebp("maserati/maserati-8.jpg"),
  },
  {
    id: 7,
    src: getVehiculeImage("maserati/maserati-3.jpg"),
    avif: getVehiculeImageAvif("maserati/maserati-3.avif"),
    webp: getVehiculeImageWebp("maserati/maserati-3.jpg"),
  },
  {
    id: 8,
    src: getVehiculeImage("maserati/maserati-4.jpg"),
    avif: getVehiculeImageAvif("maserati/maserati-4.avif"),
    webp: getVehiculeImageWebp("maserati/maserati-4.jpg"),
  },
  {
    id: 9,
    src: getVehiculeImage("maserati/maserati-11.jpg"),
    avif: getVehiculeImageAvif("maserati/maserati-11.avif"),
    webp: getVehiculeImageWebp("maserati/maserati-11.jpg"),
  },
  {
    id: 10,
    src: getVehiculeImage("maserati/maserati-5.jpg"),
    avif: getVehiculeImageAvif("maserati/maserati-5.avif"),
    webp: getVehiculeImageWebp("maserati/maserati-5.jpg"),
  },
  {
    id: 11,
    src: getVehiculeImage("maserati/maserati-6.jpg"),
    avif: getVehiculeImageAvif("maserati/maserati-6.avif"),
    webp: getVehiculeImageWebp("maserati/maserati-6.jpg"),
  },
  {
    id: 12,
    src: getVehiculeImage("maserati/maserati-7.jpg"),
    avif: getVehiculeImageAvif("maserati/maserati-7.avif"),
    webp: getVehiculeImageWebp("maserati/maserati-7.jpg"),
  },
];
</script>
