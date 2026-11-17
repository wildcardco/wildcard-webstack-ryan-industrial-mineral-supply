<script setup lang="ts">
import { FwbAccordion, FwbAccordionContent, FwbAccordionHeader, FwbAccordionPanel } from 'flowbite-vue';

type Panel = {
  title: string;
  paragraphs: string[];
};

defineProps<{ panels: Panel[] }>();
</script>

<template>
  <fwb-accordion>
    <fwb-accordion-panel v-for="panel in panels" :key="panel.title">
      <fwb-accordion-header>{{ panel.title }}</fwb-accordion-header>
      <fwb-accordion-content>
        <p v-for="(paragraph, index) in panel.paragraphs" :key="index" class="mb-3 text-[#3b3a3a]">
          {{ paragraph }}
        </p>
      </fwb-accordion-content>
    </fwb-accordion-panel>
  </fwb-accordion>
</template>
