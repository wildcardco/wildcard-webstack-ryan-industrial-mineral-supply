<script setup lang="ts">
import { FwbBadge } from 'flowbite-vue';

defineProps<{ newArrival: boolean }>();
</script>

<template>
  <div v-if="newArrival" class="product-badges">
    <fwb-badge class="badge-new">New Arrival</fwb-badge>
  </div>
</template>
