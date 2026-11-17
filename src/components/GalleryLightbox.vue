<script setup lang="ts">
import { ref } from 'vue';
import { FwbModal } from 'flowbite-vue';

type Photo = {
  src: string;
  alt: string;
  caption: string;
};

defineProps<{ photos: Photo[] }>();

const open = ref<Photo | null>(null);
</script>

<template>
  <ul class="grid gap-6 md:grid-cols-3">
    <li v-for="photo in photos" :key="photo.src" class="overflow-hidden rounded-lg border border-[#f7f7f7] bg-white">
      <button class="block w-full text-left" type="button" @click="open = photo">
        <img :src="photo.src" :alt="photo.alt" class="h-56 w-full object-cover" />
        <span class="sr-only">Open larger photo</span>
      </button>
      <p class="p-4 text-sm text-[#3b3a3a]">{{ photo.caption }}</p>
    </li>
  </ul>
  <fwb-modal v-if="open" focus-trap size="5xl" @close="open = null">
    <template #header>
      <span class="text-lg text-black">{{ open.alt }}</span>
    </template>
    <template #body>
      <img :src="open.src" :alt="open.alt" class="max-h-[70vh] w-full object-contain" />
      <p class="mt-4 text-[#3b3a3a]">{{ open.caption }}</p>
    </template>
  </fwb-modal>
</template>
