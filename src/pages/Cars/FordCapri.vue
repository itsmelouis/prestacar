<template>
  <div ref="el" class="my-20">
    <div class="my-10 mx-10 sm:my-20 md:mx-40">

      <h1 class="text-xl md:text-2xl lg:text-3xl font-semibold text-center mb-8">Célébrez Votre Mariage avec l'Exclusivité d'une Ford Capri Crayford Cabriolet chez LB-Prestacar à Valenciennes</h1>

      <p class="text-base md:text-lg lg:text-xl mb-6">
        Offrez à votre journée spéciale une touche d'exclusivité et de charme vintage avec la rare Ford Capri Crayford Cabriolet,
        une perle proposée uniquement chez LB-Prestacar à Valenciennes. Cette voiture de collection, symbole d'élégance et de distinction,
        est le choix parfait pour les couples qui désirent sortir des sentiers battus et marquer leur union par une note de singularité et de style. 🚗💖
      </p>

      <Carousel :items="images" />

      <h2 class="font-bold text-xl md:text-2xl text-center mt-8 mb-8">La Ford Capri Crayford Cabriolet : Une Rare Beauté sur Roues</H2>

      <p class="text-base md:text-lg lg:text-xl mb-6">
        La Ford Capri Crayford est bien plus qu'une voiture décapotable ; c'est une véritable pièce de collection,
        dont la rareté et le design captivant reflètent un héritage d'exclusivité et de raffinement. Avec ses lignes classiques,
        son intérieur soigné et son toit ouvrable, elle promet de vous offrir une entrée spectaculaire et élégante, laissant
        un souvenir indélébile dans les mémoires de vos invités. 🌟🌼
      </p>

      <p class="text-base md:text-lg lg:text-xl mb-6">
        <span class="font-bold">Confort Vintage et Élégance Intemporelle:  </span> Installez-vous au sein
        de l'intérieur authentique et raffiné de la Capri Crayford, où chaque détail évoque le charme des
        années passées. Cette voiture offre non seulement un confort exceptionnel mais aussi
        une expérience de voyage hors du temps, idéale pour rendre votre arrivée et vos déplacements
        empreints d'une élégance intemporelle. 🛋️🕰️
      </p>

      <p class="text-base md:text-lg lg:text-xl mb-6">
        <span class="font-bold">Photographies Mémorables:</span> Profitez du cachet unique de la Ford Capri Crayford
        pour immortaliser votre union à travers des photographies de mariage uniques. Son allure distinctive et
        son caractère rare fournissent un décor parfait pour des clichés qui se distinguent par leur originalité
        et leur beauté. 📸💑
      </p>

      <p class="text-base md:text-lg lg:text-xl mb-6">
        <span class="font-bold">Une Expérience de Conduite Unique: </span> Laissez-vous conduire en toute sérénité
        par l'un de nos chauffeurs professionnels, qui vous garantira une expérience de conduite douce et agréable,
        vous permettant de vous immerger pleinement dans la magie de votre journée spéciale, avec une touche de nostalgie. 🚘💨
      </p>

      <h2 class="font-bold text-xl md:text-2xl text-center mt-8 mb-8">Service Sur Mesure pour une Moment Exceptionnel</H2>

      <p class="text-base md:text-lg lg:text-xl mb-6">
        Chez LB-Prestacar, nous savons que votre mariage est l'expression de votre personnalité unique. C'est pourquoi
        nous offrons un service personnalisé avec la Ford Capri Crayford Cabriolet. Nous sommes à votre écoute pour adapter chaque détail à
        vos désirs, faisant de votre expérience un moment véritablement sur mesure. 🌸
      </p>

      <h2 class="font-bold text-xl md:text-2xl text-center mt-8 mb-8">Réservez Votre Ford Capri Crayford Aujourd'hui</H2>

      <p class="text-base md:text-lg lg:text-xl mb-6">
        Pour garantir la disponibilité de cette voiture exceptionnelle pour votre mariage à Valenciennes, contactez LB-Prestacar sans tarder.
        Notre équipe passionnée est prête à discuter de vos attentes et à tout mettre en œuvre pour que votre journée soit aussi parfaite que
        vous l'avez imaginée. 📆❤️
      </p>

      <p class="text-base md:text-lg lg:text-xl mb-6">
        Contactez-nous dès aujourd'hui au 06 52 74 34 05 ou via
        <router-link
            to="/contact"
            class="underline">notre page de contact
        </router-link>
        pour réserver cette icône de rareté et d'élégance pour votre mariage. Avec LB-Prestacar, faites le choix d'une
        célébration unique, sublimée par le charme et l'exclusivité de la Ford Capri Crayford Cabriolet. 💌🌿
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
  ["3h", "300€"],
  ["4h", "400€"],
  ["Forfait Mariage", "450€"],
];

const options = [
  ["Intitulé", "Prix"],
  ["Photographe", "Sur devis"],
  ["Fleurs", "Sur devis"],
];

const images = [
  {
    id: 1,
    src: getVehiculeImage("ford_capri/capri-4.jpg"),
    avif: getVehiculeImageAvif("ford_capri/capri-4.avif"),
    webp: getVehiculeImageWebp("ford_capri/capri-4.webp"),
  },
  {
    id: 2,
    src: getVehiculeImage("ford_capri/capri-5.jpg"),
    avif: getVehiculeImageAvif("ford_capri/capri-5.avif"),
    webp: getVehiculeImageWebp("ford_capri/capri-5.webp"),
  },
  {
    id: 3,
    src: getVehiculeImage("ford_capri/capri-17.jpg"),
    avif: getVehiculeImageAvif("ford_capri/capri-17.avif"),
    webp: getVehiculeImageWebp("ford_capri/capri-17.webp"),
  },
  {
    id: 4,
    src: getVehiculeImage("ford_capri/capri-19.jpg"),
    avif: getVehiculeImageAvif("ford_capri/capri-19.avif"),
    webp: getVehiculeImageWebp("ford_capri/capri-19.webp"),
  },
  {
    id: 5,
    src: getVehiculeImage("ford_capri/capri-20.jpg"),
    avif: getVehiculeImageAvif("ford_capri/capri-20.avif"),
    webp: getVehiculeImageWebp("ford_capri/capri-20.webp"),
  },
  {
    id: 6,
    src: getVehiculeImage("ford_capri/capri-2-2.jpg"),
    avif: getVehiculeImageAvif("ford_capri/capri-2-2.avif"),
    webp: getVehiculeImageWebp("ford_capri/capri-2-2.webp"),
  },
  {
    id: 7,
    src: getVehiculeImage("ford_capri/capri-11.jpg"),
    avif: getVehiculeImageAvif("ford_capri/capri-11.avif"),
    webp: getVehiculeImageWebp("ford_capri/capri-11.webp"),
  },
];

onMounted(() => {
  window.scrollTo(0, el.value!.offsetTop - 20);
});
</script>
