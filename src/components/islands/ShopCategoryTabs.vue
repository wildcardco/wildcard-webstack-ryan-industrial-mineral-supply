<script setup lang="ts">
import { ref } from "vue";
import { FwbTab, FwbTabs } from "flowbite-vue";

type Product = {
  name: string;
  path: string;
  price: string;
  category: string;
  image: string;
};

const props = defineProps<{
  products: Product[];
  categories: string[];
}>();

const active = ref("All");
const tabs = ["All", ...props.categories];

function visible(name: string) {
  if (name === "All") return props.products;
  return props.products.filter((item) => item.category === name);
}
</script>

<template>
  <div class="shop-tabs">
    <FwbTabs v-model="active" variant="underline" aria-label="Blast media categories">
      <FwbTab v-for="tab in tabs" :key="tab" :name="tab" :title="tab">
        <ul class="product-grid">
          <li v-for="product in visible(tab)" :key="product.path">
            <a class="product-card" :href="product.path">
              <div class="product-photo">
                <img :src="product.image" :alt="product.name" width="1000" height="1000" />
              </div>
              <div class="product-body">
                <h2>{{ product.name }}</h2>
                <p class="product-price">{{ product.price }}</p>
                <p class="product-note">Prices exclude sales tax</p>
              </div>
            </a>
          </li>
        </ul>
      </FwbTab>
    </FwbTabs>
  </div>
</template>

<style>
.shop-tabs {
  width: 100%;
  min-width: 0;
}

.shop-tabs [role="tablist"] {
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  border-bottom: 1px solid #d5dde3;
}

.shop-tabs [role="tab"] {
  position: relative;
  min-height: 44px;
  padding: 0.75rem 0.85rem;
  background: #ffffff;
  color: #1f2736;
  font-weight: 600;
  white-space: normal;
}

.shop-tabs [role="tab"][aria-selected="true"] {
  color: #1748d7;
}

.shop-tabs [role="tab"][aria-selected="true"]::after {
  content: "";
  position: absolute;
  right: 0.75rem;
  bottom: 0;
  left: 0.75rem;
  border-bottom: 3px solid #1748d7;
}

.product-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  width: 100%;
  margin: 1rem 0 0;
  padding: 0;
  list-style: none;
}

.product-card {
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  border: 1px solid #d5dde3;
  border-radius: 4px;
  background: #ffffff;
  color: #1f2736;
  text-decoration: none;
}

.product-photo {
  display: grid;
  aspect-ratio: 1;
  width: 100%;
  place-items: center;
  overflow: hidden;
  background: #f3f4f6;
}

.product-photo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.product-body {
  padding: 1rem;
  background: #ffffff;
}

.product-body h2 {
  margin: 0;
  color: #1f2736;
  font-size: 1.05rem;
  line-height: 1.35;
  overflow-wrap: anywhere;
}

.product-price {
  margin: 0.5rem 0 0;
  color: #1f2736;
  font-size: 1.25rem;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
}

.product-note {
  margin: 0.25rem 0 0;
  color: #4b5563;
  font-size: 0.95rem;
}

@media (min-width: 640px) {
  .product-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 1024px) {
  .product-grid {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
