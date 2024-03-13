<template>
  <div class="container">
    <span class="svg-container">
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="0.7em" viewBox="0 0 24 24">
        <path fill="#ffffff" d="M16 22L6 12L16 2l1.775 1.775L9.55 12l8.225 8.225z">
        </path>
      </svg>
    </span>
  </div>
</template>

<style scoped>
.container{
  padding-top:100px;
  padding-bottom: 100px;
  padding-left: 100px;
}

.svg-container {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 7px 3px; /* Ajustez le padding pour changer la taille du cercle */
  transition: background-color 0.2s; /* Transition douce pour le fond */
  margin-left: -90px;
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