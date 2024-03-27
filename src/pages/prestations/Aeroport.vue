<template>
  <div ref="el" class="my-20">
    <div class="my-10 mx-10 sm:my-20 md:mx-40">
      <p class="text-base md:text-lg lg:text-xl">
        Bienvenue chez LB Prestacar, votre partenaire privilégié pour des
        trajets d'exception vers l'aéroport ou la gare. Nous sommes fiers
        de vous offrir une expérience de voyage unique, alliant luxe, confort
        et ponctualité, grâce à nos services de location de véhicules de luxe
        avec chauffeur.
        <br />
        <br />
        Chez LB Prestacar, nous comprenons l'importance de commencer ou de
        conclure votre voyage dans les meilleures conditions. C'est pourquoi
        nous avons spécialement conçu nos prestations de chauffeur privé pour
        répondre à vos besoins lors de vos déplacements vers et depuis l'aéroport
        ou la gare.
        <br />
        <br />
        Nos chauffeurs professionnels et expérimentés sont soigneusement sélectionnés
        pour vous offrir un service haut de gamme. À bord de nos véhicules de luxe,
        vous bénéficierez d'un environnement raffiné, d'un confort exceptionnel et
        d'une tranquillité d'esprit absolue. Nous nous engageons à vous conduire à
        destination en toute sécurité, tout en respectant scrupuleusement les horaires
        afin de garantir votre ponctualité.
        <br />
        <br />
        Pour les voyageurs d'affaires pressés, nos chauffeurs connaissent les
        itinéraires les plus rapides et les plus efficaces, assurant ainsi une
        transition en douceur entre votre lieu de départ et l'aéroport ou la gare.
        De plus, nos véhicules sont équipés des dernières technologies pour vous permettre
        de rester connecté et productif pendant le trajet.
        <br />
        <br />
        Notre flotte diversifiée de véhicules de luxe s'adapte à vos besoins spécifiques,
        que vous voyagiez en solo, en couple, en famille ou en groupe. LB Prestacar s'engage
        à personnaliser chaque trajet pour répondre à vos attentes les plus exigeantes.
        <br />
        <br />
        Optez pour LB Prestacar et transformez vos déplacements vers l'aéroport ou la gare
        en une expérience mémorable. Réservez dès maintenant votre chauffeur privé en ligne
        et découvrez le summum du luxe, de la discrétion et du service exceptionnel. Voyagez
        avec style, voyagez avec LB Prestacar.
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
    src: getVehiculeImage("cadillac_escalade/cadillac-2.jpg"),
    avif: getVehiculeImageAvif("cadillac_escalade/cadillac-1.avif"),
    webp: getVehiculeImageWebp("cadillac_escalade/cadillac7.webp"),
  },
  {
    id: 5,
    src: getVehiculeImage("cadillac_escalade/cadillac7.jpg"),
    avif: getVehiculeImageAvif("cadillac_escalade/cadillac7.avif"),
    webp: getVehiculeImageWebp("cadillac_escalade/cadillac7.webp"),
  },
  {
    id: 6,
    src: getVehiculeImage("audi_a4/audiA4_3.jpg"),
    avif: getVehiculeImageAvif("audi_a4/audiA4_3.avif"),
    webp: getVehiculeImageWebp("audi_a4/audiA4_3.webp"),
  },
  {
    id: 7,
    src: getVehiculeImage("audi_a4/audiA4_4.jpg"),
    avif: getVehiculeImageAvif("audi_a4/audiA4_4.avif"),
    webp: getVehiculeImageWebp("audi_a4/audiA4_4.webp"),
  },
  {
    id: 8,
    src: getVehiculeImage("audi_a4/audiA4_11.jpg"),
    avif: getVehiculeImageAvif("audi_a4/audiA4_11.avif"),
    webp: getVehiculeImageWebp("audi_a4/audiA4_11.webp"),
  },
];

onMounted(() => {
  window.scrollTo(0, el.value!.offsetTop - 20);
});
</script>
