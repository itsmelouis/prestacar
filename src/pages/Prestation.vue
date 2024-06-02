<template>
  <div class="bg-slate-50">
    <Header></Header>
    <div
        class="flex flex-col justify-center items-center space-y-8 md:space-y-16 my-10"
    >
      <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
        Nos Prestations
      </h1>
      <div class="grid grid-cols-1 md:grid-cols-3 md:gap-3 md:justify-center">
        <CardVoiture
            v-for="value in summary"
            :key="value.car"
            :items="value"
        ></CardVoiture>
      </div>
      <p
          class="text-xl md:text-2xl lg:text-3xl font-semibold text-center underline"
      >
        Envie d'une prestation non présente sur le catalogue ? N'hésitez pas à nous
        contacter !
      </p>
    </div>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import CardVoiture from "../components/Card/CardVoiture.vue";
import { getVehiculeImage } from "../utils/importImages";

const summary = [
  {
    car: "Mariage",
    src: getVehiculeImage("mini/mini-15.jpg"),
    href: "/prestation/mariage",
  },
  {
    car: "Anniversaire",
    src: getVehiculeImage("prestations/birthday.jpg"),
    href: "/prestation/anniversaire",
  },
  {
    car: "Tournage Film / Clip",
    src: getVehiculeImage("prestations/film.jpg"),
    href: "/prestation/tournage",
  },
  {
    car: "Enterrement vie de Garçon / Jeune Fille",
    src: getVehiculeImage("prestations/enterrement.jpg"),
    href: "/prestation/enterrement",
  },
  {
    car: "Trajet Aéroport",
    src: getVehiculeImage("prestations/aeroport.jpg"),
    href: "/prestation/aeroport",
  },
  {
    car: "Trajet Restaurant / Discothèque",
    src: getVehiculeImage("prestations/soiree.jpg"),
    href: "/prestation/trajet",
  },

];
</script>
