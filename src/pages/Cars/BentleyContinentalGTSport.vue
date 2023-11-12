<template>
  <div ref="el" class="my-20">
    <div class="my-10 mx-10 sm:my-20 md:mx-40">
      <p class="text-base md:text-lg lg:text-xl">
        La <span class="font-bold">Rolls Royce Phantom</span>
        est le modèle emblématique de la marque anglaise mais aussi le summum du
        luxe, parfait pour les mariages elle vous garantira une entrée
        inoubliable.
        <br />
        <br />
        Capacité: 3 passagers (1 recommandé).
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
  ["Évènement", "Sur devis"],
  ["Forfait Mariage", "1000€"],
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
  {
    id: 1,
    src: getVehiculeImageUrl("bentley_continental_gt_sport/bentley.jpg"),
  },
  {
    id: 2,
    src: getVehiculeImageUrl("bentley_continental_gt_sport/bentley-1.jpg"),
  },
  {
    id: 3,
    src: getVehiculeImageUrl("bentley_continental_gt_sport/bentley-2.jpg"),
  },
  {
    id: 4,
    src: getVehiculeImageUrl("bentley_continental_gt_sport/bentley-3.jpg"),
  },
  {
    id: 5,
    src: getVehiculeImageUrl("bentley_continental_gt_sport/bentley-4.jpg"),
  },
  {
    id: 6,
    src: getVehiculeImageUrl("bentley_continental_gt_sport/bentley-5.jpg"),
  },
  {
    id: 7,
    src: getVehiculeImageUrl("bentley_continental_gt_sport/bentley-6.jpg"),
  },
  {
    id: 8,
    src: getVehiculeImageUrl("bentley_continental_gt_sport/bentley-7.jpg"),
  },
  {
    id: 9,
    src: getVehiculeImageUrl("bentley_continental_gt_sport/bentley-8.jpg"),
  },
  {
    id: 10,
    src: getVehiculeImageUrl("bentley_continental_gt_sport/bentley-9.jpg"),
  },
  {
    id: 11,
    src: getVehiculeImageUrl("bentley_continental_gt_sport/bentley-10.jpg"),
  },
  {
    id: 12,
    src: getVehiculeImageUrl("bentley_continental_gt_sport/bentley-11.jpg"),
  },
  {
    id: 13,
    src: getVehiculeImageUrl("bentley_continental_gt_sport/bentley-12.jpg"),
  },
  {
    id: 14,
    src: getVehiculeImageUrl("bentley_continental_gt_sport/bentley-13.jpg"),
  },
  {
    id: 15,
    src: getVehiculeImageUrl("bentley_continental_gt_sport/bentley-14.jpg"),
  },
  {
    id: 16,
    src: getVehiculeImageUrl("bentley_continental_gt_sport/bentley-15.jpg"),
  },
  {
    id: 17,
    src: getVehiculeImageUrl("bentley_continental_gt_sport/bentley-16.jpg"),
  },
  {
    id: 18,
    src: getVehiculeImageUrl("bentley_continental_gt_sport/bentley-17.jpg"),
  },
  {
    id: 19,
    src: getVehiculeImageUrl("bentley_continental_gt_sport/bentley-18.jpg"),
  },
  {
    id: 20,
    src: getVehiculeImageUrl("bentley_continental_gt_sport/bentley-19.jpg"),
  },
];

onMounted(() => {
  window.scrollTo(0, el.value!.offsetTop - 20);
});
</script>
