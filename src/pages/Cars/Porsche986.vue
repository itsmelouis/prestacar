<template>
  <div ref="el" class="my-20">
    <div class="my-10 mx-10 sm:my-20 md:mx-40">
      <p class="text-base md:text-lg lg:text-xl">
        Notre <span class="font-bold">Porsche 986</span> vous dévoileras luxe et
        performance. Ce bijou allemand de 210 chevaux incarne l'élégance
        intemporelle et la sportivité. Prêt à transformer votre événement en un
        moment inoubliable grâce à ce sublime cabriolet gris ?
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

const getVehiculeImageUrl = (name: string): string => {
  return new URL(`../../assets/vehicules/${name}`, import.meta.url).href;
};

const images = [
  { id: 1, src: getVehiculeImageUrl("porsche_986/boxster.jpg") },
  { id: 2, src: getVehiculeImageUrl("porsche_986/boxster-2.jpg") },
  { id: 3, src: getVehiculeImageUrl("porsche_986/boxster-3.jpg") },
  { id: 4, src: getVehiculeImageUrl("porsche_986/boxster-4.jpg") },
  { id: 5, src: getVehiculeImageUrl("porsche_986/boxster-5.jpg") },
  { id: 6, src: getVehiculeImageUrl("porsche_986/boxster-6.jpg") },
  { id: 7, src: getVehiculeImageUrl("porsche_986/boxster-7.jpg") },
  { id: 8, src: getVehiculeImageUrl("porsche_986/boxster-8.jpg") },
  { id: 9, src: getVehiculeImageUrl("porsche_986/boxster-9.jpg") },
  { id: 10, src: getVehiculeImageUrl("porsche_986/boxster-10.jpg") },
  { id: 11, src: getVehiculeImageUrl("porsche_986/boxster-11.jpg") },
  { id: 12, src: getVehiculeImageUrl("porsche_986/boxster-12.jpg") },
  { id: 13, src: getVehiculeImageUrl("porsche_986/boxster-13.jpg") },
  { id: 14, src: getVehiculeImageUrl("porsche_986/boxster-14.jpg") },
  { id: 15, src: getVehiculeImageUrl("porsche_986/boxster-15.jpg") },
  { id: 16, src: getVehiculeImageUrl("porsche_986/boxster-16.jpg") },
];

onMounted(() => {
  window.scrollTo(0, el.value!.offsetTop - 20);
});
</script>
