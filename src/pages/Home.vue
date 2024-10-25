<template>
  <div class="bg-slate-50">
    <Header></Header>
    <div
      class="flex flex-col items-center space-y-8 md:space-y-16 mb-10 rounded-md min-h-[50vh]"
    >
      <CarouselComp :items="images"></CarouselComp>
      <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
        Bienvenue sur PrestaCar !
      </h1>
      <p class="text-base md:text-lg lg:text-xl text-center">
        Une envie de voyager dans la voiture de vos rêves pour le moment le plus
        important de votre vie ? N'attendez plus !
      </p>
      <h2 class="text-xl md:text-2xl lg:text-3xl font-bold uppercase">
        Découvrez nos véhicules
      </h2>
      <p class="text-base md:text-lg lg:text-xl text-center">
        Organisez vos déplacements à plusieurs grâce à nos véhicules de confort
        et de prestige. <br />
        📍 Basé sur
        <a
          href="https://www.google.fr/maps/place/59300+Valenciennes/"
          class="underline"
          >Valenciennes</a
        >
      </p>

      <router-link
        to="/vehicules"
        class="bg-yellow-400 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full"
        >Plus d'infos</router-link
      >
    </div>
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import CarouselComp from "../components/CarouselComp.vue";
import { getVehiculeImage } from "../utils/importImages";
import { getVehiculeImageAvif } from "../utils/importImages";
import { getVehiculeImageWebp } from "../utils/importImages";

const images = [
  { id: 1, 
    src: getVehiculeImage("cadillac_escalade/cadillac14.jpg"),
    avif: getVehiculeImageAvif("cadillac_escalade/cadillac14.avif"),
    webp: getVehiculeImageWebp("cadillac_escalade/cadillac14.webp"),
   },
  { id: 2, 
    src: getVehiculeImage("lincoln_towncar/limo-6.jpg"),
    avif: getVehiculeImageAvif("lincoln_towncar/limo-6.avif"),
    webp: getVehiculeImageWebp("lincoln_towncar/limo-6.webp"),
   },
  { id: 3, 
    src: getVehiculeImage("combi_t1/combi9.jpg"),
    avif: getVehiculeImageAvif("combi_t1/combi9.avif"),
    webp: getVehiculeImageWebp("combi_t1/combi9.webp"),
   },
  { id: 4,
     src: getVehiculeImage("prestations/salon-mariage.jpg"),
     avif: getVehiculeImageAvif("prestations/salon-mariage.avif"),
     webp: getVehiculeImageWebp("prestations/salon-mariage.webp"),
  },
  { id: 5, 
    src: getVehiculeImage("mini/mini-15.jpg"),
    avif: getVehiculeImageAvif("mini/mini-15.avif"),
    webp: getVehiculeImageWebp("mini/mini-15.webp"),
   },
  { id: 6, 
    src: getVehiculeImage("rolls_royce_phantom/rolls-14.jpg"),
    avif: getVehiculeImageAvif("rolls_royce_phantom/rolls-14.avif"),
    webp: getVehiculeImageWebp("rolls_royce_phantom/rolls-14.webp"),
   },
  { id: 7, 
    src: getVehiculeImage("bentley_continental_gt_sport/bentley-2-1.jpg"),
    avif: getVehiculeImageAvif("bentley_continental_gt_sport/bentley-2-1.avif"),
    webp: getVehiculeImageWebp("bentley_continental_gt_sport/bentley-2-1.webp"),
  },
  { id: 8, 
    src: getVehiculeImage("porsche_986/boxster-17.jpg"),
    avif: getVehiculeImageAvif("porsche_986/boxster-17.avif"),
    webp: getVehiculeImageWebp("porsche_986/boxster-17.webp"),
   },
  { id: 9, 
    src: getVehiculeImage("maserati/maserati-2.jpg") ,
    avif: getVehiculeImageAvif("maserati/maserati-2.avif"),
    webp: getVehiculeImageWebp("maserati/maserati-2.webp"),
  },
  { id: 10, 
    src: getVehiculeImage("ford_capri/capri.jpg"),
    avif: getVehiculeImageAvif("ford_capri/capri.avif"),
    webp: getVehiculeImageWebp("ford_capri/capri.webp"),
   },
  { id: 11, 
    src: getVehiculeImage("mercedes/mercedes.jpg") ,
    avif: getVehiculeImageAvif("mercedes/mercedes.avif"),
    webp: getVehiculeImageWebp("mercedes/mercedes.webp"),
  },
  { id: 12,
    src: getVehiculeImage("new_beetle/new-beetle21.jpg"),
    avif: getVehiculeImageAvif("new_beetle/new-beetle21.avif"),
    webp: getVehiculeImageWebp("new_beetle/new-beetle21.webp"),
   },
  { id: 13, 
    src: getVehiculeImage("mustang_gt/mustang-15.jpg"),
    avif: getVehiculeImageAvif("mustang_gt/mustang-15.avif"),
    webp: getVehiculeImageWebp("mustang_gt/mustang-15.webp"),
  },
];
</script>

<style></style>
