<template>
  <router-link
      :to="props.items.href" class="shadow-lg transition duration-300 hover:bg-slate-200 hover:scale-105">
    <div
        class="flex flex-col justify-center items-center border-2 rounded space-y-4 pb-8 w-auto"
    >
      <picture class="h60 w-full">
          <source :srcset="props.items.avif" type="image/avif" />
          <source :srcset="props.items.webp" type="image/webp" />
          <img
            :src="props.items.src"
            :alt="props.items.car"
            class="w-full object-cover h-60 rounded-t"
          />
      </picture>
      <p class="font-semibold text-lg lg:text-xl text-center">
        {{ props.items.car }}
      </p>
      <div class="flex flex-row gap-2">
        <router-link
            :to="props.items.href"
            class="bg-yellow-400 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full text-center"
        >Plus d'infos</router-link>
        <router-link
            to="/contact"
            class="bg-yellow-400 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full text-center"
        >Réserver</router-link>
      </div>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import { PropType } from "vue";

type CardVoiture = {
  car: string;
  avif?: string;
  webp?: string;
  src: string;
  href: string;
};

const props = defineProps({
  items: {
    type: Object as PropType<CardVoiture>,
    required: true,
  },
});
</script>
