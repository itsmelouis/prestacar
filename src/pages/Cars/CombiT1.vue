<template>
  <div ref="el" class="my-20">
    <div class="my-10 mx-10 sm:my-20 md:mx-40">
      <p class="text-base md:text-lg lg:text-xl">
        Laissez vous emporter dans le <span class="font-bold">combi T1</span> de
        Volkswagen. Fabriqué en 1972 son charme de l'époque vous séduira
        rapidement, ce minibus vous emmènera lors d'événements tels que votre
        mariage ou autres.
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
import Carousel from "../../components/Carousel.vue";
import Table from "../../components/Table.vue";
import GoTop from "../../components/GoTop.vue";

const el = ref<HTMLDivElement>();

const grille_tarifiaire = [
  ["Temps", "Prix"],
  ["Aller Simple", "Sur devis"],
  ["Aller Retour", "Sur devis"],
  ["1h", "200€"],
  ["3h", "400€"],
  ["Forfait Mariage", "500€"],
];

const options = [
  ["Intitulé", "Prix"],
  ["Décoration intérieur", "Sur devis"],
  ["Photographe", "Sur devis"],
  ["Fleurs", "Sur devis"],
];

const getVehiculeImageUrl = (name: string): string => {
  return new URL(`../../assets/vehicules/${name}`, import.meta.url).href;
};

const images = [
  { id: 1, src: getVehiculeImageUrl("combi_t1/combi1.jpg") },
  { id: 2, src: getVehiculeImageUrl("combi_t1/combi2.jpg") },
  { id: 3, src: getVehiculeImageUrl("combi_t1/combi3.jpg") },
  { id: 4, src: getVehiculeImageUrl("combi_t1/combi4.jpg") },
  { id: 5, src: getVehiculeImageUrl("combi_t1/combi5.jpg") },
  { id: 6, src: getVehiculeImageUrl("combi_t1/combi6.jpg") },
  { id: 7, src: getVehiculeImageUrl("combi_t1/combi7.jpg") },
  { id: 8, src: getVehiculeImageUrl("combi_t1/combi8.jpg") },
];

onMounted(() => {
  window.scrollTo(0, el.value!.offsetTop - 20);
});
</script>
