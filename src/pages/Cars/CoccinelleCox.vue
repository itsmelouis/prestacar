<template>
  <div ref="el" class="my-20">
    <div class="my-10 mx-10 sm:my-20 md:mx-40">
      <h1 class="text-xl md:text-2xl lg:text-3xl font-semibold text-center">Incorporez l'Iconique Volkswagen Coccinelle à Votre Mariage avec LB-Prestacar à Valenciennes</h1>
      <p class="text-base md:text-lg lg:text-xl">
        <br />
        <br />
        Célébrez le plus beau jour de votre vie avec une touche d'élégance intemporelle et de charme en choisissant la Volkswagen
        Coccinelle, disponible chez LB-Prestacar à Valenciennes. Cette voiture emblématique, synonyme de simplicité et
        de joie, est l'option idéale pour les couples désirant apporter une note de nostalgie et de distinction à leur union. 🚗💕
        <br />
        <br />
      </p>

      <H2 class="font-bold text-xl md:text-2xl text-center">La Volkswagen Coccinelle : Un Symbole d'Élégance Simple et de Bonheur</H2>

      <p class="text-base md:text-lg lg:text-xl">
        <br />
        <br />
        La <span class="font-bold">Volkswagen Coccinelle</span> n'est pas seulement un véhicule, c'est une véritable icône culturelle qui évoque la joie de vivre et
        l'authenticité. Avec ses courbes douces, son design charmant et son intérieur cosy, la Coccinelle promet d'ajouter une dimension
        de tendresse et d'originalité à votre mariage, en faisant de chaque moment un souvenir inoubliable. 🌟🌹
        <br />
        <br />
        <span class="font-bold">Confort Classique et Style Vintage:</span> Asseyez-vous dans le confort classique de la Coccinelle,
        où chaque détail respire la convivialité et le style vintage. Parfaite pour les couples à la recherche d'une expérience authentique,
        elle offre un cadre idéal pour arriver à votre cérémonie ou pour une escapade romantique. 🛋️🕊️
        <br />
        <br />
        <span class="font-bold">Des Photos de Mariage Pleines de Charme:</span> Profitez de l'allure adorable et intemporelle
        de la Volkswagen Coccinelle pour créer des souvenirs photographiques magnifiques et empreints de personnalité,
        qui captureront l'essence joyeuse et romantique de votre journée spéciale. 📸❤️
        <br />
        <br />
        <span class="font-bold">Un Voyage Mémorable vers le Bonheur:</span> Confiez votre parcours à nos chauffeurs professionnels
        et attentionnés, qui vous assureront une arrivée et des déplacements tout en douceur et en élégance, permettant aux mariés
        de se concentrer sur leur bonheur et leur amour, entourés de l'aura charmante de la Coccinelle. 🚘💒
        <br />
        <br />
      </p>

      <H2 class="font-bold text-xl md:text-2xl text-center">Un Service Personnalisé pour une Célébration Unique</H2>

      <p class="text-base md:text-lg lg:text-xl">
        <br />
        <br />
        Chez LB-Prestacar, nous reconnaissons l'importance de personnaliser chaque aspect de votre mariage.
        C'est pourquoi nous offrons des services sur mesure avec la Volkswagen Coccinelle. Que ce soit pour
        des décorations spéciales, ou tout autre détail qui rendra votre journée encore plus spéciale,
        notre équipe est là pour réaliser vos rêves. 🎶🌼
        <br />
        <br />
      </p>

      <H2 class="font-bold text-xl md:text-2xl text-center">Réservez Votre Volkswagen Coccinelle Dès Aujourd'hui</H2>

      <p class="text-base md:text-lg lg:text-xl">
        <br />
        <br />
        Pour assurer la présence de la Volkswagen Coccinelle à votre mariage à Valenciennes, n'hésitez pas
        à contacter LB-Prestacar dès maintenant. Notre équipe passionnée est prête à écouter vos souhaits et
        à organiser chaque détail pour que votre expérience soit absolument parfaite. 📅💖
        <br />
        <br />
        Contactez-nous dès aujourd'hui au 06 52 74 34 05 ou via
        <router-link
            to="/contact"
            class="underline">notre page de contact
        </router-link>
        pour ajouter cette icône de bonheur et de style à votre mariage. Avec LB-Prestacar, profitez d'une ambiance joyeuse et élégante, sublimée
        par le charme unique de la Volkswagen Coccinelle. 💌🚗
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
    src: getVehiculeImage("coccinel_cox/cox1.jpg"),
    avif: getVehiculeImageAvif("coccinel_cox/cox1.avif"),
    webp: getVehiculeImageWebp("coccinel_cox/cox1.webp"),
  },
  {
    id: 2,
    src: getVehiculeImage("coccinel_cox/cox2.jpg"),
    avif: getVehiculeImageAvif("coccinel_cox/cox2.avif"),
    webp: getVehiculeImageWebp("coccinel_cox/cox2.webp"),
  },
  {
    id: 3,
    src: getVehiculeImage("coccinel_cox/cox3.jpg"),
    avif: getVehiculeImageAvif("coccinel_cox/cox3.avif"),
    webp: getVehiculeImageWebp("coccinel_cox/cox3.webp"),
  },
  {
    id: 4,
    src: getVehiculeImage("coccinel_cox/cox4.jpg"),
    avif: getVehiculeImageAvif("coccinel_cox/cox4.avif"),
    webp: getVehiculeImageWebp("coccinel_cox/cox4.webp"),
  },
  {
    id: 5,
    src: getVehiculeImage("coccinel_cox/cox5.jpg"),
    avif: getVehiculeImageAvif("coccinel_cox/cox5.avif"),
    webp: getVehiculeImageWebp("coccinel_cox/cox5.webp"),
  },
  {
    id: 6,
    src: getVehiculeImage("coccinel_cox/cox6.jpg"),
    avif: getVehiculeImageAvif("coccinel_cox/cox6.avif"),
    webp: getVehiculeImageWebp("coccinel_cox/cox6.webp"),
  },
  {
    id: 7,
    src: getVehiculeImage("coccinel_cox/cox7.jpg"),
    avif: getVehiculeImageAvif("coccinel_cox/cox7.avif"),
    webp: getVehiculeImageWebp("coccinel_cox/cox7.webp"),
  },
  {
    id: 8,
    src: getVehiculeImage("coccinel_cox/cox8.jpg"),
    avif: getVehiculeImageAvif("coccinel_cox/cox8.avif"),
    webp: getVehiculeImageWebp("coccinel_cox/cox8.webp"),
  },
  {
    id: 9,
    src: getVehiculeImage("coccinel_cox/cox9.jpg"),
    avif: getVehiculeImageAvif("coccinel_cox/cox9.avif"),
    webp: getVehiculeImageWebp("coccinel_cox/cox9.webp"),
  },
  {
    id: 10,
    src: getVehiculeImage("coccinel_cox/cox10.jpg"),
    avif: getVehiculeImageAvif("coccinel_cox/cox10.avif"),
    webp: getVehiculeImageWebp("coccinel_cox/cox10.webp"),
  },
  {
    id: 11,
    src: getVehiculeImage("coccinel_cox/cox11.jpg"),
    avif: getVehiculeImageAvif("coccinel_cox/cox11.avif"),
    webp: getVehiculeImageWebp("coccinel_cox/cox11.webp"),
  },
  {
    id: 12,
    src: getVehiculeImage("coccinel_cox/cox12.jpg"),
    avif: getVehiculeImageAvif("coccinel_cox/cox12.avif"),
    webp: getVehiculeImageWebp("coccinel_cox/cox12.webp"),
  },
  {
    id: 13,
    src: getVehiculeImage("coccinel_cox/cox13.jpg"),
    avif: getVehiculeImageAvif("coccinel_cox/cox13.avif"),
    webp: getVehiculeImageWebp("coccinel_cox/cox13.webp"),
  },
  {
    id: 14,
    src: getVehiculeImage("coccinel_cox/cox14.jpg"),
    avif: getVehiculeImageAvif("coccinel_cox/cox14.avif"),
    webp: getVehiculeImageWebp("coccinel_cox/cox14.webp"),
  },
  {
    id: 15,
    src: getVehiculeImage("coccinel_cox/cox15.jpg"),
    avif: getVehiculeImageAvif("coccinel_cox/cox15.avif"),
    webp: getVehiculeImageWebp("coccinel_cox/cox15.webp"),
  },
  {
    id: 16,
    src: getVehiculeImage("coccinel_cox/cox16.jpg"),
    avif: getVehiculeImageAvif("coccinel_cox/cox16.avif"),
    webp: getVehiculeImageWebp("coccinel_cox/cox16.webp"),
  },
  {
    id: 17,
    src: getVehiculeImage("coccinel_cox/cox17.jpg"),
    avif: getVehiculeImageAvif("coccinel_cox/cox17.avif"),
    webp: getVehiculeImageWebp("coccinel_cox/cox17.webp"),
  },
];

onMounted(() => {
  window.scrollTo(0, el.value!.offsetTop - 20);
});
</script>
