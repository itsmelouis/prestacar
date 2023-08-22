<template>
  <div ref="el" class="my-20">
    <div class="my-10 mx-10 sm:my-20 md:mx-40">
      <p class="text-base md:text-lg lg:text-xl">
        Le <span class="font-bold">Cadillac Escalade</span> est un des véhicules
        les plus célèbres de la marque américaine. Esthétique et confortable, ce
        4x4 de plus de 400 chevaux vous dévoilera sa vitesse combinée au luxe
        pour une expérience unique. Son V8 ne vous laissera pas indifférent et
        son confort vous permettra de passer un agréable moment.
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

const getVehiculeImageUrl = (name: string): string => {
  return new URL(`../../assets/vehicules/${name}`, import.meta.url).href;
};

const images = [
  { id: 1, src: getVehiculeImageUrl("cadillac_escalade/cadillac1.jpg") },
  { id: 2, src: getVehiculeImageUrl("cadillac_escalade/cadillac2.jpg") },
  { id: 3, src: getVehiculeImageUrl("cadillac_escalade/cadillac3.jpg") },
  { id: 4, src: getVehiculeImageUrl("cadillac_escalade/cadillac4.jpg") },
  { id: 5, src: getVehiculeImageUrl("cadillac_escalade/cadillac5.jpg") },
  { id: 6, src: getVehiculeImageUrl("cadillac_escalade/cadillac6.jpg") },
  { id: 7, src: getVehiculeImageUrl("cadillac_escalade/cadillac7.jpg") },
  { id: 8, src: getVehiculeImageUrl("cadillac_escalade/cadillac8.jpg") },
  { id: 9, src: getVehiculeImageUrl("cadillac_escalade/cadillac9.jpg") },
  { id: 10, src: getVehiculeImageUrl("cadillac_escalade/cadillac10.jpg") },
  { id: 11, src: getVehiculeImageUrl("cadillac_escalade/cadillac11.jpg") },
  { id: 12, src: getVehiculeImageUrl("cadillac_escalade/cadillac12.jpg") },
  { id: 13, src: getVehiculeImageUrl("cadillac_escalade/cadillac13.jpg") },
];

onMounted(() => {
  window.scrollTo(0, el.value!.offsetTop - 20);
});
</script>
