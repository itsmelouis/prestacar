<template>
  <div class="flex justify-center w-full">
    <div class="w-full md:w-1/3">
      <Carousel class="overflow-hidden">
        <Slide v-for="prop in props.items" :key="prop.id">
          <div class="flex justify-center items-center">
            <img :src="prop.src" class="max-h-full" />
          </div>
        </Slide>

        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
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

<style scoped>
.carousel__slide {
  padding: 10px;
}
</style>
