<template>
  <Carousel :autoplay="2000" :wrap-around="true">
    <Slide v-for="prop in props.items" :key="prop.id">
      <div class="max-h-96 flex justify-center items-center">
        <img :src="prop.src" class="w-full h-auto" />
      </div>
    </Slide>
  </Carousel>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

type CarouselImg = {
  id: number;
  src: string;
};

const props = defineProps({
  items: {
    type: Object as PropType<CarouselImg[]>,
    required: true,
  },
});
</script>
