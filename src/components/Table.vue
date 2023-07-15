<template>
  <div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th v-for="header in headers" class="px-6 py-3">
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in values" class="bg-white border-b">
          <td v-for="value in data" class="px-6 py-4">{{ value }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  data: Array,
});

const values = props.data?.slice(1);
const headers = props.data?.slice(0, 1)[0];
</script>

<style scoped></style>
