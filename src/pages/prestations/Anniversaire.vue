<template>
  <div ref="el" class="my-20">
    <div class="my-10 mx-10 sm:my-20 md:mx-40">
      <p class="text-base md:text-lg lg:text-xl">
        Bienvenue chez LB Prestacar, votre partenaire de confiance pour rendre vos
        célébrations d'anniversaire inoubliables. Nous sommes fiers de vous offrir
        une expérience de location de voiture de luxe avec chauffeur qui transcende
        l'ordinaire, ajoutant une touche d'élégance et de glamour à vos moments spéciaux.
        <br />
        <br />
        Chez LB Prestacar, nous comprenons l'importance de chaque anniversaire et
        nous nous engageons à surpasser vos attentes. Que vous célébriez un anniversaire
        romantique en couple, une fête intime en famille ou une soirée glamour entre amis,
        notre flotte exclusive de véhicules de luxe est prête à répondre à tous vos besoins.
        <br />
        <br />
        Nos chauffeurs professionnels et courtois sont formés pour vous offrir un service
        personnalisé, garantissant que votre journée spéciale soit non seulement sans souci,
        mais également mémorable. Imaginez-vous arrivant à votre lieu de fête dans une limousine
        élégante, une Rolls Royce Phantom ou même une Bentley Continental GT Sport, suscitant
        l'admiration de tous les invités.
        <br />
        <br />
        Chez LB Prestacar, nous comprenons l'importance des détails, c'est pourquoi notre flotte
        diversifiée propose une sélection de véhicules adaptés à chaque style et préférence. Des
        intérieurs somptueux aux équipements de pointe, chaque voiture est soigneusement entretenue
        pour vous offrir une expérience de conduite exceptionnelle.
        <br />
        <br />
        Notre processus de réservation convivial vous permet de personnaliser votre expérience en
        fonction de vos besoins spécifiques. Que vous souhaitiez une location pour quelques heures
        ou toute la journée, LB Prestacar est là pour vous offrir une solution sur mesure.
        <br />
        <br />
        Faites de votre prochain anniversaire une expérience unique et luxueuse avec LB Prestacar.
        Réservez dès maintenant et découvrez comment notre engagement envers l'excellence peut
        transformer votre célébration en un événement véritablement inoubliable. Parce que chez
        LB Prestacar, nous ne faisons pas que louer des voitures, nous créons des souvenirs qui
        durent toute une vie.
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
  }
];

onMounted(() => {
  window.scrollTo(0, el.value!.offsetTop - 20);
});
</script>
