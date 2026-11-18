<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue';
import { FwbSidebar } from 'flowbite-vue';
import { Menu, X } from 'lucide-vue-next';
import BrandButton from './BrandButton.vue';
import { business } from '../../data/site';

const open = ref(false);

const links = [
  { href: '/services', label: 'Services' },
  { href: '/shop', label: 'Buy Abrasives' },
  { href: '/contact', label: 'Contact' },
];

function toggle() {
  open.value = !open.value;
}

function onKey(event: KeyboardEvent) {
  if (event.key === 'Escape') open.value = false;
}

onMounted(() => document.addEventListener('keydown', onKey));
onBeforeUnmount(() => document.removeEventListener('keydown', onKey));
</script>

<template>
  <div class="md:hidden">
    <button
      type="button"
      class="fixed top-2 right-3 z-[90] inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-[10px] bg-navy px-3 font-extrabold text-white"
      aria-controls="mobile-menu"
      :aria-expanded="open ? 'true' : 'false'"
      data-nav-toggle
      @click="toggle"
    >
      <X v-if="open" class="size-5" aria-hidden="true" />
      <Menu v-else class="size-5" aria-hidden="true" />
      <span>Menu</span>
    </button>
    <div v-show="open" id="mobile-menu" data-nav="mobile" class="mobile-panel">
      <FwbSidebar>
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="flex min-h-11 items-center rounded-[10px] px-3 text-base font-bold text-navy hover:bg-tint"
        >
          {{ link.label }}
        </a>
        <div class="bg-white pt-3">
          <BrandButton :href="business.phoneHref" block>Call {{ business.phone }}</BrandButton>
        </div>
      </FwbSidebar>
    </div>
  </div>
</template>
