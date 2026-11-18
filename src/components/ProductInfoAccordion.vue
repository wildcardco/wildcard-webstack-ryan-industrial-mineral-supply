<script setup lang="ts">
import { FwbAccordion, FwbAccordionContent, FwbAccordionHeader, FwbAccordionPanel } from 'flowbite-vue';

type Panel = {
  title: string;
  paragraphs: string[];
};

defineProps<{ panels: Panel[] }>();
</script>

<template>
  <fwb-accordion class="product-info bg-white text-[#1f2736]">
    <fwb-accordion-panel v-for="panel in panels" :key="panel.title">
      <fwb-accordion-header class="bg-white text-[#1f2736]" active-class="bg-[#f7f7f7] text-[#1f2736]">
        {{ panel.title }}
      </fwb-accordion-header>
      <fwb-accordion-content class="bg-white text-[#1f2736]">
        <p v-for="(paragraph, index) in panel.paragraphs" :key="index" class="mb-3">
          {{ paragraph }}
        </p>
      </fwb-accordion-content>
    </fwb-accordion-panel>
  </fwb-accordion>
</template>
