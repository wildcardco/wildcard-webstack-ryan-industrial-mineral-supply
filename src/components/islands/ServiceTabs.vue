<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { FwbTab, FwbTabs } from 'flowbite-vue';
import BrandButton from './BrandButton.vue';
import { business, services } from '../../data/site';

const active = ref(services[0].id);

onMounted(() => {
  const hash = location.hash.replace('#', '');
  if (services.some((item) => item.id === hash)) active.value = hash;
});

watch(active, (value) => {
  const url = new URL(location.href);
  url.hash = value;
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
    <FwbTab v-for="service in services" :key="service.id" :name="service.id" :title="service.title">
      <article class="mt-6 grid min-w-0 items-center gap-6 md:grid-cols-2">
        <img
          :src="service.image"
          :alt="service.alt"
          width="1200"
          height="900"
          class="aspect-[4/3] w-full rounded-[14px] object-cover shadow-card"
        />
        <div>
          <h2 class="text-[28px] font-extrabold leading-tight tracking-tight text-navy">{{ service.title }}</h2>
          <p class="mt-3 max-w-md text-charcoal">{{ service.copy }}</p>
          <div class="mt-6">
            <BrandButton :href="business.phoneHref">Get a quote</BrandButton>
          </div>
        </div>
      </article>
    </FwbTab>
  </FwbTabs>
</template>
