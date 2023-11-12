<template>
  <div ref="el" class="my-20">
    <div class="my-10 mx-10 sm:my-20 md:mx-40">
      <p class="text-base md:text-lg lg:text-xl">
        La sublime <span class="font-bold">New Beetle</span> cabriolet de chez
        Volkswagen vous permettra de sillonner les routes de la région. Ce
        véhicule vous offrira le plaisir du cabriolet lors des journées les plus
        ensoleillées. Son moteur diesel de 105 chevaux vous permettra de faire
        des trajets économiques et dynamiques.
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
  { id: 1, src: getVehiculeImageUrl("new_beetle/new-beetle10.jpg") },
  { id: 2, src: getVehiculeImageUrl("new_beetle/new-beetle11.jpg") },
  { id: 3, src: getVehiculeImageUrl("new_beetle/new-beetle12.jpg") },
  { id: 4, src: getVehiculeImageUrl("new_beetle/new-beetle13.jpg") },
  { id: 5, src: getVehiculeImageUrl("new_beetle/new-beetle14.jpg") },
  { id: 6, src: getVehiculeImageUrl("new_beetle/new-beetle15.jpg") },
  { id: 7, src: getVehiculeImageUrl("new_beetle/new-beetle16.jpg") },
  { id: 8, src: getVehiculeImageUrl("new_beetle/new-beetle17.jpg") },
  { id: 9, src: getVehiculeImageUrl("new_beetle/new-beetle18.jpg") },
  { id: 10, src: getVehiculeImageUrl("new_beetle/new-beetle19.jpg") },
  { id: 11, src: getVehiculeImageUrl("new_beetle/new-beetle20.jpg") },
  { id: 12, src: getVehiculeImageUrl("new_beetle/new-beetle21.jpg") },
  { id: 13, src: getVehiculeImageUrl("new_beetle/new-beetle22.jpg") },
  { id: 14, src: getVehiculeImageUrl("new_beetle/new-beetle23.jpg") },
  { id: 15, src: getVehiculeImageUrl("new_beetle/new-beetle8.jpg") },
  { id: 16, src: getVehiculeImageUrl("new_beetle/new-beetle9.jpg") },
];

onMounted(() => {
  window.scrollTo(0, el.value!.offsetTop - 20);
});
</script>
