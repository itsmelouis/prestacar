<template>
  <div ref="el" class="my-20">
    <div class="my-10 mx-10 sm:my-20 md:mx-40">
      <p class="text-base md:text-lg lg:text-xl">
        Bienvenue chez LB Prestacar, votre partenaire privilégié pour des moments inoubliables
        lors des enterrements de vie de jeune fille et de vie de garçon. Nous sommes fiers de
        mettre à votre disposition nos limousines de luxe avec chauffeur, assurant un service
        exceptionnel pour ces occasions uniques.
        <br />
        <br />
        Lorsqu'il s'agit de célébrer la fin d'une ère et le début d'une nouvelle vie, LB Prestacar
        s'engage à rendre ces moments spéciaux encore plus mémorables. Pour l'enterrement de vie de
        jeune fille, nos limousines élégantes et nos chauffeurs professionnels sont prêts à vous
        accompagner pour une journée pleine de rires, de complicité et de souvenirs. Choisissez parmi
        notre gamme de véhicules de luxe et offrez à la future mariée une expérience VIP digne de son
        grand jour.
        <br />
        <br />
        Les enterrements de vie de garçon sont également une spécialité de LB Prestacar. Nous
        comprenons l'importance de marquer cette transition vers le mariage avec style et élégance.
        Nos chauffeurs expérimentés s'assurent que le futur marié et ses amis vivent une journée
        inoubliable, en profitant de chaque instant à bord de nos limousines haut de gamme. Que ce soit
        pour une virée en ville, une escapade aventureuse ou une soirée exclusive, LB Prestacar garantit
        une expérience exceptionnelle.
        <br />
        <br />
        En plus de nos limousines de luxe, nous proposons des forfaits personnalisés pour répondre
        à vos besoins spécifiques. Profitez de services sur mesure, des itinéraires flexibles et de
        l'assurance d'un voyage confortable et sûr.
        <br />
        <br />
        Chez LB Prestacar, nous comprenons l'importance de chaque détail pour ces événements spéciaux.
        Faites confiance à notre expertise pour faire de l'enterrement de vie de jeune fille et de vie
        de garçon un moment magique et sans souci. Réservez dès maintenant et laissez-nous vous emmener
        vers des souvenirs inoubliables.
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
  ["Évènement", "Sur devis"],
];

const options = [
  ["Intitulé", "Prix"],
  ["Forfait Boissons / Nourriture", "Sur devis"],
];

const images = [
  {
    id: 1,
    src: getVehiculeImage("lincoln_towncar/limo-1.jpg"),
    avif: getVehiculeImageAvif("lincoln_towncar/limo-4.avif"),
    webp: getVehiculeImageWebp("lincoln_towncar/limo-4.webp"),
  },
  {
    id: 2,
    src: getVehiculeImage("lincoln_towncar/limo-8.jpg"),
    avif: getVehiculeImageAvif("lincoln_towncar/limo-9.avif"),
    webp: getVehiculeImageWebp("lincoln_towncar/limo-9.webp"),
  },
  {
    id: 3,
    src: getVehiculeImage("lincoln_towncar/limo-11.jpg"),
    avif: getVehiculeImageAvif("lincoln_towncar/limo-10.avif"),
    webp: getVehiculeImageWebp("lincoln_towncar/limo-10.webp"),
  },
  {
    id: 4,
    src: getVehiculeImage("cadillac_escalade/cadillac6.jpg"),
    avif: getVehiculeImageAvif("cadillac_escalade/cadillac6.avif"),
    webp: getVehiculeImageWebp("cadillac_escalade/cadillac6.webp"),
  },
  {
    id: 5,
    src: getVehiculeImage("cadillac_escalade/cadillac7.jpg"),
    avif: getVehiculeImageAvif("cadillac_escalade/cadillac7.avif"),
    webp: getVehiculeImageWebp("cadillac_escalade/cadillac7.webp"),
  },
  {
    id: 6,
    src: getVehiculeImage("cadillac_escalade/cadillac-2.jpg"),
    avif: getVehiculeImageAvif("cadillac_escalade/cadillac-1.avif"),
    webp: getVehiculeImageWebp("cadillac_escalade/cadillac7.webp"),
  },
  {
    id: 7,
    src: getVehiculeImage("mustang_blanche/mustang_blanche-5.jpg"),
    avif: getVehiculeImageAvif("mustang_blanche/mustang_blanche-5.avif"),
    webp: getVehiculeImageWebp("mustang_gt/mustang-4.webp"),
  },
  {
    id: 8,
    src: getVehiculeImage("mustang_blanche/mustang_blanche-2.jpg"),
    avif: getVehiculeImageAvif("mustang_blanche/mustang_blanche-2.avif"),
    webp: getVehiculeImageWebp("mustang_gt/mustang-4.webp"),
  },
];

onMounted(() => {
  window.scrollTo(0, el.value!.offsetTop - 20);
});
</script>
