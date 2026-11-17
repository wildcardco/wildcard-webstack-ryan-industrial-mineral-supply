<script setup lang="ts">
import { FwbBadge, FwbCard } from 'flowbite-vue';
import { serviceCards } from '../data/site';
</script>

<template>
  <div class="grid gap-6 md:grid-cols-2">
    <fwb-card v-for="card in serviceCards" :key="card.href" :href="card.href">
      <div class="p-5">
        <fwb-badge v-if="card.badge" class="mb-3 w-fit">{{ card.badge }}</fwb-badge>
        <h3 class="mb-2 text-xl font-semibold text-black">{{ card.title }}</h3>
        <p class="text-[#3b3a3a]">{{ card.text }}</p>
      </div>
    </fwb-card>
  </div>
</template>
