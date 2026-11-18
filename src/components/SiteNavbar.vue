<script setup lang="ts">
import { computed, ref } from 'vue';
import { FwbNavbarLink } from 'flowbite-vue';
import { logo, nav, phoneDisplay, phoneTel } from '../data/site';

const props = defineProps<{ currentPath: string }>();
const menuOpen = ref(false);

const path = computed(() => {
  const trimmed = props.currentPath.replace(/\/$/, '');
  return trimmed === '' ? '/' : trimmed;
});

function isActive(href: string) {
  if (href === '/shop') return path.value === '/shop' || path.value.startsWith('/shop/');
  return path.value === href;
}

function closeMenu() {
  menuOpen.value = false;
}
</script>

<template>
  <nav class="border-b border-[#1f2736] bg-[#1f2736]" aria-label="Primary">
    <div class="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-2.5">
      <a class="logo-chip" href="/" @click="closeMenu">
        <img class="logo-wordmark" :src="logo.src" :alt="logo.alt" width="2593" height="1007" />
      </a>
      <button
        class="inline-flex items-center rounded-lg p-2 text-white md:hidden"
        type="button"
        aria-controls="site-nav"
        :aria-expanded="menuOpen"
        @click="menuOpen = !menuOpen"
      >
        <span class="sr-only">{{ menuOpen ? 'Close main menu' : 'Open main menu' }}</span>
        <svg v-if="!menuOpen" aria-hidden="true" viewBox="0 0 20 20" fill="currentColor">
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          />
        </svg>
        <svg v-else aria-hidden="true" viewBox="0 0 20 20" fill="currentColor">
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <div id="site-nav" class="site-nav basis-full md:basis-auto" :class="{ 'is-open': menuOpen }">
        <ul class="flex w-full flex-col gap-1 md:w-auto md:flex-row md:items-center md:gap-4">
          <fwb-navbar-link
            v-for="item in nav"
            :key="item.href"
            :is-active="isActive(item.href)"
            :link="item.href"
            @click="closeMenu"
          >
            {{ item.label }}
          </fwb-navbar-link>
        </ul>
        <a
          class="btn mt-3 inline-flex items-center rounded-lg bg-[#edcd1f] px-4 py-2 text-sm font-semibold text-black md:mt-0"
          :href="phoneTel"
          @click="closeMenu"
        >
          {{ phoneDisplay }}
        </a>
      </div>
    </div>
  </nav>
</template>
