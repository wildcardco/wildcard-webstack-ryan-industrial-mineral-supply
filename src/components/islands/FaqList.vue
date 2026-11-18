<script setup lang="ts">
import { FwbAccordion, FwbAccordionContent, FwbAccordionHeader, FwbAccordionPanel } from 'flowbite-vue';

defineProps<{
  items: { q: string; a: string[] }[];
}>();
</script>

<template>
  <FwbAccordion class="faq-accordion w-full min-w-0" :collapsed="true">
    <FwbAccordionPanel v-for="item in items" :key="item.q">
      <FwbAccordionHeader class="text-base font-bold text-navy" active-class="bg-tint text-navy">
        {{ item.q }}
      </FwbAccordionHeader>
      <FwbAccordionContent>
        <div class="space-y-3 px-5 pb-5">
          <p v-for="(line, index) in item.a" :key="index" class="text-base text-charcoal">
            {{ line }}
          </p>
        </div>
      </FwbAccordionContent>
    </FwbAccordionPanel>
  </FwbAccordion>
</template>
