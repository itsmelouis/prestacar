<template>
  <div class="bg-slate-50">
    <Header></Header>
    <div
      class="flex flex-col justify-center items-center space-y-8 md:space-y-16 my-10"
    >
      <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
        Prendre contact avec nous !
      </h1>
      <p class="text-base md:text-lg lg:text-xl text-center">
        Vous êtes tombés amoureux d'une de nos perles ? Des questions ? Nous
        sommes à votre disposition !
      </p>
      <div
        class="flex flex-col md:flex-row items-center justify-center w-full space-y-8 md:space-y-0 md:space-x-8"
      >
        <a
          href="tel:+330769751735"
          class="flex flex-col justify-center items-center p-8 rounded hover:bg-slate-100 hover:cursor-pointer md:w-1/4 gap-3"
        >
          <PhoneIcon />
          <p class="text-base md:text-lg lg:text-xl text-center">
            06 52 74 34 05
          </p>
        </a>
        <a
          href="mailto:contact@lb-prestacar.com"
          class="flex flex-col justify-center items-center p-8 rounded hover:bg-slate-100 hover:cursor-pointer md:w-1/4 gap-3"
        >
          <MailIcon />
          <p class="text-base md:text-lg lg:text-xl text-center">
            contact@lb-prestacar.com
          </p>
        </a>
      </div>
      <div class="flex flex-col items-center justify-center w-full">
        <p class="text-base md:text-lg lg:text-xl text-center">
          Nous sommes aussi présents sur les réseaux sociaux pour toute demande
          ou aide.
        </p>
        <div
          class="flex flex-row w-full gap-5 justify-center items-center mt-8"
        >
          <a
            href="https://www.instagram.com/lbprestacar/"
            target="_blank"
            class="p-5 hover:bg-slate-200 rounded-full"
          >
            <InstagramIcon class="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />
          </a>
          <a
            href="https://www.facebook.com/lbprestacar"
            target="_blank"
            class="p-5 hover:bg-slate-200 rounded-full"
          >
            <FacebookIcon class="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />
          </a>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";

import PhoneIcon from "../components/Icons/PhoneIcon.vue";
import MailIcon from "../components/Icons/MailIcon.vue";
import InstagramIcon from "../components/Icons/InstagramIcon.vue";
import FacebookIcon from "../components/Icons/FacebookIcon.vue";
</script>
