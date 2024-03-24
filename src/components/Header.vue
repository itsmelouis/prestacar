<template>
  <div class="bg-black">
    <nav class="container mx-auto md:flex md:justify-between md:items-center">
      <div class="flex items-center justify-between">
        <router-link to="/"
          ><img
            src="@/assets/logo_prestacar.png"
            alt="Logo de PrestaCar"
            class="h-40 sm:h-44"
          />
        </router-link>

        <div class="flex flex-row gap-1 md:gap-3 mx-3">
          <a href="https://www.instagram.com/lbprestacar/" target="_blank">
            <instagram-icon class="w-5 h-5 md:w-7 md:h-7 lg:w-9 lg:h-9" />
          </a>
          <a href="https://www.facebook.com/lbprestacar" target="_blank">
            <facebook-icon class="w-5 h-5 md:w-7 md:h-7 lg:w-9 lg:h-9" />
          </a>
        </div>

        <div @click="toggleNav" class="flex mr-2 md:hidden">
          <button
            type="button"
            class="text-gray-100 hover:text-gray-400 focus:outline-none focus:text-gray-400"
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <ul
        :class="showMenu ? 'flex' : 'hidden'"
        class="flex-col my-1 mx-5 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 text-base md:text-lg lg:text-xl">
        <router-link
          to="/vehicules"
          class="text-gray-100 hover:text-yellow-400 transition duration-300"
          :class="{ 'text-yellow-400': $route.path.includes('/vehicules') }"
          ><li>Véhicules</li></router-link>

        <router-link
            to="/prestation"
            class="text-gray-100 hover:text-yellow-400 transition duration-300"
            :class="{ 'text-yellow-400': $route.path.includes('/prestation') }"
        ><li>Prestations</li></router-link>

        <router-link
          to="/contact"
          class="text-gray-100 hover:text-yellow-400 transition duration-300"
          :class="{ 'text-yellow-400': $route.path.includes('/contact') }"
          ><li>Contact</li></router-link>
      </ul>
    </nav>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import InstagramIcon from "../components/Icons/InstagramIcon.vue";
import FacebookIcon from "../components/Icons/FacebookIcon.vue";

let showMenu = ref(false);
const toggleNav = () => (showMenu.value = !showMenu.value);
</script>
