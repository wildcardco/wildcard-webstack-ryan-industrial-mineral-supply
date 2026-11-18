<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { FwbTab, FwbTabs } from 'flowbite-vue';
import ProductCard from './ProductCard.vue';
import type { Product } from '../../data/site';
import { categories, productPath } from '../../data/site';

const props = defineProps<{ products: Product[] }>();

const tabs = [{ id: 'all', name: 'All' }, ...categories.map((item) => ({ id: item.id, name: item.name }))];
const active = ref('all');

const visible = computed(() => {
  if (active.value === 'all') return props.products;
  return props.products.filter((item) => item.categoryId === active.value);
});

onMounted(() => {
  const hash = location.hash.replace('#', '');
  if (tabs.some((tab) => tab.id === hash)) active.value = hash;
});

watch(active, (value) => {
  const url = new URL(location.href);
  url.hash = value === 'all' ? '' : value;
  history.replaceState(null, '', url.pathname + url.search + url.hash);
});
</script>

<template>
  <FwbTabs
    v-model="active"
    variant="underline"
    item-class="text-muted min-h-11"
    item-active-class="text-navy border-accent"
  >
    <FwbTab v-for="tab in tabs" :key="tab.id" :name="tab.id" :title="tab.name">
      <div class="grid grid-cols-2 gap-3 pt-6 md:grid-cols-3 lg:grid-cols-4">
        <ProductCard
          v-for="product in tab.id === active ? visible : []"
          :key="product.slug"
          :href="productPath(product.slug)"
          :img="product.image"
          :alt="product.name"
          :title="product.name"
          :price="product.price"
          :note="product.note"
          :category="product.category"
        />
      </div>
      <p v-if="tab.id === active && visible.length === 0" class="pt-6 text-charcoal">No products in this category.</p>
    </FwbTab>
  </FwbTabs>
</template>
