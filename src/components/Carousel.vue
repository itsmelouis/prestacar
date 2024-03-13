<template>
  <div class="flex justify-center w-full">
    <div class="w-full md:w-2/3 lg:w-1/2 xl:w-1/3">
      <Carousel class="overflow-hidden">
        <Slide v-for="prop in props.items" :key="prop.id">
          <div class="flex justify-center items-center">
            <picture>
              <source :srcset="prop.avif" type="image/avif" />
              <source :srcset="prop.webp" type="image/webp" />
              <img :src="prop.src" class="w-full h-auto object-cover" />
            </picture>
          </div>
        </Slide>

        <template #addons>
          <navigation>
            <template #next>
              <right-arrow></right-arrow>
            </template>
            <template #prev>
              <LeftArrow></LeftArrow>
            </template>
          </navigation>
          <Pagination class="mt-4" />
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import RightArrow from "../components/Icons/RightArrow.vue";
import LeftArrow from '../components/Icons/LeftArrow.vue';

type CarouselImg = {
  id: number;
  src: string;
  avif: string;
  webp: string;
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

.carousel-next:hover{
  color:black;
}
</style>
