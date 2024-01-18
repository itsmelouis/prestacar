<template>
  <div ref="el" class="my-20">
    <div class="my-10 mx-10 sm:my-20 md:mx-40">
      <p class="text-base md:text-lg lg:text-xl">
        Bienvenue dans l'univers de l'élégance et du raffinement où chaque détail compte
        pour faire de votre jour J un moment inoubliable. Chez LB Prestacar, nous sommes
        fiers de vous proposer votre expérience de location de voiture de luxe avec chauffeur
        exceptionnelle, spécialement conçue pour sublimer votre mariage.
        <br />
        <br />
        Votre mariage est une célébration unique de l'amour et du bonheur, et notre flotte
        de véhicules prestigieux s'aligne parfaitement sur cette philosophie. Imaginez-vous
        arriver en toute splendeur à votre lieu de cérémonie dans une limousine luxueuse,
        élégante et impeccable. Nos chauffeurs expérimentés vous accueilleront avec courtoisie et
        professionnalisme, veillant à ce que chaque instant de votre trajet soit empreint de confort
        et de glamour.
        Notre sélection exclusive de voitures de mariage comprend des modèles prestigieux, des berlines
        de luxe comme notre Rolls Royce Phantom ou notre limousine spacieuse, toutes entretenues avec le
        plus grand soin pour garantir une expérience exceptionnelle. Que vous rêviez d'une arrivée majestueuse
        devant l'église ou d'un départ étincelant vers votre lieu de réception, nos véhicules sont la parfaite
        incarnation du luxe et du style.
        <br />
        <br />
        Chez LB Prestacar, nous comprenons l'importance de chaque détail de votre journée spéciale. C'est pourquoi
        notre service personnalisé s'étend au-delà du simple transport. Si vous avez préalablement sélectionner des
        fleurs pour embellit le véhicule, notre forfait mariage comprends le trajet chez le fleuriste, ainsi
        que les trajets pour vous conduire sur le lieu de la cérémonie et la salle des fêtes.
        <br />
        <br />
        Pour une location de voiture de mariage qui allie luxe, élégance et service exceptionnel, choisissez LB Prestacar.
        Faites de votre jour de mariage une expérience inoubliable, où le voyage est aussi mémorable que la destination.
        Réservez dès aujourd'hui et laissez-nous vous accompagner dans ce moment magique où chaque instant est une
        célébration de l'amour.
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
  ["Évènement", "Sur devis"],
];


const images = [
  {
    id: 1,
    src: getVehiculeImage("cadillac_escalade/cadillac14.jpg"),
    avif: getVehiculeImageAvif("cadillac_escalade/cadillac14.avif"),
    webp: getVehiculeImageWebp("cadillac_escalade/cadillac14.webp"),
  },
  {
    id: 2,
    src: getVehiculeImage("lincoln_towncar/limo-12.jpg"),
    avif: getVehiculeImageAvif("lincoln_towncar/limo-3.avif"),
    webp: getVehiculeImageWebp("lincoln_towncar/limo-6.webp"),
  },
  {
    id: 3,
    src: getVehiculeImage("cadillac_escalade/cadillac15.jpg"),
    avif: getVehiculeImageAvif("cadillac_escalade/cadillac-2.avif"),
    webp: getVehiculeImageWebp("cadillac_escalade/cadillac3.webp"),
  },
  {
    id: 4,
    src: getVehiculeImage("rolls_royce_phantom/rolls.jpg"),
    avif: getVehiculeImageAvif("rolls_royce_phantom/rolls.avif"),
    webp: getVehiculeImageWebp("rolls_royce_phantom/rolls.webp"),
  },
  {
    id: 5,
    src: getVehiculeImage("rolls_royce_corniche/corniche6.jpg"),
    avif: getVehiculeImageAvif("rolls_royce_corniche/corniche6.avif"),
    webp: getVehiculeImageWebp("rolls_royce_corniche/corniche6.webp"),
  },
  {
    id: 6,
    src: getVehiculeImage("bentley_continental_gt_sport/bentley-4.jpg"),
    avif: getVehiculeImageAvif("bentley_continental_gt_sport/bentley-4.avif"),
    webp: getVehiculeImageWebp("bentley_continental_gt_sport/bentley-4.webp"),
  },
  {
    id: 7,
    src: getVehiculeImage("ford-mustang/mustang_blanche-2.jpg"),
    avif: getVehiculeImageAvif("mustang_gt/mustang.avif"),
    webp: getVehiculeImageWebp("mustang_gt/mustang.webp"),
  },
  {
    id: 8,
    src: getVehiculeImage("combi_t1/combi2.jpg"),
    avif: getVehiculeImageAvif("combi_t1/combi2.avif"),
    webp: getVehiculeImageWebp("combi_t1/combi2.webp"),
  },
  {
    id: 9,
    src: getVehiculeImage("coccinel_cox/cox3.jpg"),
    avif: getVehiculeImageAvif("coccinel_cox/cox3.avif"),
    webp: getVehiculeImageWebp("coccinel_cox/cox3.webp"),
  },
  {
    id: 10,
    src: getVehiculeImage("ford_capri/capri-7.jpg"),
    avif: getVehiculeImageAvif("ford_capri/capri-7.avif"),
    webp: getVehiculeImageWebp("ford_capri/capri-7.webp"),
  },
];

onMounted(() => {
  window.scrollTo(0, el.value!.offsetTop - 20);
});
</script>
