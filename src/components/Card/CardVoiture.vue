<template>
  <router-link
      :to="props.items.href" class="shadow-lg transition duration-300 hover:bg-slate-200 hover:scale-105">
    <div
        class="flex flex-col justify-center items-center border-2 rounded space-y-4 pb-8 w-auto"
    >
      <img
          :src="props.items.src"
          :alt="props.items.car"
          class="w-full h-60 object-cover rounded-t"
      />
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
