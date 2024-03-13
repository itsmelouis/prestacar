<template>
  <div ref="el" class="my-20">
    <div class="my-10 mx-10 sm:my-20 md:mx-40">
      <h1 class="text-xl md:text-2xl lg:text-3xl font-semibold text-center"> Louez la Majestueuse Rolls-Royce Phantom à Valenciennes pour Votre Mariage</h1>
      <p class="text-base md:text-lg lg:text-xl my-8">
        Rendez votre mariage véritablement enchanteur et mémorable avec l'apogée du luxe et de l'élégance : notre <span class="font-bold">Rolls-Royce Phantom</span>,
        disponible exclusivement chez LB-Prestacar, à Valenciennes. Ce joyau de notre collection de véhicules de luxe est le
        choix idéal pour les couples désireux d'ajouter une dimension de majesté et de sophistication à leur grand jour. 🌟💍
      </p>

      <Carousel :items="images" />

      <H2 class="font-bold text-xl md:text-2xl text-center my-8">La Rolls-Royce Phantom : Un Icône d'Excellence et de Grandeur</H2>

      <p class="text-base md:text-lg lg:text-xl mb-6">
        La Rolls-Royce Phantom est plus qu'une automobile ; elle représente un héritage d'excellence et de grandeur.
        Avec sa présence imposante, son intérieur opulent et son design emblématique, la Phantom promet de faire de
        votre arrivée un instant spectaculaire et inoubliable. 🚗✨
      </p>

      <p class="text-base md:text-lg lg:text-xl mb-6">
        <span class="font-bold">Confort Royal:</span> À bord de cette merveille de l'ingénierie automobile, vous serez enveloppés dans le summum du confort
        et du luxe. Les sièges en cuir fin et l'espace intérieur généreux offrent un sanctuaire parfait pour se détendre et
        profiter pleinement de chaque moment de votre parcours vers la cérémonie ou la réception. 🛋️❤️
      </p>

      <p class="text-base md:text-lg lg:text-xl mb-6">
        <span class="font-bold">Photographies Sublimes:</span> La Rolls-Royce Phantom crée un décor somptueux pour vos photos de mariage,
        assurant des clichés aussi grandioses et élégants que votre union. 📸💑
      </p>

      <p class="text-base md:text-lg lg:text-xl mb-6">
        Une Expérience de Conduite Divine: Confiez votre transport à nos chauffeurs professionnels et chevronnés, qui garantiront
        un voyage tout en douceur et en élégance, vous laissant libre de savourer la célébration de votre amour. 👨‍✈️🌹
      </p>

      <H2 class="font-bold text-xl md:text-2xl text-center my-8">Un Service Sur Mesure pour Votre Journée Extraordinaire</H2>

      <p class="text-base md:text-lg lg:text-xl mb-6">
        Chez LB-Prestacar, nous savons que votre mariage est un événement unique. C'est pourquoi nous proposons des services sur
        mesure pour compléter votre expérience de location de la Rolls-Royce Phantom. Des décorations florales personnalisées à
        une playlist sur mesure pour votre trajet, ou toute autre demande spéciale qui rendra votre journée encore plus exceptionnelle,
        notre équipe est à votre disposition pour réaliser vos souhaits les plus détaillés. 🎵🌸
      </p>

      <H2 class="font-bold text-xl md:text-2xl text-center my-8">Réservez Votre Rolls-Royce Phantom Dès Aujourd'hui</H2>

      <p class="text-base md:text-lg lg:text-xl mb-6">
        Pour assurer la disponibilité de la Rolls-Royce Phantom pour votre mariage à Valenciennes, nous vous encourageons à nous
        contacter dès que possible. Notre équipe dévouée est prête à discuter de vos préférences et à orchestrer chaque détail afin
        que votre expérience soit absolument parfaite. 🗓️💖
      </p>

      <p class="text-base md:text-lg lg:text-xl mb-6">
        Contactez-nous aujourd'hui au 06 52 74 34 05 ou via
        <router-link
          to="/contact"
          class="underline">notre page de contact
        </router-link>
        pour réserver cette icône de luxe et
        d'élégance pour votre mariage. Avec LB-Prestacar, franchissez le seuil vers un instant magique, à la mesure de vos
        rêves les plus fastueux. 💌✨
      </p>

      <p class="text-base md:text-lg lg:text-xl mb-6">
        Capacité: 4 passagers (2 recommandés).
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
  ["Évènement", "Sur devis"],
  ["Forfait Mariage", "1800€"],
];

const options = [
  ["Intitulé", "Prix"],
  ["Photographe", "Sur devis"],
  ["Fleurs", "Sur devis"],
];

const images = [
  {
    id: 1,
    src: getVehiculeImage("rolls_royce_phantom/rolls.jpg"),
    avif: getVehiculeImageAvif("rolls_royce_phantom/rolls.avif"),
    webp: getVehiculeImageWebp("rolls_royce_phantom/rolls.webp"),
  },
  {
    id: 2,
    src: getVehiculeImage("rolls_royce_phantom/rolls-1.jpg"),
    avif: getVehiculeImageAvif("rolls_royce_phantom/rolls-1.avif"),
    webp: getVehiculeImageWebp("rolls_royce_phantom/rolls-1.webp"),
  },
  {
    id: 3,
    src: getVehiculeImage("rolls_royce_phantom/rolls-2.jpg"),
    avif: getVehiculeImageAvif("rolls_royce_phantom/rolls-2.avif"),
    webp: getVehiculeImageWebp("rolls_royce_phantom/rolls-2.webp"),
  },
  {
    id: 4,
    src: getVehiculeImage("rolls_royce_phantom/rolls-3.jpg"),
    avif: getVehiculeImageAvif("rolls_royce_phantom/rolls-3.avif"),
    webp: getVehiculeImageWebp("rolls_royce_phantom/rolls-3.webp"),
  },
  {
    id: 5,
    src: getVehiculeImage("rolls_royce_phantom/rolls-4.jpg"),
    avif: getVehiculeImageAvif("rolls_royce_phantom/rolls-4.avif"),
    webp: getVehiculeImageWebp("rolls_royce_phantom/rolls-4.webp"),
  },
  {
    id: 6,
    src: getVehiculeImage("rolls_royce_phantom/rolls-5.jpg"),
    avif: getVehiculeImageAvif("rolls_royce_phantom/rolls-5.avif"),
    webp: getVehiculeImageWebp("rolls_royce_phantom/rolls-5.webp"),
  },
  {
    id: 7,
    src: getVehiculeImage("rolls_royce_phantom/rolls-6.jpg"),
    avif: getVehiculeImageAvif("rolls_royce_phantom/rolls-6.avif"),
    webp: getVehiculeImageWebp("rolls_royce_phantom/rolls-6.webp"),
  },
  {
    id: 8,
    src: getVehiculeImage("rolls_royce_phantom/rolls-7.jpg"),
    avif: getVehiculeImageAvif("rolls_royce_phantom/rolls-7.avif"),
    webp: getVehiculeImageWebp("rolls_royce_phantom/rolls-7.webp"),
  },
  {
    id: 9,
    src: getVehiculeImage("rolls_royce_phantom/rolls-8.jpg"),
    avif: getVehiculeImageAvif("rolls_royce_phantom/rolls-8.avif"),
    webp: getVehiculeImageWebp("rolls_royce_phantom/rolls-8.webp"),
  },
  {
    id: 10,
    src: getVehiculeImage("rolls_royce_phantom/rolls-9.jpg"),
    avif: getVehiculeImageAvif("rolls_royce_phantom/rolls-9.avif"),
    webp: getVehiculeImageWebp("rolls_royce_phantom/rolls-9.webp"),
  },
  {
    id: 11,
    src: getVehiculeImage("rolls_royce_phantom/rolls-10.jpg"),
    avif: getVehiculeImageAvif("rolls_royce_phantom/rolls-10.avif"),
    webp: getVehiculeImageWebp("rolls_royce_phantom/rolls-10.webp"),
  },
  {
    id: 12,
    src: getVehiculeImage("rolls_royce_phantom/rolls-11.jpg"),
    avif: getVehiculeImageAvif("rolls_royce_phantom/rolls-11.avif"),
    webp: getVehiculeImageWebp("rolls_royce_phantom/rolls-11.webp"),
  },
  {
    id: 13,
    src: getVehiculeImage("rolls_royce_phantom/rolls-12.jpg"),
    avif: getVehiculeImageAvif("rolls_royce_phantom/rolls-12.avif"),
    webp: getVehiculeImageWebp("rolls_royce_phantom/rolls-12.webp"),
  },
  {
    id: 14,
    src: getVehiculeImage("rolls_royce_phantom/rolls-13.jpg"),
    avif: getVehiculeImageAvif("rolls_royce_phantom/rolls-13.avif"),
    webp: getVehiculeImageWebp("rolls_royce_phantom/rolls-13.webp"),
  },
];

onMounted(() => {
  window.scrollTo(0, el.value!.offsetTop - 20);
});
</script>
