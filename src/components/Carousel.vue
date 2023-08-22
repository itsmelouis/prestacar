<template>
  <div class="flex justify-center w-full">
    <div class="w-full md:w-1/3">
      <Carousel class="overflow-hidden">
        <Slide v-for="prop in props.items" :key="prop.id">
          <div class="max-h-96 flex justify-center items-center">
            <div class="image-container">
              <img
                :src="prop.src"
                class="object-cover max-h-full"
                ref="imageRef"
              />
            </div>
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
import { PropType, onMounted, ref } from "vue";
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

const imageRef = ref<HTMLImageElement | null>(null);

onMounted(() => {
  if (imageRef.value) {
    imageRef.value.onload = () => {
      const container = imageRef.value?.parentElement?.parentElement;
      if (container) {
        const containerHeight = container.clientHeight;
        const imageHeight = imageRef.value?.clientHeight;
        if (imageHeight && imageHeight > containerHeight) {
          imageRef.value!.style.height = "100%";
        }
      }
    };
  }
});
</script>

<style scoped>
.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  color: #fff;
}

.carousel__prev:hover,
.carousel__next:hover {
  color: #fff;
}
</style>
