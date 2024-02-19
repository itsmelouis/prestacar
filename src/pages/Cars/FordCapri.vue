<template>
  <div ref="el" class="my-20">
    <div class="my-10 mx-10 sm:my-20 md:mx-40">
      <h1 class="text-xl md:text-2xl lg:text-3xl font-semibold text-center">Célébrez Votre Mariage avec l'Exclusivité d'une Ford Capri Crayford Cabriolet chez LB-Prestacar à Valenciennes</h1>
      <p class="text-base md:text-lg lg:text-xl">
        <br />
        <br />
        Offrez à votre journée spéciale une touche d'exclusivité et de charme vintage avec la rare Ford Capri Crayford Cabriolet,
        une perle proposée uniquement chez LB-Prestacar à Valenciennes. Cette voiture de collection, symbole d'élégance et de distinction,
        est le choix parfait pour les couples qui désirent sortir des sentiers battus et marquer leur union par une note de singularité et de style. 🚗💖
        <br />
        <br />
      </p>

      <Carousel :items="images" />
      <br />
      <br />
      <H2 class="font-bold text-xl md:text-2xl text-center">La Ford Capri Crayford Cabriolet : Une Rare Beauté sur Roues</H2>

      <p class="text-base md:text-lg lg:text-xl">
        <br />
        <br />
        La Ford Capri Crayford est bien plus qu'une voiture décapotable ; c'est une véritable pièce de collection,
        dont la rareté et le design captivant reflètent un héritage d'exclusivité et de raffinement. Avec ses lignes classiques,
        son intérieur soigné et son toit ouvrable, elle promet de vous offrir une entrée spectaculaire et élégante, laissant
        un souvenir indélébile dans les mémoires de vos invités. 🌟🌼
        <br />
        <br />
        <span class="font-bold">Confort Vintage et Élégance Intemporelle:  </span> Installez-vous au sein
        de l'intérieur authentique et raffiné de la Capri Crayford, où chaque détail évoque le charme des
        années passées. Cette voiture offre non seulement un confort exceptionnel mais aussi
        une expérience de voyage hors du temps, idéale pour rendre votre arrivée et vos déplacements
        empreints d'une élégance intemporelle. 🛋️🕰️
        <br />
        <br />
        <span class="font-bold">Photographies Mémorables:</span> Profitez du cachet unique de la Ford Capri Crayford
        pour immortaliser votre union à travers des photographies de mariage uniques. Son allure distinctive et
        son caractère rare fournissent un décor parfait pour des clichés qui se distinguent par leur originalité
        et leur beauté. 📸💑
        <br />
        <br />
        <span class="font-bold">Une Expérience de Conduite Unique: </span> Laissez-vous conduire en toute sérénité
        par l'un de nos chauffeurs professionnels, qui vous garantira une expérience de conduite douce et agréable,
        vous permettant de vous immerger pleinement dans la magie de votre journée spéciale, avec une touche de nostalgie. 🚘💨
        <br />
        <br />
      </p>

      <H2 class="font-bold text-xl md:text-2xl text-center">Service Sur Mesure pour une Moment Exceptionnel</H2>

      <p class="text-base md:text-lg lg:text-xl">
        <br />
        <br />
        Chez LB-Prestacar, nous savons que votre mariage est l'expression de votre personnalité unique. C'est pourquoi
        nous offrons un service personnalisé avec la Ford Capri Crayford Cabriolet. Nous sommes à votre écoute pour adapter chaque détail à
        vos désirs, faisant de votre expérience un moment véritablement sur mesure. 🌸
        <br />
        <br />
      </p>

      <H2 class="font-bold text-xl md:text-2xl text-center">Réservez Votre Ford Capri Crayford Aujourd'hui</H2>

      <p class="text-base md:text-lg lg:text-xl">
        <br />
        <br />
        Pour garantir la disponibilité de cette voiture exceptionnelle pour votre mariage à Valenciennes, contactez LB-Prestacar sans tarder.
        Notre équipe passionnée est prête à discuter de vos attentes et à tout mettre en œuvre pour que votre journée soit aussi parfaite que
        vous l'avez imaginée. 📆❤️
        <br />
        <br />
        Contactez-nous dès aujourd'hui au 06 52 74 34 05 ou via
        <router-link
            to="/contact"
            class="underline">notre page de contact
        </router-link>
        pour réserver cette icône de rareté et d'élégance pour votre mariage. Avec LB-Prestacar, faites le choix d'une
        célébration unique, sublimée par le charme et l'exclusivité de la Ford Capri Crayford Cabriolet. 💌🌿
        <br />
        <br />
        Capacité: 4 passagers (2 recommandés).
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
    id: 3,
    src: getVehiculeImage("ford_capri/capri-3.jpg"),
    avif: getVehiculeImageAvif("ford_capri/capri-3.avif"),
    webp: getVehiculeImageWebp("ford_capri/capri-3.webp"),
  },
  {
    id: 5,
    src: getVehiculeImage("ford_capri/capri-5.jpg"),
    avif: getVehiculeImageAvif("ford_capri/capri-5.avif"),
    webp: getVehiculeImageWebp("ford_capri/capri-5.webp"),
  },
  {
    id: 6,
    src: getVehiculeImage("ford_capri/capri-6.jpg"),
    avif: getVehiculeImageAvif("ford_capri/capri-6.avif"),
    webp: getVehiculeImageWebp("ford_capri/capri-6.webp"),
  },
  {
    id: 7,
    src: getVehiculeImage("ford_capri/capri-7.jpg"),
    avif: getVehiculeImageAvif("ford_capri/capri-7.avif"),
    webp: getVehiculeImageWebp("ford_capri/capri-7.webp"),
  },
  {
    id: 9,
    src: getVehiculeImage("ford_capri/capri-9.jpg"),
    avif: getVehiculeImageAvif("ford_capri/capri-9.avif"),
    webp: getVehiculeImageWebp("ford_capri/capri-9.webp"),
  },
  {
    id: 24,
    src: getVehiculeImage("ford_capri/capri-2-2.jpg"),
    avif: getVehiculeImageAvif("ford_capri/capri-2-2.avif"),
    webp: getVehiculeImageWebp("ford_capri/capri-2-2.webp"),
  },
  {
    id: 10,
    src: getVehiculeImage("ford_capri/capri-10.jpg"),
    avif: getVehiculeImageAvif("ford_capri/capri-10.avif"),
    webp: getVehiculeImageWebp("ford_capri/capri-10.webp"),
  },
  {
    id: 11,
    src: getVehiculeImage("ford_capri/capri-11.jpg"),
    avif: getVehiculeImageAvif("ford_capri/capri-11.avif"),
    webp: getVehiculeImageWebp("ford_capri/capri-11.webp"),
  },
  {
    id: 12,
    src: getVehiculeImage("ford_capri/capri-12.jpg"),
    avif: getVehiculeImageAvif("ford_capri/capri-12.avif"),
    webp: getVehiculeImageWebp("ford_capri/capri-12.webp"),
  },
  {
    id: 13,
    src: getVehiculeImage("ford_capri/capri-13.jpg"),
    avif: getVehiculeImageAvif("ford_capri/capri-13.avif"),
    webp: getVehiculeImageWebp("ford_capri/capri-13.webp"),
  },
  {
    id: 14,
    src: getVehiculeImage("ford_capri/capri-14.jpg"),
    avif: getVehiculeImageAvif("ford_capri/capri-14.avif"),
    webp: getVehiculeImageWebp("ford_capri/capri-14.webp"),
  },
  {
    id: 15,
    src: getVehiculeImage("ford_capri/capri-15.jpg"),
    avif: getVehiculeImageAvif("ford_capri/capri-15.avif"),
    webp: getVehiculeImageWebp("ford_capri/capri-15.webp"),
  },
  {
    id: 16,
    src: getVehiculeImage("ford_capri/capri-16.jpg"),
    avif: getVehiculeImageAvif("ford_capri/capri-16.avif"),
    webp: getVehiculeImageWebp("ford_capri/capri-16.webp"),
  },
  {
    id: 19,
    src: getVehiculeImage("ford_capri/capri-19.jpg"),
    avif: getVehiculeImageAvif("ford_capri/capri-19.avif"),
    webp: getVehiculeImageWebp("ford_capri/capri-19.webp"),
  },
  {
    id: 20,
    src: getVehiculeImage("ford_capri/capri-20.jpg"),
    avif: getVehiculeImageAvif("ford_capri/capri-20.avif"),
    webp: getVehiculeImageWebp("ford_capri/capri-20.webp"),
  },
  {
    id: 21,
    src: getVehiculeImage("ford_capri/capri-21.jpg"),
    avif: getVehiculeImageAvif("ford_capri/capri-21.avif"),
    webp: getVehiculeImageWebp("ford_capri/capri-21.webp"),
  },
  {
    id: 23,
    src: getVehiculeImage("ford_capri/capri-23.jpg"),
    avif: getVehiculeImageAvif("ford_capri/capri-23.avif"),
    webp: getVehiculeImageWebp("ford_capri/capri-23.webp"),
  },
];

onMounted(() => {
  window.scrollTo(0, el.value!.offsetTop - 20);
});
</script>
