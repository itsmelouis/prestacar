<template>
  <div
    class="flex flex-col bg-black sm:flex-row sm:justify-between sm:items-center bottom-0 py-10 px-4 sm:px-52 space-y-5"
  >
    <div class="mb-6 sm:mb-0 self-center">
      <img
        src="../assets/logo_prestacar.png"
        alt="Logo de PrestaCar"
        class="w-32 h32 md:w-36 md:h-36 lg:w-40 lg:h-40"
      />
    </div>
    <div class="space-y-2 sm:ml-16">
      <h3 class="text-white">Entreprise</h3>
      <ul class="flex flex-row sm:flex-col gap-5 sm:gap-0 text-slate-500">
        <router-link
          to="/conditions-generales"
          class="transition hover:text-slate-300 duration-300"
          ><li>Conditions générales</li></router-link
        >
      </ul>
    </div>
    <div class="space-y-2 sm:ml-16">
      <h3 class="text-white">Réseaux sociaux</h3>
      <ul class="flex flex-row sm:flex-col gap-5 sm:gap-0 text-slate-500">
        <a
          href="https://www.facebook.com/lbprestacar"
          target="_blank"
          class="transition hover:text-slate-300 duration-300"
          ><li>Facebook</li></a
        >
        <a
          href="https://www.instagram.com/lbprestacar/"
          target="_blank"
          class="transition hover:text-slate-300 duration-300"
          ><li>Instagram</li></a
        >
      </ul>
    </div>
  </div>
</template>
