<script setup lang="ts">
import { FwbBadge, FwbCard } from 'flowbite-vue';
import { products } from '../data/site';
</script>

<template>
  <div class="grid gap-6 md:grid-cols-3">
    <fwb-card
      v-for="product in products"
      :key="product.slug"
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
        <h3 class="mb-2 text-lg font-semibold text-black">{{ product.name }}</h3>
        <p class="text-xl font-semibold text-black">{{ product.price }}</p>
        <p class="mt-2 text-sm text-[#3b3a3a]">price as listed on imsblasting.com</p>
      </div>
    </fwb-card>
  </div>
</template>
