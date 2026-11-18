<script setup lang="ts">
import { FwbBadge, FwbCard } from 'flowbite-vue';

defineProps<{
  href: string;
  img: string;
  alt: string;
  title: string;
  price: string;
  note?: string;
  category?: string;
}>();
</script>

<template>
  <FwbCard :href="href" :img-src="img" :img-alt="alt" variant="image" class="ims-card group bg-white">
    <div class="p-4">
      <FwbBadge v-if="category" type="dark" size="sm">{{ category }}</FwbBadge>
      <h3 class="mt-2 text-sm font-bold leading-snug text-navy sm:text-base">{{ title }}</h3>
      <p class="mt-2 text-lg font-extrabold text-navy">{{ price }}</p>
      <p v-if="note" class="mt-1 text-sm font-semibold text-charcoal">{{ note }}</p>
    </div>
    <span
      class="pointer-events-none absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-accent transition-transform duration-200 group-hover:scale-x-100"
    />
  </FwbCard>
</template>
