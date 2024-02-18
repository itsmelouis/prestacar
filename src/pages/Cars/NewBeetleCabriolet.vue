<template>
  <div ref="el" class="my-20">
    <div class="my-10 mx-10 sm:my-20 md:mx-40">
      <h1 class="text-xl md:text-2xl lg:text-3xl font-semibold text-center">Ajoutez une Touche de Charme Rétro à Votre Mariage avec la New Beetle Cabriolet chez LB-Prestacar à Valenciennes</h1>
      <p class="text-base md:text-lg lg:text-xl">
        <br />
        <br />
        Offrez à votre mariage une note de fantaisie et d'originalité avec la <span class="font-bold">New Beetle Cabriolet</span>, disponible
        chez LB-Prestacar à Valenciennes. Cette icône du design, alliant charme rétro et modernité, est le choix idéal pour
        les couples recherchant à marquer leur journée spéciale d'une empreinte mémorable et joyeuse. 🌸🚗
        <br />
        <br />
      </p>

      <H2 class="font-bold text-xl md:text-2xl text-center">La New Beetle Cabriolet : Un Symbole de Joie et de Liberté</H2>

      <p class="text-base md:text-lg lg:text-xl">
        <br />
        <br />
        La New Beetle Cabriolet est bien plus qu'une voiture décapotable ; c'est une célébration de la joie de vivre,
        mêlant esthétique rétro à la performance moderne. Avec sa silhouette arrondie emblématique, ses couleurs vives
        et son toit ouvrable, la New Beetle promet de rendre votre arrivée et vos déplacements un moment de pur bonheur
        et d'inoubliable élégance. 🎈🛣️
        <br />
        <br />
        <span class="font-bold">Confort et Style:</span> Profitez du confort des sièges moelleux et de
        l'intérieur de la New Beetle Cabriolet, parfait pour se détendre et apprécier le trajet vers
        le lieu de votre cérémonie ou de votre réception sous le ciel bleu. 🌞💑
        <br />
        <br />
        <span class="font-bold">Photos de Mariage Uniques:</span>  La New Beetle Cabriolet offre un arrière-plan idyllique et original
        pour vos photos de mariage, assurant des souvenirs visuels empreints de caractère et de gaieté. 📷💖
        <br />
        <br />
        <span class="font-bold">Expérience de Conduite Enjouée:</span> Confiez votre parcours à nos chauffeurs professionnels,
        qui vous accompagneront avec enthousiasme et soin, vous permettant de vivre pleinement l’expérience joyeuse
        que propose cette voiture exceptionnelle. 👩‍✈️🌼
        <br />
        <br />
      </p>

      <H2 class="font-bold text-xl md:text-2xl text-center">Un Service Personnalisé pour une Journée Inoubliable</H2>

      <p class="text-base md:text-lg lg:text-xl">
        <br />
        <br />
        Chez LB-Prestacar, nous savons que votre mariage est unique et mérite une attention toute particulière. C'est pourquoi
        nous offrons des services personnalisés avec la location de la New Beetle Cabriolet. Des fleurs décoratives assorties
        à votre thème, à une playlist qui vous ressemble pour le trajet, nous sommes à votre écoute pour personnaliser chaque
        détail selon vos désirs. 🎵🌹
        <br />
        <br />
      </p>

      <H2 class="font-bold text-xl md:text-2xl text-center">Réservez Votre New Beetle Cabriolet dès Maintenant</H2>

      <p class="text-base md:text-lg lg:text-xl">
        <br />
        <br />
        Pour que la New Beetle Cabriolet soit la vôtre pour le grand jour à Valenciennes, n'hésitez pas à contacter
        LB-Prestacar bien à l'avance. Notre équipe passionnée est prête à discuter de vos envies et à mettre en place
        tous les éléments pour que votre expérience soit parfaitement à la hauteur de vos attentes. 📅💒
        <br />
        <br />
        Contactez-nous dès aujourd'hui au 06 52 74 34 05 ou via
        <router-link
            to="/contact"
            class="underline">notre page de contact
        </router-link>
        pour faire de la New Beatle le témoin privilégié de votre union. Avec LB-Prestacar, optez pour une entrée pleine
        de charme et d'originalité, transformant votre mariage en un événement exceptionnellement joyeux et inoubliable. 💌🚘
        <br />
        <br />
        Capacité: 3 passagers. (2 recommandés) Avec chauffeur 4 personnes sans
        chauffeur.
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
        Louez cette voiture sans chauffeur pour 60€ / jour avec 250km inclus
        (0,50 centimes facturés par km supplémentaire). L'âge de 23 ans minimum
        et 5 ans de permis sont requis. (caution de 3000€)
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
  ["Temps", "Prix avec chauffeur"],
  ["Aller Simple", "Sur devis"],
  ["Aller Retour", "Sur devis"],
  ["Forfait Mariage", "300€"],
];

const options = [
  ["Intitulé", "Prix"],
  ["Photographe", "Sur devis"],
  ["Fleurs", "Sur devis"],
];

const images = [
  {
    id: 1,
    src: getVehiculeImage("new_beetle/new-beetle11.jpg"),
    avif: getVehiculeImageAvif("new_beetle/new-beetle11.avif"),
    webp: getVehiculeImageWebp("new_beetle/new-beetle11.webp"),
  },
  {
    id: 2,
    src: getVehiculeImage("new_beetle/new-beetle12.jpg"),
    avif: getVehiculeImageAvif("new_beetle/new-beetle12.avif"),
    webp: getVehiculeImageWebp("new_beetle/new-beetle12.webp"),
  },
  {
    id: 3,
    src: getVehiculeImage("new_beetle/new-beetle13.jpg"),
    avif: getVehiculeImageAvif("new_beetle/new-beetle13.avif"),
    webp: getVehiculeImageWebp("new_beetle/new-beetle13.webp"),
  },
  {
    id: 4,
    src: getVehiculeImage("new_beetle/new-beetle14.jpg"),
    avif: getVehiculeImageAvif("new_beetle/new-beetle14.avif"),
    webp: getVehiculeImageWebp("new_beetle/new-beetle14.webp"),
  },
  {
    id: 5,
    src: getVehiculeImage("new_beetle/new-beetle15.jpg"),
    avif: getVehiculeImageAvif("new_beetle/new-beetle15.avif"),
    webp: getVehiculeImageWebp("new_beetle/new-beetle15.webp"),
  },
  {
    id: 6,
    src: getVehiculeImage("new_beetle/new-beetle16.jpg"),
    avif: getVehiculeImageAvif("new_beetle/new-beetle16.avif"),
    webp: getVehiculeImageWebp("new_beetle/new-beetle16.webp"),
  },
  {
    id: 7,
    src: getVehiculeImage("new_beetle/new-beetle17.jpg"),
    avif: getVehiculeImageAvif("new_beetle/new-beetle17.avif"),
    webp: getVehiculeImageWebp("new_beetle/new-beetle17.webp"),
  },
  {
    id: 8,
    src: getVehiculeImage("new_beetle/new-beetle18.jpg"),
    avif: getVehiculeImageAvif("new_beetle/new-beetle18.avif"),
    webp: getVehiculeImageWebp("new_beetle/new-beetle18.webp"),
  },
  {
    id: 9,
    src: getVehiculeImage("new_beetle/new-beetle19.jpg"),
    avif: getVehiculeImageAvif("new_beetle/new-beetle19.avif"),
    webp: getVehiculeImageWebp("new_beetle/new-beetle19.webp"),
  },
  {
    id: 10,
    src: getVehiculeImage("new_beetle/new-beetle20.jpg"),
    avif: getVehiculeImageAvif("new_beetle/new-beetle20.avif"),
    webp: getVehiculeImageWebp("new_beetle/new-beetle20.webp"),
  },
  {
    id: 11,
    src: getVehiculeImage("new_beetle/new-beetle21.jpg"),
    avif: getVehiculeImageAvif("new_beetle/new-beetle21.avif"),
    webp: getVehiculeImageWebp("new_beetle/new-beetle21.webp"),
  },
  {
    id: 12,
    src: getVehiculeImage("new_beetle/new-beetle22.jpg"),
    avif: getVehiculeImageAvif("new_beetle/new-beetle22.avif"),
    webp: getVehiculeImageWebp("new_beetle/new-beetle22.webp"),
  },
  {
    id: 13,
    src: getVehiculeImage("new_beetle/new-beetle23.jpg"),
    avif: getVehiculeImageAvif("new_beetle/new-beetle23.avif"),
    webp: getVehiculeImageWebp("new_beetle/new-beetle23.webp"),
  },
  {
    id: 14,
    src: getVehiculeImage("new_beetle/new-beetle8.jpg"),
    avif: getVehiculeImageAvif("new_beetle/new-beetle8.avif"),
    webp: getVehiculeImageWebp("new_beetle/new-beetle8.webp"),
  },
  {
    id: 15,
    src: getVehiculeImage("new_beetle/new-beetle9.jpg"),
    avif: getVehiculeImageAvif("new_beetle/new-beetle9.avif"),
    webp: getVehiculeImageWebp("new_beetle/new-beetle9.webp"),
  },
];

onMounted(() => {
  window.scrollTo(0, el.value!.offsetTop - 20);
});
</script>
