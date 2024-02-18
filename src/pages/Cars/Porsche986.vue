<template>
  <div ref="el" class="my-20">
    <div class="my-10 mx-10 sm:my-20 md:mx-40">
      <h1 class="text-xl md:text-2xl lg:text-3xl font-semibold text-center">Transformez Votre Mariage avec la Sportive Porsche Boxster chez LB-Prestacar à Valenciennes</h1>
      <p class="text-base md:text-lg lg:text-xl">
        <br />
        <br />
        Rendez votre célébration unique et mémorable en optant pour l'élégance sportive et le luxe : la <span class="font-bold">Porsche Boxster</span>, disponible en exclusivité chez LB-Prestacar,
        à Valenciennes. Cette perle rare de notre gamme de véhicules de luxe constitue le choix parfait pour les couples désirant insuffler une dynamique de modernité
        et d'élégance à leur journée exceptionnelle. 🌟🚗
        <br />
        <br />
      </p>

      <H2 class="font-bold text-xl md:text-2xl text-center">La Porsche Boxster : Synonyme de Liberté et d'Élégance</H2>

      <p class="text-base md:text-lg lg:text-xl">
        <br />
        <br />
        La Porsche Boxster n'est pas qu'une simple voiture de sport ; c'est un véhicule qui incarne la liberté,
        l'élégance et la performance. Avec ses lignes fluides, son intérieur raffiné et ses capacités dynamiques
        hors normes, la Boxster est promise à transformer votre arrivée en un moment vibrant d'émotion et d'exception. 🏎️💨
        <br />
        <br />
        <span class="font-bold">Séances Photos Inoubliables:</span> La Porsche Boxster, avec son allure sportive et élégante, offre un cadre idéal
        pour des séances photos de mariage uniques, garantissant des souvenirs visuels aussi intenses et passionnants
        que votre amour. 📸❤️
        <br />
        <br />
        <span class="font-bold">Service de Chauffeur Professionnel:</span> Laissez-vous guider par l'un de nos chauffeurs experts et
        passionnés, qui s'assurera que votre parcours soit aussi exaltant et agréable que possible, vous permettant de vous
        immerger entièrement dans la joie de votre union. 👨‍✈️🌹
        <br />
        <br />
      </p>

      <H2 class="font-bold text-xl md:text-2xl text-center">Une Offre Personnalisée pour un Jour Inoubliable</H2>

      <p class="text-base md:text-lg lg:text-xl">
        <br />
        <br />
        Chez LB-Prestacar, nous reconnaissons l'unicité de chaque mariage. C'est pourquoi nous proposons des services
        personnalisés pour accompagner votre location de la Porsche Boxster. Que vous envisagiez une décoration
        spécifique pour la voiture, une playlist personnalisée pour le trajet, ou tout autre élément qui rendra votre journée
        encore plus spéciale, notre équipe est à votre écoute pour faire de vos rêves une réalité. 🎶💐
        <br />
        <br />
      </p>

      <H2 class="font-bold text-xl md:text-2xl text-center">Réservez Votre Porsche Boxster dès Aujourd'hui</H2>

      <p class="text-base md:text-lg lg:text-xl">
        <br />
        <br />
        Pour vous assurer que la Porsche Boxster soit disponible pour votre mariage à Valenciennes, nous vous invitons
        à prendre contact avec nous bien en avance. Notre équipe dévouée est prête à échanger sur vos attentes et à
        organiser chaque aspect pour que votre expérience soit exceptionnelle. 🗓️💕
        <br />
        <br />
        Contactez-nous dès aujourd'hui au 06 52 74 34 05 ou via
        <router-link
            to="/contact"
            class="underline">notre page de contact
        </router-link>
        pour faire de la Porsche Boxster le témoin privilégié de votre union. Avec LB-Prestacar, faites le choix d'une entrée
        remarquable et d'un moment inoubliable, à la hauteur de vos aspirations les plus exaltantes. 💌🚗
        <br />
        <br />
        Capacité: 1 passager.
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
    src: getVehiculeImage("porsche_986/boxster-16.jpg"),
    avif: getVehiculeImageAvif("porsche_986/boxster-16.avif"),
    webp: getVehiculeImageWebp("porsche_986/boxster-16.webp"),
  },
  {
    id: 2,
    src: getVehiculeImage("porsche_986/boxster-15.jpg"),
    avif: getVehiculeImageAvif("porsche_986/boxster-15.avif"),
    webp: getVehiculeImageWebp("porsche_986/boxster-15.webp"),
  },
  {
    id: 3,
    src: getVehiculeImage("porsche_986/boxster-13.jpg"),
    avif: getVehiculeImageAvif("porsche_986/boxster-13.avif"),
    webp: getVehiculeImageWebp("porsche_986/boxster-13.webp"),
  },


  {
    id: 4,
    src: getVehiculeImage("porsche_986/boxster-10.jpg"),
    avif: getVehiculeImageAvif("porsche_986/boxster-10.avif"),
    webp: getVehiculeImageWebp("porsche_986/boxster-10.webp"),
  },
  {
    id: 5,
    src: getVehiculeImage("porsche_986/boxster-6.jpg"),
    avif: getVehiculeImageAvif("porsche_986/boxster-6.avif"),
    webp: getVehiculeImageWebp("porsche_986/boxster-6.webp"),
  },
  {
    id: 6,
    src: getVehiculeImage("porsche_986/boxster-7.jpg"),
    avif: getVehiculeImageAvif("porsche_986/boxster-7.avif"),
    webp: getVehiculeImageWebp("porsche_986/boxster-7.webp"),
  },
  {
    id: 7,
    src: getVehiculeImage("porsche_986/boxster-8.jpg"),
    avif: getVehiculeImageAvif("porsche_986/boxster-8.avif"),
    webp: getVehiculeImageWebp("porsche_986/boxster-8.webp"),
  },
  {
    id: 8,
    src: getVehiculeImage("porsche_986/boxster-9.jpg"),
    avif: getVehiculeImageAvif("porsche_986/boxster-9.avif"),
    webp: getVehiculeImageWebp("porsche_986/boxster-9.webp"),
  },
  {
    id: 9,
    src: getVehiculeImage("porsche_986/boxster-4.jpg"),
    avif: getVehiculeImageAvif("porsche_986/boxster-4.avif"),
    webp: getVehiculeImageWebp("porsche_986/boxster-4.webp"),
  },
  {
    id: 10,
    src: getVehiculeImage("porsche_986/boxster-5.jpg"),
    avif: getVehiculeImageAvif("porsche_986/boxster-5.avif"),
    webp: getVehiculeImageWebp("porsche_986/boxster-5.webp"),
  },
  {
    id: 11,
    src: getVehiculeImage("porsche_986/boxster-12.jpg"),
    avif: getVehiculeImageAvif("porsche_986/boxster-12.avif"),
    webp: getVehiculeImageWebp("porsche_986/boxster-12.webp"),
  },
  {
    id: 12,
    src: getVehiculeImage("porsche_986/boxster-3.jpg"),
    avif: getVehiculeImageAvif("porsche_986/boxster-3.avif"),
    webp: getVehiculeImageWebp("porsche_986/boxster-3.webp"),
  },
  {
    id: 13,
    src: getVehiculeImage("porsche_986/boxster-2.jpg"),
    avif: getVehiculeImageAvif("porsche_986/boxster-2.avif"),
    webp: getVehiculeImageWebp("porsche_986/boxster-2.webp"),
  },
  {
    id: 14,
    src: getVehiculeImage("porsche_986/boxster.jpg"),
    avif: getVehiculeImageAvif("porsche_986/boxster.avif"),
    webp: getVehiculeImageWebp("porsche_986/boxster.webp"),
  },
];

onMounted(() => {
  window.scrollTo(0, el.value!.offsetTop - 20);
});
</script>
