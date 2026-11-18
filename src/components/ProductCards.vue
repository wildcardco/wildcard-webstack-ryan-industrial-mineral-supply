<script setup lang="ts">
import { FwbBadge, FwbCard } from 'flowbite-vue';
import { products } from '../data/site';
</script>

<template>
  <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
    <fwb-card
      v-for="product in products"
      :key="product.slug"
      class="w-full max-w-full bg-white text-[#1f2736]"
      :href="`/shop/${product.slug}`"
      :img-alt="product.imageAlt"
      :img-src="product.image"
      variant="image"
    >
      <div class="p-5">
        <div class="mb-3 flex flex-wrap gap-2">
          <fwb-badge>New Arrival</fwb-badge>
          <fwb-badge type="dark">stock unverified</fwb-badge>
        </div>
        <h3 class="mb-2 text-lg font-semibold">{{ product.name }}</h3>
        <p class="text-xl font-semibold">{{ product.price }}</p>
        <p class="mt-2 text-sm">price as listed on imsblasting.com</p>
      </div>
    </fwb-card>
  </div>
</template>
