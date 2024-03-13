
<template>
  <div class="container">
    <span class="svg-container">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="svg-icon">
        <path fill="#ffffff" d="M8.025 22L6.25 20.225L14.475 12L6.25 3.775L8.025 2l10 10z"></path>
      </svg>
    </span>
  </div>
</template>

<style scoped>
.container{
  padding-top:100px;
  padding-bottom: 100px;
  padding-right: 100px;
}

.svg-container {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 7px 3px; /* Ajustez le padding pour changer la taille du cercle */
  transition: background-color 0.2s; /* Transition douce pour le fond */
  margin-right: -90px;
}

.svg-container:hover {
  background-color: rgba(255, 255, 255, 0.5); /* Fond blanc semi-transparent au survol */
}

.svg-icon {
  /* Si vous souhaitez ajuster la taille du SVG indépendamment du conteneur */
  width: 1em; /* Ajustez la taille ici si nécessaire */
  height: 0.7em; /* Ajustez la taille ici si nécessaire */
}
</style>

<script setup lang="ts">
</script>