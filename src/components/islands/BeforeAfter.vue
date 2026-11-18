<script setup lang="ts">
import { computed, ref } from "vue";

defineProps<{
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
}>();

const pos = ref(50);
const valueText = computed(() => `${pos.value} percent of the before photo`);
</script>

<template>
  <div class="compare">
    <img class="compare-img" :src="after" :alt="afterAlt" width="558" height="1050" />
    <img
      class="compare-img compare-before"
      :src="before"
      :alt="beforeAlt"
      :style="{ clipPath: `inset(0 ${100 - pos}% 0 0)` }"
      width="560"
      height="1050"
    />
    <span class="compare-tag compare-tag-before">Before</span>
    <span class="compare-tag compare-tag-after">After</span>
    <label class="compare-range">
      <span class="sr-only">Drag to compare before and after</span>
      <input
        v-model.number="pos"
        type="range"
        min="0"
        max="100"
        step="1"
        :aria-valuetext="valueText"
      />
    </label>
  </div>
</template>

<style>
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.compare {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 5;
  overflow: hidden;
  background: #e8eaee;
}

.compare-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.compare-tag {
  position: absolute;
  top: 0.75rem;
  z-index: 1;
  padding: 0.25rem 0.5rem;
  background: #051137;
  color: #ffffff;
  font-size: 0.875rem;
  font-weight: 600;
}

.compare-tag-before {
  left: 0.75rem;
}

.compare-tag-after {
  right: 0.75rem;
}

.compare-range {
  position: absolute;
  right: 0.75rem;
  bottom: 0.75rem;
  left: 0.75rem;
  z-index: 1;
}

.compare-range input {
  width: 100%;
  height: 44px;
  margin: 0;
  accent-color: #1748d7;
}
</style>
