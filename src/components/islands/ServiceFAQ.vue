<script setup lang="ts">
import { FwbAccordion, FwbAccordionContent, FwbAccordionHeader, FwbAccordionPanel } from "flowbite-vue";

defineProps<{
  items: { q: string; a: string }[];
}>();
</script>

<template>
  <FwbAccordion class="faq" collapsed persistent>
    <FwbAccordionPanel v-for="item in items" :key="item.q">
      <FwbAccordionHeader>{{ item.q }}</FwbAccordionHeader>
      <FwbAccordionContent>
        <p>{{ item.a }}</p>
      </FwbAccordionContent>
    </FwbAccordionPanel>
  </FwbAccordion>
</template>

<style>
.faq button {
  min-height: 44px;
  background: #ffffff;
  color: #1f2736;
}

.faq p {
  margin: 0;
  color: #1f2736;
}
</style>
