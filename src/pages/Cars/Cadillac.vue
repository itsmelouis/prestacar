<template>
  <div ref="el" class="my-20">
    <div class="my-10 mx-10 sm:my-20 md:mx-40">
      <h1 class="text-xl md:text-2xl lg:text-3xl font-semibold text-center">Votre Mariage avec le Luxe du Cadillac Escalade chez LB-Prestacar à Valenciennes</h1>
      <p class="text-base md:text-lg lg:text-xl">
        <br />
        <br />
        Faites de votre mariage un événement spectaculaire et inoubliable en choisissant le <span class="font-bold">Cadillac Escalade</span>, disponible exclusivement
        chez LB-Prestacar à Valenciennes. Ce SUV emblématique, symbole de luxe et de puissance, est l'option parfaite pour les couples
        souhaitant ajouter une dimension de prestige et de confort exceptionnel à leur journée spéciale. 🚐✨
        <br />
        <br />
      </p>

      <H2 class="font-bold text-xl md:text-2xl text-center">Le Cadillac Escalade : Une Déclaration de Luxe et d'Espace</H2>

      <p class="text-base md:text-lg lg:text-xl">
        <br />
        <br />
        Le Cadillac Escalade n'est pas juste un véhicule, c'est une véritable expérience de luxe sur roues. Avec son design imposant,
        son intérieur spacieux et raffiné, et ses performances haut de gamme, l'Escalade promet de transformer votre arrivée en un
        moment grandiose et élégant, marquant les esprits de tous vos invités. 🌟💼
        <br />
        <br />
        <span class="font-bold">Confort Ultime et Détails Sophistiqués:</span> Profitez du summum du confort avec
        les sièges en cuir haut de gamme, l'espace généreux pour tous vos proches, et les finitions sophistiquées
        qui définissent l'intérieur du Cadillac Escalade. Parfait pour offrir une expérience relaxante et luxueuse,
        il garantit une entrée et des déplacements empreints de sérénité et de classe. 🛋️🥂
        <br />
        <br />
        <span class="font-bold">Des Photographies Impressionnantes: </span> Utilisez l'élégance et la stature du Cadillac
        Escalade comme toile de fond pour vos photos de mariage, assurant des souvenirs visuels majestueux et raffinés.
        Son allure prestigieuse ajoutera une touche de glamour indéniable à vos clichés. 📸💑
        <br />
        <br />
        <span class="font-bold">Une Expérience de Conduite Royale:</span> Nos chauffeurs professionnels vous garantiront
        une arrivée fluide et majestueuse, vous permettant de vous détendre et de profiter de chaque instant de votre
        journée spéciale, entourés par le luxe absolu de l'Escalade. 🚘🛣️
        <br />
        <br />
      </p>

      <H2 class="font-bold text-xl md:text-2xl text-center">Service Personnalisé pour une Célébration Mémorable</H2>

      <p class="text-base md:text-lg lg:text-xl">
        <br />
        <br />
        Chez LB-Prestacar, nous comprenons que votre mariage est l'expression de votre individualité.
        C'est pourquoi nous offrons un service sur mesure avec le Cadillac Escalade. Des arrangements
        floraux élégants à une ambiance musicale de votre choix pour le trajet, notre équipe est dédiée
        à personnaliser votre expérience selon vos désirs, rendant votre mariage véritablement unique. 🌹🎶
        <br />
        <br />
      </p>

      <H2 class="font-bold text-xl md:text-2xl text-center">Réservez Votre Cadillac Escalade Dès Aujourd'hui</H2>

      <p class="text-base md:text-lg lg:text-xl">
        <br />
        <br />
        Pour garantir la présence du Cadillac Escalade à votre mariage à Valenciennes, contactez LB-Prestacar
        sans attendre. Notre équipe passionnée est prête à écouter vos souhaits et à organiser chaque détail
        pour que votre expérience soit parfaitement en accord avec vos attentes. 📅💖
        <br />
        <br />
        Contactez-nous dès aujourd'hui au 06 52 74 34 05 ou via
        <router-link
            to="/contact"
            class="underline">notre page de contact
        </router-link>
        pour intégrer ce symbole de luxe et de confort à votre célébration. Avec LB-Prestacar,
        vivez un mariage d'exception, sublimé par la présence imposante et élégante du Cadillac Escalade. 💌🚐
        <br />
        <br />
        Capacité: 6 passagers. (4 recommandés)
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
  ["Diffusion musique ou vidéo", "Inclus"],
  ["Photographe", "Sur devis"],
  ["Fleurs", "Sur devis"],
];

const images = [
  {
    id: 1,
    src: getVehiculeImage("cadillac_escalade/cadillac1.jpg"),
    avif: getVehiculeImageAvif("cadillac_escalade/cadillac1.avif"),
    webp: getVehiculeImageWebp("cadillac_escalade/cadillac1.webp"),
  },
  {
    id: 2,
    src: getVehiculeImage("cadillac_escalade/cadillac2.jpg"),
    avif: getVehiculeImageAvif("cadillac_escalade/cadillac2.avif"),
    webp: getVehiculeImageWebp("cadillac_escalade/cadillac2.webp"),
  },
  {
    id: 3,
    src: getVehiculeImage("cadillac_escalade/cadillac3.jpg"),
    avif: getVehiculeImageAvif("cadillac_escalade/cadillac3.avif"),
    webp: getVehiculeImageWebp("cadillac_escalade/cadillac3.webp"),
  },
  {
    id: 4,
    src: getVehiculeImage("cadillac_escalade/cadillac4.jpg"),
    avif: getVehiculeImageAvif("cadillac_escalade/cadillac4.avif"),
    webp: getVehiculeImageWebp("cadillac_escalade/cadillac4.webp"),
  },
  {
    id: 5,
    src: getVehiculeImage("cadillac_escalade/cadillac5.jpg"),
    avif: getVehiculeImageAvif("cadillac_escalade/cadillac5.avif"),
    webp: getVehiculeImageWebp("cadillac_escalade/cadillac5.webp"),
  },
  {
    id: 6,
    src: getVehiculeImage("cadillac_escalade/cadillac6.jpg"),
    avif: getVehiculeImageAvif("cadillac_escalade/cadillac6.avif"),
    webp: getVehiculeImageWebp("cadillac_escalade/cadillac6.webp"),
  },
  {
    id: 7,
    src: getVehiculeImage("cadillac_escalade/cadillac7.jpg"),
    avif: getVehiculeImageAvif("cadillac_escalade/cadillac7.avif"),
    webp: getVehiculeImageWebp("cadillac_escalade/cadillac7.webp"),
  },
  {
    id: 8,
    src: getVehiculeImage("cadillac_escalade/cadillac8.jpg"),
    avif: getVehiculeImageAvif("cadillac_escalade/cadillac8.avif"),
    webp: getVehiculeImageWebp("cadillac_escalade/cadillac8.webp"),
  },
  {
    id: 9,
    src: getVehiculeImage("cadillac_escalade/cadillac9.jpg"),
    avif: getVehiculeImageAvif("cadillac_escalade/cadillac9.avif"),
    webp: getVehiculeImageWebp("cadillac_escalade/cadillac9.webp"),
  },
  {
    id: 10,
    src: getVehiculeImage("cadillac_escalade/cadillac10.jpg"),
    avif: getVehiculeImageAvif("cadillac_escalade/cadillac10.avif"),
    webp: getVehiculeImageWebp("cadillac_escalade/cadillac10.webp"),
  },
  {
    id: 11,
    src: getVehiculeImage("cadillac_escalade/cadillac11.jpg"),
    avif: getVehiculeImageAvif("cadillac_escalade/cadillac11.avif"),
    webp: getVehiculeImageWebp("cadillac_escalade/cadillac11.webp"),
  },
  {
    id: 12,
    src: getVehiculeImage("cadillac_escalade/cadillac13.jpg"),
    avif: getVehiculeImageAvif("cadillac_escalade/cadillac13.avif"),
    webp: getVehiculeImageWebp("cadillac_escalade/cadillac13.webp"),
  },
];

onMounted(() => {
  window.scrollTo(0, el.value!.offsetTop - 20);
});
</script>
