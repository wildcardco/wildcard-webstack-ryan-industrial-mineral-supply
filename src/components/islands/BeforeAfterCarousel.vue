<script setup lang="ts">
import { FwbCarousel } from 'flowbite-vue';

defineProps<{
  pictures: { src: string; alt: string; caption: string }[];
}>();
</script>

<template>
  <div class="min-w-0">
    <FwbCarousel :pictures="pictures" :slide="false" />
    <ul class="mt-4 flex flex-wrap gap-2">
      <li
        v-for="picture in pictures"
        :key="picture.caption"
        class="rounded-full border-2 border-navy px-3 py-1 text-sm font-semibold text-navy"
      >
        {{ picture.caption }}
      </li>
    </ul>
  </div>
</template>
