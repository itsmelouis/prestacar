<script setup lang="ts">
import ArrowUpIcon from "./Icons/ArrowUpIcon.vue";
import { ref, computed, onMounted, onBeforeUnmount } from "vue";

const position = ref(0),
  isActive = computed(() => position.value > 100),
  updatePosition = () => (position.value = window.scrollY),
  goTop = () => window.scrollTo(0, 0);

onMounted(() => window.addEventListener("scroll", updatePosition));
onBeforeUnmount(() => window.removeEventListener("scroll", updatePosition));
</script>

<template>
  <div
    v-show="isActive"
    class="hidden right-6 bottom-4 z-50 fixed items-center md:flex md:space-x-2"
  >
    <button
      class="text-black bg-yellow-400 hover:bg-yellow-600 cursor-pointer flex space-x-2 transition-colors items-center justify-center rounded-full p-2 h-10 w-10"
      @click="goTop"
    >
      <ArrowUpIcon />
    </button>
  </div>
</template>
