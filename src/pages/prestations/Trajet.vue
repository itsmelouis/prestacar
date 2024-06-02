<template>
  <div ref="el" class="my-20">
    <div class="my-10 mx-10 sm:my-20 md:mx-40">
      <p class="text-base md:text-lg lg:text-xl">
        Bienvenue chez LB Prestacar, votre partenaire de confiance pour des trajets
        en soirée aussi élégants qu'inoubliables. Notre service de location de véhicules
        de luxe avec chauffeur est spécialement conçu pour répondre à toutes vos exigences
        lors de vos sorties nocturnes. Que ce soit pour une soirée en tête-à-tête, une
        célébration spéciale ou un événement mondain, notre flotte de véhicules prestigieux
        et nos chauffeurs professionnels sont là pour sublimer chaque instant.
        <br />
        <br />
        Lorsque vous choisissez LB Prestacar pour vos déplacements en soirée, vous optez pour
        le raffinement, le confort et l'élégance. Nos chauffeurs expérimentés assurent un service
        de porte-à-porte, vous déposant avec style à l'entrée de votre destination et vous
        accueillant chaleureusement à la fin de votre soirée. Profitez de chaque moment sans vous
        soucier du trajet, car nous mettons un point d'honneur à rendre vos déplacements aussi
        luxueux que l'événement que vous célébrez.
        <br />
        <br />
        Notre flotte diversifiée comprend des véhicules de luxe soigneusement entretenus, adaptés
        à toutes les occasions. Que vous optiez pour une berline élégante, un SUV spacieux ou une
        limousine somptueuse, LB Prestacar veille à ce que chaque détail réponde à vos attentes
        les plus exigeantes.
        <br />
        <br />
        Optimisez votre expérience en faisant confiance à notre service de chauffeur privé en soirée.
        Que vous vous rendiez à un dîner exclusif, une soirée VIP ou une réception de gala, notre
        équipe s'assure que chaque trajet reflète le prestige de votre événement. LB Prestacar
        se positionne en leader du marché des services de chauffeur privé en soirée, offrant
        non seulement des véhicules de luxe, mais également une expertise inégalée en matière
        de service client.
        <br />
        <br />
        Réservez dès maintenant votre trajet avec LB Prestacar et découvrez comment nous
        transformons vos déplacements en une expérience élégante et mémorable. Parce que
        chaque soirée mérite d'être célébrée avec style, faites de LB Prestacar votre
        choix privilégié pour un service de chauffeur privé exceptionnel.
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
    src: getVehiculeImage("lincoln_towncar/limo.jpg"),
    avif: getVehiculeImageAvif("lincoln_towncar/limo.avif"),
    webp: getVehiculeImageWebp("lincoln_towncar/limo.webp"),
  },
  {
    id: 2,
    src: getVehiculeImage("lincoln_towncar/limo-11.jpg"),
    avif: getVehiculeImageAvif("lincoln_towncar/limo-10.avif"),
    webp: getVehiculeImageWebp("lincoln_towncar/limo-10.webp"),
  },
  {
    id: 3,
    src: getVehiculeImage("cadillac_escalade/cadillac6.jpg"),
    avif: getVehiculeImageAvif("cadillac_escalade/cadillac6.avif"),
    webp: getVehiculeImageWebp("cadillac_escalade/cadillac6.webp"),
  },
  {
    id: 4,
    src: getVehiculeImage("cadillac_escalade/cadillac7.jpg"),
    avif: getVehiculeImageAvif("cadillac_escalade/cadillac7.avif"),
    webp: getVehiculeImageWebp("cadillac_escalade/cadillac7.webp"),
  },
  {
    id: 5,
    src: getVehiculeImage("prestations/nouvel-an.jpg"),
    avif: getVehiculeImageAvif("prestations/nouvel-an.avif"),
    webp: getVehiculeImageWebp("prestations/nouvel-an.webp"),
  },
  {
    id: 5,
    src: getVehiculeImage("audi_a4/audiA4_3.jpg"),
    avif: getVehiculeImageAvif("audi_a4/audiA4_3.avif"),
    webp: getVehiculeImageWebp("audi_a4/audiA4_3.webp"),
  },
  {
    id: 6,
    src: getVehiculeImage("audi_a4/audiA4_4.jpg"),
    avif: getVehiculeImageAvif("audi_a4/audiA4_4.avif"),
    webp: getVehiculeImageWebp("audi_a4/audiA4_4.webp"),
  },
  {
    id: 7,
    src: getVehiculeImage("audi_a4/audiA4_11.jpg"),
    avif: getVehiculeImageAvif("audi_a4/audiA4_11.avif"),
    webp: getVehiculeImageWebp("audi_a4/audiA4_11.webp"),
  },
];

onMounted(() => {
  window.scrollTo(0, el.value!.offsetTop - 20);
});
</script>
