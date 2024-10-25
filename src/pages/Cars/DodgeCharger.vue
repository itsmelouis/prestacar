<template>
  <div ref="el" class="my-20">
    <div class="my-10 mx-10 sm:my-20 md:mx-40">

      <h1 class="text-xl md:text-2xl lg:text-3xl font-semibold text-center mb-8">Apportez une Touche d'Adrénaline à Votre Mariage avec la Dodge Charger chez LB-Prestacar à Valenciennes</h1>

      <p class="text-base md:text-lg lg:text-xl mb-6">
        Faites de votre mariage un événement mémorable et plein de caractère en choisissant la <span class="font-bold">Dodge Charger</span>, disponible chez LB-Prestacar
        à Valenciennes. Cette icône de la puissance américaine est le choix idéal pour les couples désirant ajouter une dimension de force et d'audace
        à leur célébration nuptiale. 🚗💥
      </p>

      <Carousel :items="images" />

      <h2 class="font-bold text-xl md:text-2xl text-center mt-8 mb-8">La Dodge Charger : Un Symbole de Puissance et de Prestige</H2>

      <p class="text-base md:text-lg lg:text-xl mb-6">
        La Dodge Charger n'est pas simplement une voiture ; c'est une légende vivante qui incarne l'esprit
        de performance et d'aventure. Avec son design musclé, son grondement profond et son intérieur luxueux,
        la Charger promet de transformer votre arrivée en un moment d'exception et d'excitation. 🏁🔥
      </p>

      <p class="text-base md:text-lg lg:text-xl mb-6">
        <span class="font-bold">Confort Suprême et Style Imposant:</span> Profitez de l'intérieur spacieux
        et raffiné de la Charger, conçu pour offrir un confort de premier ordre tout en faisant tourner les
        têtes. La Dodge Charger est l'assurance d'une entrée spectaculaire et élégante, qui reste fidèle à
        votre esprit audacieux. 🛋️✨
      </p>

      <p class="text-base md:text-lg lg:text-xl mb-6">
        <span class="font-bold">Photographies Dynamiques:</span> Utilisez l'allure imposante et le style
        emblématique de la Dodge Charger comme toile de fond pour vos photos de mariage, garantissant des
        souvenirs visuels puissants et captivants, à l'image de votre passion. 📸❤️
      </p>

      <p class="text-base md:text-lg lg:text-xl mb-6">
        <span class="font-bold">Une Expérience de Conduite Exaltante:</span> Nos chauffeurs expérimentés et passionnés vous offriront
        une conduite fluide et palpitante, vous permettant de profiter pleinement de l'instant présent et de la célébration de votre
        amour, avec une pointe d'adrénaline. 🚘💨
      </p>

      <h2 class="font-bold text-xl md:text-2xl text-center mt-8 mb-8">Services Personnalisés pour une Célébration Inoubliable</H2>

      <p class="text-base md:text-lg lg:text-xl mb-6">
        Chez LB-Prestacar, nous comprenons que votre mariage est une expression de votre amour unique.
        C'est pourquoi nous offrons un service sur mesure avec la Dodge Charger. Que ce soit pour des décorations
        qui reflètent votre style, une sélection musicale qui accompagne votre voyage, ou des demandes spéciales
        pour rendre votre journée encore plus extraordinaire, notre équipe est dédiée à réaliser vos souhaits les plus ambitieux. 🌹🎶
      </p>

      <h2 class="font-bold text-xl md:text-2xl text-center mt-8 mb-8">Réservez Votre Dodge Charger Dès Maintenant</H2>

      <p class="text-base md:text-lg lg:text-xl mb-6">
        Assurez-vous que la Dodge Charger soit présente pour marquer votre mariage en contactant LB-Prestacar
        dès aujourd'hui. Notre équipe dévouée est prête à discuter de vos besoins et à organiser chaque détail pour que votre
        expérience soit absolument parfaite. 📅💒
      </p>

      <p class="text-base md:text-lg lg:text-xl mb-6">
        Contactez-nous dès aujourd'hui au 06 52 74 34 05 ou via
        <router-link
            to="/contact"
            class="underline">notre page de contact
        </router-link>
        pour intégrer cette icône de puissance et d'élégance à votre mariage. Avec LB-Prestacar, vivez un moment exceptionnel
        qui restera gravé dans les mémoires, sublimé par la présence de la Dodge Charger. 💌🚗
      </p>

      <p class="text-base md:text-lg lg:text-xl mb-6">
        Capacité: 3 passagers (2 recommandés).
      </p>

      <p class="text-base md:text-lg lg:text-xl mb-6">
        Si votre souhait ne se trouve pas dans la grille tarifaire, n'hésitez
        pas à nous contacter pour obtenir rapidement un devis. Nous saurons nous
        adapter aisément.
      </p>

      <p class="text-base md:text-lg lg:text-xl mb-6">
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
    src: getVehiculeImage("dodge_charger/charger1.jpg"),
    avif: getVehiculeImageAvif("dodge_charger/charger1.avif"),
    webp: getVehiculeImageWebp("dodge_charger/charger1.webp"),
  },
  {
    id: 2,
    src: getVehiculeImage("dodge_charger/charger2.jpg"),
    avif: getVehiculeImageAvif("dodge_charger/charger2.avif"),
    webp: getVehiculeImageWebp("dodge_charger/charger2.webp"),
  },
  {
    id: 3,
    src: getVehiculeImage("dodge_charger/charger3.jpg"),
    avif: getVehiculeImageAvif("dodge_charger/charger3.avif"),
    webp: getVehiculeImageWebp("dodge_charger/charger3.webp"),
  },
  {
    id: 4,
    src: getVehiculeImage("dodge_charger/charger4.jpg"),
    avif: getVehiculeImageAvif("dodge_charger/charger4.avif"),
    webp: getVehiculeImageWebp("dodge_charger/charger4.webp"),
  },
  {
    id: 5,
    src: getVehiculeImage("dodge_charger/charger5.jpg"),
    avif: getVehiculeImageAvif("dodge_charger/charger5.avif"),
    webp: getVehiculeImageWebp("dodge_charger/charger5.webp"),
  },
  {
    id: 6,
    src: getVehiculeImage("dodge_charger/charger6.jpg"),
    avif: getVehiculeImageAvif("dodge_charger/charger6.avif"),
    webp: getVehiculeImageWebp("dodge_charger/charger6.webp"),
  },
  {
    id: 7,
    src: getVehiculeImage("dodge_charger/charger7.jpg"),
    avif: getVehiculeImageAvif("dodge_charger/charger7.avif"),
    webp: getVehiculeImageWebp("dodge_charger/charger7.webp"),
  },
  {
    id: 8,
    src: getVehiculeImage("dodge_charger/charger8.jpg"),
    avif: getVehiculeImageAvif("dodge_charger/charger8.avif"),
    webp: getVehiculeImageWebp("dodge_charger/charger8.webp"),
  },
];

onMounted(() => {
  window.scrollTo(0, el.value!.offsetTop - 20);
});
</script>
