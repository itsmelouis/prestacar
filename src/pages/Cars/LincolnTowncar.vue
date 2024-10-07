<template>
  <div ref="el" class="my-20">
    <div class="my-10 mx-10 sm:my-20 md:mx-40">

      <h1 class="text-xl md:text-2xl lg:text-3xl font-semibold text-center mb-8">Vivez un Moment d'Exception avec la Limousine Lincoln Town Car chez LB-Prestacar à Valenciennes</h1>

      <p class="text-base md:text-lg lg:text-xl mb-8">
        Offrez-vous un mariage hors du commun avec la <span class="font-bold">Limousine Lincoln TownCar</span>, un véhicule synonyme de luxe et d'élégance,
        disponible chez LB-Prestacar à Valenciennes. Cette limousine emblématique est le choix par excellence
        pour les couples désirant célébrer leur union avec grandeur et sophistication. 🚗💒
      </p>

      <Carousel :items="images" />

      <h2 class="font-bold text-xl md:text-2xl text-center my-8">La Limousine Lincoln TownCar : L'Élégance à l'État Pur</H2>

      <p class="text-base md:text-lg lg:text-xl mb-6">
        La Limousine Lincoln TownCar n'est pas juste une voiture ; c'est une expérience de luxe inégalée.
        Avec son espace intérieur vaste et raffiné, son allure imposante et son confort exceptionnel,
        la Lincoln Town Car est conçue pour transformer chaque déplacement en un moment privilégié et inoubliable. 🌟🥂
      </p>

      <p class="text-base md:text-lg lg:text-xl mb-6">
        <span class="font-bold">Confort Royal et Intimité: </span> Profitez d'un espace luxueux, équipé de sièges en cuir,
        d'un bar, d'un système audiovisuel haut de gamme, et bien plus encore, offrant un cadre parfait pour se détendre
        et célébrer en toute intimité tout en se rendant à la cérémonie ou à la réception. 🛋️🍾
      </p>

      <p class="text-base md:text-lg lg:text-xl mb-6">
        <span class="font-bold">Photographies Magnifiques:</span> La stature élégante et le design classique de la
        Limousine Lincoln Town Car fournissent un décor majestueux pour vos photos de mariage, assurant des souvenirs
        visuels dignes des plus beaux contes de fées. 📸💖
      </p>

      <p class="text-base md:text-lg lg:text-xl mb-6">
        <span class="font-bold">Une Expérience de Conduite Distinguée: </span> Confiez votre parcours à l'un de nos
        chauffeurs professionnels, qui vous garantira une arrivée fluide et élégante, vous permettant de vous immerger
        totalement dans la magie de votre journée spéciale. 🎩🚪
      </p>

      <h2 class="font-bold text-xl md:text-2xl text-center my-8">Service Sur Mesure pour une Célébration Mémorable</H2>

      <p class="text-base md:text-lg lg:text-xl mb-6">
        Chez LB-Prestacar, nous comprenons l'importance de personnaliser votre expérience de mariage. C'est pourquoi
        nous offrons des options sur mesure avec la Limousine Lincoln TownCar. Des boissons de votre choix à bord,
        à la décoration intérieure personnalisée et bien d'autres attentions, notre équipe s'engage à faire de votre
        moment un événement unique et à votre image. 🌸🎶
      </p>

      <h2 class="font-bold text-xl md:text-2xl text-center my-8">Réservez Votre Limousine Lincoln Town Car Dès Maintenant</H2>

      <p class="text-base md:text-lg lg:text-xl mb-6">
        Pour garantir la disponibilité de la Limousine Lincoln Town Car pour votre grand jour,
        contactez LB-Prestacar sans tarder. Notre équipe dévouée est prête à discuter de vos besoins spécifiques
        et à tout mettre en œuvre pour que votre expérience soit parfaite, du début à la fin. 📅💑
      </p>

      <p class="text-base md:text-lg lg:text-xl mb-6">
        Contactez-nous dès aujourd'hui au 06 52 74 34 05 ou via
        <router-link
            to="/contact"
            class="underline">notre page de contact
        </router-link>
        pour réserver cette limousine exceptionnelle. Avec LB-Prestacar, préparez-vous à une entrée spectaculaire
        qui marquera les esprits et rendra votre mariage véritablement inoubliable. 💌🚘
      </p>

      <p class="text-base md:text-lg lg:text-xl mb-6">
        Capacité: 8 passagers.
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
  ["Aller Simple", "Sur devis"],
  ["Aller Retour", "Sur devis"],
  ["3h", "350€"],
  ["4h", "450€"],
  ["Forfait Mariage", "500€"],
];

const options = [
  ["Intitulé", "Prix"],
  ["Striptiseur/seuse", "Sur devis"],
  ["Magicien", "Sur devis"],
  ["Bouteille de champagne", "30€"],
  ["Gâteau", "Sur devis"],
  ["Photographe", "Sur devis"],
  ["Fleurs", "Sur devis"],
];

const images = [
  {
    id: 1,
    src: getVehiculeImage("lincoln_towncar/limo-6.jpg"),
    avif: getVehiculeImageAvif("lincoln_towncar/limo-8.avif"),
    webp: getVehiculeImageWebp("lincoln_towncar/limo.webp"),
  },
  {
    id: 2,
    src: getVehiculeImage("lincoln_towncar/limo-5.jpg"),
    avif: getVehiculeImageAvif("lincoln_towncar/limo-7.avif"),
    webp: getVehiculeImageWebp("lincoln_towncar/limo.webp"),
  },
  {
    id: 3,
    src: getVehiculeImage("lincoln_towncar/limo-5.jpg"),
    avif: getVehiculeImageAvif("lincoln_towncar/limo-5.avif"),
    webp: getVehiculeImageWebp("lincoln_towncar/limo.webp"),
  },
  {
    id: 4,
    src: getVehiculeImage("lincoln_towncar/limo-7.jpg"),
    avif: getVehiculeImageAvif("lincoln_towncar/limo-6.avif"),
    webp: getVehiculeImageWebp("lincoln_towncar/limo-6.webp"),
  },
  {
    id: 5,
    src: getVehiculeImage("prestations/limo-mariage.jpg"),
    avif: getVehiculeImageAvif("prestations/limo-mariage.avif"),
    webp: getVehiculeImageWebp("prestations/limo-mariage.webp"),
  },
  {
    id: 6,
    src: getVehiculeImage("lincoln_towncar/limo-8.jpg"),
    avif: getVehiculeImageAvif("lincoln_towncar/limo-9.avif"),
    webp: getVehiculeImageWebp("lincoln_towncar/limo-9.webp"),
  },
  {
    id: 7,
    src: getVehiculeImage("lincoln_towncar/limo-2.jpg"),
    avif: getVehiculeImageAvif("lincoln_towncar/limo-1.avif"),
    webp: getVehiculeImageWebp("lincoln_towncar/limo-1.webp"),
  },
  {
    id: 8,
    src: getVehiculeImage("lincoln_towncar/limo-11.jpg"),
    avif: getVehiculeImageAvif("lincoln_towncar/limo-10.avif"),
    webp: getVehiculeImageWebp("lincoln_towncar/limo-10.webp"),
  },
];
</script>
