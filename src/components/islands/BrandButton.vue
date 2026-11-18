<script setup lang="ts">
import { computed } from 'vue';
import { FwbButton } from 'flowbite-vue';

const props = withDefaults(
  defineProps<{
    href: string;
    variant?: 'primary' | 'secondary' | 'ghost' | 'navy';
    block?: boolean;
  }>(),
  { variant: 'primary', block: false },
);

const look = computed(() => {
  const base = 'font-extrabold rounded-[10px] min-h-11 transition-transform duration-200';
  const width = props.block ? 'w-full text-center' : '';
  if (props.variant === 'primary') {
    return `${base} ${width} bg-accent text-navy border-0 shadow-card hover:bg-accent hover:shadow-lift hover:-translate-y-0.5 focus:outline-solid focus:outline-[3px] focus:outline-offset-2 focus:outline-navy`;
  }
  if (props.variant === 'navy') {
    return `${base} ${width} bg-navy text-white border-0 hover:bg-charcoal focus:outline-solid focus:outline-[3px] focus:outline-offset-2 focus:outline-accent`;
  }
  if (props.variant === 'ghost') {
    return `${base} ${width} bg-transparent text-white border-2 border-white hover:bg-white hover:text-navy focus:outline-solid focus:outline-[3px] focus:outline-offset-2 focus:outline-accent`;
  }
  return `${base} ${width} bg-transparent text-navy border-2 border-navy hover:bg-navy hover:text-white focus:outline-solid focus:outline-[3px] focus:outline-offset-2 focus:outline-navy`;
});

const outline = computed(() => props.variant === 'secondary' || props.variant === 'ghost');
const color = computed(() => (props.variant === 'primary' ? 'yellow' : 'dark'));
</script>

<template>
  <FwbButton :href="href" :color="color" :outline="outline" size="xl" :class="look">
    <slot />
  </FwbButton>
</template>
