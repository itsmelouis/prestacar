<template>
  <div ref="el" class="my-20">
    <div class="my-10 mx-10 sm:my-20 md:mx-40">
      <h1 class="text-xl md:text-2xl lg:text-3xl font-semibold text-center">Votre Mariage Sublimé par le Charme Britannique de la Mini Cooper chez LB-Prestacar à Valenciennes</h1>
      <p class="text-base md:text-lg lg:text-xl">
        <br />
        <br />
        Apportez une touche d'élégance et de caractère britannique à votre mariage avec la <span class="font-bold">Mini Cooper</span>, exclusivement proposée
        par LB-Prestacar à Valenciennes. Ce symbole iconique de style et de plaisir de conduite est parfait pour les couples qui désirent
        une expérience de mariage chic et mémorable, marquée par un design intemporel et une performance dynamique. 🚗🇬🇧
        <br />
        <br />
      </p>

      <Carousel :items="images" />

      <br />
      <br />
      <H2 class="font-bold text-xl md:text-2xl text-center">La Mini Cooper : Une Icône de Style et de Fun</H2>

      <p class="text-base md:text-lg lg:text-xl">
        <br />
        <br />
        La Mini Cooper n'est pas juste une voiture, c'est une véritable expression de joie de vivre et d'élégance. Avec son allure compacte,
        son design distinctif, et sa réactivité joyeuse, la Mini Cooper promet de rendre votre arrivée un moment remarquable et plein d'énergie,
        captivant le cœur de tous vos invités. 🌟🎉
        <br />
        <br />
        <span class="font-bold">Confort Urbain et Charme Distinctif:</span> Profitez du raffinement intérieur et du confort de conduite de la Mini Cooper,
        au style classique, offrant une expérience unique et élégante pour votre journée spéciale. 🛋️🌹
        <br />
        <br />
        <span class="font-bold">Des Photographies Pleines de Vie: </span> La Mini Cooper, avec son caractère et son design emblématique, fournit un magnifique décor
        pour vos photos de mariage, garantissant des images vibrantes qui reflètent l'esprit et la joie de votre célébration. 📸💑
        <br />
        <br />
        <span class="font-bold">Une Expérience de Conduite Exaltante:</span> Laissez-vous guider par nos chauffeurs experts pour une arrivée détendue et pleine de style,
        vous permettant de vous immerger dans le bonheur et l'excitation de votre journée. 🚘🌈
        <br />
      </p>

      <H2 class="font-bold text-xl md:text-2xl text-center">Service Personnalisé pour un Mariage Inoubliable</H2>

      <p class="text-base md:text-lg lg:text-xl">
        <br />
        <br />
        Chez LB-Prestacar, nous savons que votre mariage est une célébration unique de votre amour. C'est pourquoi nous proposons un service sur mesure avec la Mini Cooper.
        Qu'il s'agisse de décorations spéciales, d'une playlist qui accompagne votre histoire ou de tout autre détail qui rendra votre journée encore plus spéciale,
        notre équipe est dédiée à personnaliser votre expérience pour qu'elle soit véritablement exceptionnelle. 🌸🎵
        <br />
        <br />
      </p>

      <H2 class="font-bold text-xl md:text-2xl text-center">Réservez Votre Mini Cooper Dès Aujourd'hui</H2>

      <p class="text-base md:text-lg lg:text-xl">
        <br />
        <br />
        Pour garantir la présence de la Mini Cooper à votre mariage à Valenciennes, contactez LB-Prestacar
        sans attendre. Notre équipe passionnée est à votre disposition pour écouter vos souhaits et organiser chaque détail
        afin que votre expérience soit parfaitement alignée avec vos attentes. 📅💖
        <br />
        <br />
        Contactez-nous dès aujourd'hui au 06 52 74 34 05 ou via
        <router-link
            to="/contact"
            class="underline">notre page de contact
        </router-link>
        pour ajouter cette emblématique voiture britannique à votre célébration. Avec LB-Prestacar, embrassez un mariage vibrant et élégant,
        sublimé par le charme unique de la Mini Cooper. 💌🚗
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
  ["Forfait Mariage", "sur devis"],
];

const options = [
  ["Intitulé", "Prix"],
  ["Photographe", "Sur devis"],
  ["Fleurs", "Sur devis"],
];

const images = [
  {
    id: 1,
    src: getVehiculeImage("mini/mini-1.jpg"),
    avif: getVehiculeImageAvif("mini/mini-1.avif"),
    webp: getVehiculeImageWebp("mini/mini-1.jpg"),
  },
  {
    id: 2,
    src: getVehiculeImage("mini/mini-2.jpg"),
    avif: getVehiculeImageAvif("mini/mini-2.avif"),
    webp: getVehiculeImageWebp("mini/mini-2.jpg"),
  },
  {
    id: 3,
    src: getVehiculeImage("mini/mini-3.jpg"),
    avif: getVehiculeImageAvif("mini/mini-3.avif"),
    webp: getVehiculeImageWebp("mini/mini-3.jpg"),
  },
  {
    id: 4,
    src: getVehiculeImage("mini/mini-4.jpg"),
    avif: getVehiculeImageAvif("mini/mini-4.avif"),
    webp: getVehiculeImageWebp("mini/mini-4.jpg"),
  },
  {
    id: 5,
    src: getVehiculeImage("mini/mini.jpg"),
    avif: getVehiculeImageAvif("mini/mini.avif"),
    webp: getVehiculeImageWebp("mini/mini.jpg"),
  },
  {
    id: 6,
    src: getVehiculeImage("mini/mini-5.jpg"),
    avif: getVehiculeImageAvif("mini/mini-5.avif"),
    webp: getVehiculeImageWebp("mini/mini-5.jpg"),
  },
  {
    id: 7,
    src: getVehiculeImage("mini/mini-6.jpg"),
    avif: getVehiculeImageAvif("mini/mini-6.avif"),
    webp: getVehiculeImageWebp("mini/mini-6.jpg"),
  },
];
</script>
