<script setup lang="ts">
import { FwbCarousel } from 'flowbite-vue';

defineProps<{
  pictures: { src: string; alt: string; caption: string }[];
}>();
</script>

<template>
  <div class="min-w-0">
    <FwbCarousel :pictures="pictures" :slide="false" />
    <ul class="mt-4 space-y-1 rounded-[16px] bg-white p-4 shadow-card">
      <li v-for="picture in pictures" :key="picture.caption" class="text-sm font-semibold text-navy">
        {{ picture.caption }}
      </li>
    </ul>
  </div>
</template>
