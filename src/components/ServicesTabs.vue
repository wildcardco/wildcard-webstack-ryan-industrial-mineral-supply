<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { FwbTab, FwbTabs } from 'flowbite-vue';
import { phoneDisplay, phoneTel, photos } from '../data/site';

const props = defineProps<{ initialTab?: string }>();

const names = ['blasting', 'glass', 'plastic', 'painting', 'delivery'] as const;
type TabName = (typeof names)[number];

function asTab(value: string | null | undefined): TabName {
  return names.includes(value as TabName) ? (value as TabName) : 'blasting';
}

const activeTab = ref<TabName>(asTab(props.initialTab));

onMounted(() => {
  activeTab.value = asTab(new URLSearchParams(window.location.search).get('tab') ?? props.initialTab);
});
</script>

<template>
  <fwb-tabs v-model="activeTab" variant="underline">
    <fwb-tab name="blasting" title="Media blasting">
      <div class="grid gap-6 py-4 md:grid-cols-2">
        <img
          :src="photos.blastRoom.src"
          :alt="photos.blastRoom.alt"
          class="h-64 w-full rounded-lg object-cover"
          width="600"
          height="400"
        />
        <div class="space-y-3 text-[#3b3a3a]">
          <p>
            Also known as abrasive blasting, sandblasting is a surface finishing process that involves
            the use of a powered machine to spray abrasive particles under high pressure against a surface.
          </p>
          <p>Sandblasting can remove paint, rust, and residue from oxidation from materials quickly and efficiently.</p>
          <p>Blasting prices are not listed. Get a quote: <a class="content-link" :href="phoneTel">{{ phoneDisplay }}</a>.</p>
        </div>
      </div>
    </fwb-tab>
    <fwb-tab name="glass" title="Glass bead">
      <div class="space-y-3 py-4 text-[#3b3a3a]">
        <p>
          Not as aggressive as sandblasting, glass bead blasting is the process of removing surface deposits
          by applying fine glass beads at a high pressure without damaging the substrate.
        </p>
        <p>Glass bead blasting is a gentler form of blasting that polishes and leaves a uniform satin finish on stainless steel.</p>
        <p>Blasting prices are not listed. Get a quote: <a class="content-link" :href="phoneTel">{{ phoneDisplay }}</a>.</p>
      </div>
    </fwb-tab>
    <fwb-tab name="plastic" title="Plastic media">
      <div class="space-y-3 py-4 text-[#3b3a3a]">
        <p>A preferred method of blasting for aviation, plastic media blasting leaves zero surface deformation.</p>
        <p>Blasting prices are not listed. Get a quote: <a class="content-link" :href="phoneTel">{{ phoneDisplay }}</a>.</p>
      </div>
    </fwb-tab>
    <fwb-tab name="painting" title="Industrial painting">
      <div class="grid gap-6 py-4 md:grid-cols-2">
        <img
          :src="photos.paintBooth.src"
          :alt="photos.paintBooth.alt"
          class="h-64 w-full rounded-lg object-cover"
          width="600"
          height="400"
        />
        <div class="space-y-3 text-[#3b3a3a]">
          <p>
            A newly added service. The painting booth services industrial pipes, pumps, and frames by using
            zinc primers and epoxy paints.
          </p>
          <p>Painting prices are not listed. Get a quote: <a class="content-link" :href="phoneTel">{{ phoneDisplay }}</a>.</p>
        </div>
      </div>
    </fwb-tab>
    <fwb-tab name="delivery" title="Pickup and delivery">
      <div class="grid gap-6 py-4 md:grid-cols-2">
        <img
          :src="photos.truck.src"
          :alt="photos.truck.alt"
          class="h-64 w-full rounded-lg object-cover"
          width="1600"
          height="1067"
        />
        <div class="space-y-3 text-[#3b3a3a]">
          <p>Pickup and delivery is available in the Chicagoland area and Northwest Indiana.</p>
          <ul class="list-disc space-y-1 pl-5">
            <li>16 ft truck bed</li>
            <li>9,000 lb max load</li>
            <li>12,000 lb lift</li>
          </ul>
          <p>{{ photos.truck.caption }}</p>
          <p>No prices are listed for pickup and delivery. Call <a class="content-link" :href="phoneTel">{{ phoneDisplay }}</a>.</p>
        </div>
      </div>
    </fwb-tab>
  </fwb-tabs>
</template>
