<script setup lang="ts">
import { FwbBadge, FwbCard } from 'flowbite-vue';
import { serviceCards } from '../data/site';
</script>

<template>
  <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
    <fwb-card v-for="card in serviceCards" :key="card.href" class="w-full max-w-full bg-white text-[#1f2736]" :href="card.href">
      <div class="p-5">
        <fwb-badge v-if="card.badge" class="mb-3 w-fit">{{ card.badge }}</fwb-badge>
        <h3 class="mb-2 text-xl font-semibold">{{ card.title }}</h3>
        <p>{{ card.text }}</p>
      </div>
    </fwb-card>
  </div>
</template>
