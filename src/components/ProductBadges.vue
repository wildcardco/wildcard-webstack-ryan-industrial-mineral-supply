<script setup lang="ts">
import { FwbBadge } from 'flowbite-vue';

defineProps<{ newArrival: boolean }>();
</script>

<template>
  <div class="product-badges">
    <fwb-badge v-if="newArrival" class="badge-new">New Arrival</fwb-badge>
    <fwb-badge class="badge-stock" type="dark">stock unverified</fwb-badge>
  </div>
</template>
