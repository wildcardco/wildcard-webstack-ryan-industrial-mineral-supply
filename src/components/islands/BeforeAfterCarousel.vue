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
      <li v-for="(picture, index) in pictures" :key="picture.caption">
        <button
          type="button"
          class="inline-flex min-h-11 w-full items-center text-left text-sm font-semibold text-navy"
          :data-lightbox="index"
        >
          {{ picture.caption }}
        </button>
      </li>
    </ul>
  </div>
</template>
