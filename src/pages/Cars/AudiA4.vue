<template>
  <div ref="el" class="my-20">
    <div class="my-10 mx-10 sm:my-20 md:mx-40">
      <p class="text-base md:text-lg lg:text-xl">
        Découvrez
        <span class="font-bold">l'Audi A4 Allroad</span>, une véritable icône de
        l'élégance et de la performance. Équipée d'un puissant V6 et d'un
        intérieur en cuir luxueux, cette voiture incarne la quintessence du
        style et du confort. Louez cette Audi A4 Allroad dès maintenant pour une
        expérience inégalée.
        <br />
        <br />
        Capacité: 4 passagers.
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
  ["Temps", "Prix avec chauffeur"],
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

const getVehiculeImageUrl = (name: string): string => {
  return new URL(`../../assets/vehicules/${name}`, import.meta.url).href;
};

const images = [
  { id: 1, src: getVehiculeImageUrl("audi_a4/audiA4_1.jpg") },
  { id: 2, src: getVehiculeImageUrl("audi_a4/audiA4_2.jpg") },
  { id: 3, src: getVehiculeImageUrl("audi_a4/audiA4_3.jpg") },
  { id: 4, src: getVehiculeImageUrl("audi_a4/audiA4_4.jpg") },
  { id: 5, src: getVehiculeImageUrl("audi_a4/audiA4_5.jpg") },
  { id: 6, src: getVehiculeImageUrl("audi_a4/audiA4_6.jpg") },
  { id: 7, src: getVehiculeImageUrl("audi_a4/audiA4_7.jpg") },
  { id: 8, src: getVehiculeImageUrl("audi_a4/audiA4_8.jpg") },
  { id: 9, src: getVehiculeImageUrl("audi_a4/audiA4_9.jpg") },
  { id: 10, src: getVehiculeImageUrl("audi_a4/audiA4_10.jpg") },
  { id: 11, src: getVehiculeImageUrl("audi_a4/audiA4_11.jpg") },
  { id: 12, src: getVehiculeImageUrl("audi_a4/audiA4_12.jpg") },
  { id: 13, src: getVehiculeImageUrl("audi_a4/audiA4_13.jpg") },
  { id: 14, src: getVehiculeImageUrl("audi_a4/audiA4_14.jpg") },
];

onMounted(() => {
  window.scrollTo(0, el.value!.offsetTop - 20);
});
</script>
