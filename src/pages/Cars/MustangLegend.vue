<template>
  <div ref="el" class="my-20">
    <div class="my-10 mx-10 sm:my-20 md:mx-40">
      <h1 class="text-xl md:text-2xl lg:text-3xl font-semibold text-center">Faites Vibrer Votre Mariage avec la Mustang Legend Lime chez LB-Prestacar à Valenciennes</h1>
      <p class="text-base md:text-lg lg:text-xl my-8">
        Donnez à votre mariage une allure audacieuse et emblématique avec la <span class="font-bold">Mustang Legend Lime</span>, exclusivement disponible chez LB-Prestacar
        à Valenciennes. Cette incarnation de puissance et d'élégance américaine est parfaite pour les couples désirant apporter une touche
        de caractère à leur célébration nuptiale. 🐎💚
      </p>

      <Carousel :items="images" />

      <h2 class="font-bold text-xl md:text-2xl text-center my-8">La Mustang Legend Lime : Une Icône de Puissance et de Style</H2>

      <p class="text-base md:text-lg lg:text-xl mb-6">
        La Mustang Legend Lime n'est pas juste une voiture, c'est un symbole de liberté et de puissance, enveloppé
        dans une teinte verte vibrante qui ne manquera pas d'attirer tous les regards. Avec son design musclé, son
        intérieur sophistiqué et ses performances époustouflantes, la Mustang Legend Lime promet de transformer
        chaque trajet en une expérience mémorable et électrisante. 🚗💨
      </p>

      <p class="text-base md:text-lg lg:text-xl mb-6">
        <span class="font-bold">Élégance et Performance:</span> Asseyez-vous dans le luxe des sièges en cuir premium et laissez-vous emporter
        par la puissance sous le capot. La Mustang offre un confort exceptionnel tout en garantissant une arrivée
        spectaculaire à votre lieu de cérémonie ou de réception. 🛣️✨
      </p>

      <p class="text-base md:text-lg lg:text-xl mb-6">
        <span class="font-bold">Séances Photo Épiques:</span> Avec sa silhouette imposante et sa couleur unique, la Mustang Legend Lime crée
        un décor parfait pour des photos de mariage audacieuses et mémorables, capturant l'essence de votre amour
        avec autant de force et de passion. 📸❤️
      </p>

      <p class="text-base md:text-lg lg:text-xl mb-6">
        <span class="font-bold">Une Conduite à Couper le Souffle:</span> Laissez notre équipe de chauffeurs experts prendre le volant,
        vous assurant une expérience de conduite à la fois fluide et exaltante, et vous permettant de vous immerger
        complètement dans le bonheur de votre journée spéciale. 🏁👨‍✈️
      </p>

      <h2 class="font-bold text-xl md:text-2xl text-center my-8">Services Personnalisés pour un Événement Extraordinaire</H2>

      <p class="text-base md:text-lg lg:text-xl mb-6">
        Chez LB-Prestacar, chaque mariage est une occasion unique de briller. C'est pourquoi nous proposons des options
        personnalisées avec la Mustang Legend Lime. Que ce soit pour des décorations qui captent l'esprit de votre journée,
        une playlist qui accompagne votre style, ou des itinéraires spécifiques pour maximiser l'impact de votre arrivée,
        notre équipe est à votre service pour personnaliser votre expérience. 🌟🎶
      </p>

      <h2 class="font-bold text-xl md:text-2xl text-center my-8">Réservez Votre Mustang Legend Lime Aujourd'hui</H2>

      <p class="text-base md:text-lg lg:text-xl mb-6">
        Assurez-vous que la Mustang Legend Lime soit présente pour ajouter une touche de magie à votre mariage à Valenciennes
        en contactant LB-Prestacar dès que possible. Notre équipe passionnée est prête à discuter de vos préférences et à
        organiser tous les détails pour que votre journée soit absolument parfaite. 📆💑
      </p>

      <p class="text-base md:text-lg lg:text-xl mb-6">
        Contactez-nous dès aujourd'hui au 06 52 74 34 05 ou via
        <router-link
            to="/contact"
            class="underline">notre page de contact
        </router-link>
        pour faire de la Mustang Legend Lime l'étoile de votre mariage. Choisissez LB-Prestacar pour une entrée
        qui marquera les esprits et rendra votre célébration inoubliable. 💌🚘
      </p>

      <p class="text-base md:text-lg lg:text-xl mb-6">
        Capacité: 3 passagers.
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
    src: getVehiculeImage("mustang_legend/mustang_verte.jpg"),
    avif: getVehiculeImageAvif("mustang_legend/mustang_verte.avif"),
    webp: getVehiculeImageWebp("mustang_legend/mustang_verte.webp"),
  },
  {
    id: 2,
    src: getVehiculeImage("mustang_legend/mustang_verte-1.jpg"),
    avif: getVehiculeImageAvif("mustang_legend/mustang_verte-1.avif"),
    webp: getVehiculeImageWebp("mustang_legend/mustang_verte-1.webp"),
  },
  {
    id: 3,
    src: getVehiculeImage("mustang_legend/mustang_verte-2.jpg"),
    avif: getVehiculeImageAvif("mustang_legend/mustang_verte-2.avif"),
    webp: getVehiculeImageWebp("mustang_legend/mustang_verte-2.webp"),
  },
  {
    id: 4,
    src: getVehiculeImage("mustang_legend/mustang_verte-3.jpg"),
    avif: getVehiculeImageAvif("mustang_legend/mustang_verte-3.avif"),
    webp: getVehiculeImageWebp("mustang_legend/mustang_verte-3.webp"),
  },
];

onMounted(() => {
  window.scrollTo(0, el.value!.offsetTop - 20);
});
</script>
