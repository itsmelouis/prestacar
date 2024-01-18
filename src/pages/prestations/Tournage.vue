<template>
  <div ref="el" class="my-20">
    <div class="my-10 mx-10 sm:my-20 md:mx-40">
      <p class="text-base md:text-lg lg:text-xl">
        Bienvenue chez LB Prestacar, l'adresse incontournable pour vos besoins de
        location de véhicules de luxe avec chauffeur ou sous surveillance d’un chauffeur.
        Notre engagement est de vous offrir une expérience de location exceptionnelle, en
        mettant à votre disposition une flotte de véhicules prestigieux associée à un service
        de chauffeur professionnel et discret.
        <br />
        <br />
        Que vous soyez impliqué dans l'industrie cinématographique, télévisuelle ou publicitaire,
        nous comprenons l'importance cruciale de disposer des véhicules appropriés pour assurer
        le bon déroulement de vos projets. Chez LB Prestacar, nous avons soigneusement organisé
        une catégorie dédiée aux tournages, offrant une sélection variée de voitures de luxe
        adaptées à chaque scénario.
        <br />
        <br />
        Notre flotte comprend des véhicules emblématiques et élégants, allant des berlines de
        luxe aux SUV spacieux, garantissant non seulement le confort de vos équipes, mais
        également une présence visuelle remarquable sur le plateau. Chaque voiture est méticuleusement
        entretenue, assurant ainsi une performance optimale et une esthétique irréprochable pour
        répondre aux exigences spécifiques de l'industrie du cinéma.
        <br />
        <br />
        Chez LB Prestacar, nous comprenons que la flexibilité est essentielle dans le domaine du
        tournage. C'est pourquoi nous offrons des solutions sur mesure, que ce soit pour des
        déplacements rapides entre les lieux de tournage, des séquences nécessitant des véhicules
        particuliers ou des besoins spécifiques en termes de logistique. Notre équipe dévouée est
        prête à collaborer étroitement avec vous pour anticiper vos besoins et assurer une
        expérience sans faille.
        <br />
        <br />
        LB Prestacar se positionne comme votre partenaire privilégié, offrant une gamme de services
        exceptionnels conçus pour répondre aux exigences spécifiques de l'industrie du divertissement.
        Faites de vos tournages une expérience de luxe avec LB Prestacar, où le style et la performance
        se rencontrent sur le plateau.
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
];

const images = [
  {
    id: 1,
    src: getVehiculeImage("lincoln_towncar/limo.jpg"),
    avif: getVehiculeImageAvif("lincoln_towncar/limo.avif"),
    webp: getVehiculeImageWebp("lincoln_towncar/limo.webp"),
  },
  {
    id: 2,
    src: getVehiculeImage("lincoln_towncar/limo-11.jpg"),
    avif: getVehiculeImageAvif("lincoln_towncar/limo-10.avif"),
    webp: getVehiculeImageWebp("lincoln_towncar/limo-10.webp"),
  },
  {
    id: 3,
    src: getVehiculeImage("mustang_blanche/mustang_blanche-5.jpg"),
    avif: getVehiculeImageAvif("mustang_blanche/mustang_blanche-5.avif"),
    webp: getVehiculeImageWebp("mustang_gt/mustang-4.webp"),
  },
  {
    id: 4,
    src: getVehiculeImage("mustang_blanche/mustang_blanche-2.jpg"),
    avif: getVehiculeImageAvif("mustang_blanche/mustang_blanche-2.avif"),
    webp: getVehiculeImageWebp("mustang_gt/mustang-4.webp"),
  },
  {
    id: 5,
    src: getVehiculeImage("cadillac_escalade/cadillac6.jpg"),
    avif: getVehiculeImageAvif("cadillac_escalade/cadillac6.avif"),
    webp: getVehiculeImageWebp("cadillac_escalade/cadillac6.webp"),
  },
  {
    id: 6,
    src: getVehiculeImage("cadillac_escalade/cadillac-2.jpg"),
    avif: getVehiculeImageAvif("cadillac_escalade/cadillac-1.avif"),
    webp: getVehiculeImageWebp("cadillac_escalade/cadillac7.webp"),
  },
  {
    id: 7,
    src: getVehiculeImage("cadillac_escalade/cadillac7.jpg"),
    avif: getVehiculeImageAvif("cadillac_escalade/cadillac7.avif"),
    webp: getVehiculeImageWebp("cadillac_escalade/cadillac7.webp"),
  },
];

onMounted(() => {
  window.scrollTo(0, el.value!.offsetTop - 20);
});
</script>
