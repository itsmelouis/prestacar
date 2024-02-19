<template>
  <div ref="el" class="my-20">
    <div class="my-10 mx-10 sm:my-20 md:mx-40">
      <h1 class="text-xl md:text-2xl lg:text-3xl font-semibold text-center">Votre Mariage avec le Charme Vintage de la Citroën 2CV France 3 chez LB-Prestacar à Valenciennes</h1>
      <p class="text-base md:text-lg lg:text-xl">
        <br />
        <br />
        Ajoutez une touche de charme rétro à votre mariage en choisissant la <span class="font-bold">Citroën 2CV France 3</span>, disponible
        chez LB-Prestacar à Valenciennes. Cette édition spéciale de la légendaire 2CV, avec son allure iconique et son esprit d'aventure, est parfaite pour les couples
        recherchant une expérience de mariage unique et mémorable, empreinte d'authenticité et de convivialité. 🚗🌼
        <br />
        <br />
      </p>

      <Carousel :items="images" />

      <br />
      <br />

      <H2 class="font-bold text-xl md:text-2xl text-center">La Citroën 2CV France 3 : Une Icône de l'Automobile Française</H2>

      <p class="text-base md:text-lg lg:text-xl">
        <br />
        <br />
        La Citroën 2CV France 3 n'est pas juste une voiture, c'est un symbole de liberté et de simplicité. Avec sa couleur blanche distinctive, ses lignes rondes et son toit décapotable,
        elle incarne parfaitement l'esprit joyeux et l'élégance décontractée. Prête à faire de votre arrivée un moment plein de charme et d'originalité, la 2CV France 3 est une promesse de souvenirs inoubliables. 🌟🛣️
        <br />
        <br />
        <span class="font-bold">Confort Authentique et Style Inimitable:</span> Profitez de l'ambiance conviviale et de l'intérieur simple mais accueillant de la Citroën 2CV France 3,
        offrant une expérience de voyage pleine de caractère et d'authenticité pour vous et vos invités. 🛋️💐
        <br />
        <br />
        <span class="font-bold">Des Photographies Pleines de Personnalité: </span> Capturez l'essence de votre amour avec la Citroën 2CV France 3 comme décor,
        assurant des images vibrantes et pleines de vie qui se distinguent par leur originalité et leur charme vintage. 📸👰‍♂️🤵‍♀️
        <br />
        <br />
        <span class="font-bold">Une Expérience de Conduite Mémorable:</span> Nos chauffeurs professionnels et amicaux vous garantiront une arrivée détendue et pleine de style,
        vous permettant de savourer pleinement la joie et l'excitation de votre journée spéciale, sous le ciel ouvert de la 2CV. 🚘🌅
        <br />
        <br />
      </p>

      <H2 class="font-bold text-xl md:text-2xl text-center">Service Personnalisé pour un Mariage Inoubliable</H2>

      <p class="text-base md:text-lg lg:text-xl">
        <br />
        <br />
        Chez LB-Prestacar, nous croyons que votre mariage doit être une célébration de votre histoire unique. C'est pourquoi nous offrons un service sur mesure avec la Citroën 2CV France 3.
        Notre équipe est engagée à personnaliser votre expérience selon vos souhaits,
        faisant de votre mariage un événement véritablement exceptionnel et personnel. 🌸🎶
        <br />
        <br />
      </p>

      <H2 class="font-bold text-xl md:text-2xl text-center">Réservez Votre Citroën 2CV France 3 Dès Aujourd'hui</H2>

      <p class="text-base md:text-lg lg:text-xl">
        <br />
        <br />
        Pour assurer la disponibilité de la Citroën 2CV France 3 pour votre mariage à Valenciennes, contactez LB-Prestacar
        sans attendre. Notre équipe passionnée est prête à écouter vos souhaits et à organiser chaque détail pour que votre expérience soit parfaitement en accord avec vos attentes. 📅💖
        <br />
        <br />
        Contactez-nous dès aujourd'hui au 06 52 74 34 05 ou via
        <router-link
            to="/contact"
            class="underline">notre page de contact
        </router-link>
        pour intégrer cette légende de l'automobile française à votre célébration. Avec LB-Prestacar, vivez un mariage d'exception,
        sublimé par le charme unique et intemporel de la Citroën 2CV France 3. 💌🚗
        <br />
        <br />

        Capacité: 3 passagers. (2 recommandés)
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
    src: getVehiculeImage("citroen_2cv/2cv-2.jpg"),
    avif: getVehiculeImageAvif("citroen_2cv/2cv-2.avif"),
    webp: getVehiculeImageWebp("citroen_2cv/2cv-2.webp"),
  },
  {
    id: 2,
    src: getVehiculeImage("citroen_2cv/2cv-3.jpg"),
    avif: getVehiculeImageAvif("citroen_2cv/2cv-3.avif"),
    webp: getVehiculeImageWebp("citroen_2cv/2cv-3.webp"),
  },
  {
    id: 3,
    src: getVehiculeImage("citroen_2cv/2cv-1.jpg"),
    avif: getVehiculeImageAvif("citroen_2cv/2cv-1.avif"),
    webp: getVehiculeImageWebp("citroen_2cv/2cv-1.webp"),
  },
  {
    id: 4,
    src: getVehiculeImage("citroen_2cv/2cv-4.jpg"),
    avif: getVehiculeImageAvif("citroen_2cv/2cv-4.avif"),
    webp: getVehiculeImageWebp("citroen_2cv/2cv-4.webp"),
  },
  {
    id: 5,
    src: getVehiculeImage("citroen_2cv/2cv-5.jpg"),
    avif: getVehiculeImageAvif("citroen_2cv/2cv-5.avif"),
    webp: getVehiculeImageWebp("citroen_2cv/2cv-5.webp"),
  },
  {
    id: 7,
    src: getVehiculeImage("citroen_2cv/2cv-7.jpg"),
    avif: getVehiculeImageAvif("citroen_2cv/2cv-7.avif"),
    webp: getVehiculeImageWebp("citroen_2cv/2cv-7.webp"),
  },
];

onMounted(() => {
  window.scrollTo(0, el.value!.offsetTop - 20);
});
</script>
