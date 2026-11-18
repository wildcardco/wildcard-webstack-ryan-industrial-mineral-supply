<script setup lang="ts">
import { FwbBadge } from 'flowbite-vue';
import { products } from '../data/site';
</script>

<template>
  <ul class="product-grid">
    <li v-for="product in products" :key="product.slug">
      <a class="product-card" :href="`/shop/${product.slug}`">
        <span class="product-card__media">
          <img :src="product.image" :alt="product.imageAlt" width="800" height="600" />
        </span>
        <span class="product-card__body">
          <span v-if="product.newArrival" class="product-badges">
            <fwb-badge class="badge-new">New Arrival</fwb-badge>
          </span>
          <h3 class="product-card__title">{{ product.name }}</h3>
          <p class="product-card__price">{{ product.price }}</p>
          <p class="product-card__note">price as listed on imsblasting.com</p>
        </span>
      </a>
    </li>
  </ul>
</template>
