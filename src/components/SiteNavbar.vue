<script setup lang="ts">
import { computed } from 'vue';
import { FwbNavbar, FwbNavbarCollapse, FwbNavbarLink, FwbNavbarLogo } from 'flowbite-vue';
import { logo, nav, phoneDisplay, phoneTel } from '../data/site';

const props = defineProps<{ currentPath: string }>();

const path = computed(() => {
  const trimmed = props.currentPath.replace(/\/$/, '');
  return trimmed === '' ? '/' : trimmed;
});

function isActive(href: string) {
  if (href === '/shop') return path.value === '/shop' || path.value.startsWith('/shop/');
  return path.value === href;
}
</script>

<template>
  <fwb-navbar class="border-[#1f2736] bg-[#1f2736]">
    <template #logo>
      <fwb-navbar-logo :alt="logo.alt" :image-url="logo.src" link="/" />
    </template>
    <template #default="{ isShowMenu }">
      <fwb-navbar-collapse :is-show-menu="isShowMenu">
        <fwb-navbar-link
          v-for="item in nav"
          :key="item.href"
          :is-active="isActive(item.href)"
          :link="item.href"
        >
          {{ item.label }}
        </fwb-navbar-link>
        <li class="px-3 pt-3 md:hidden">
          <a
            class="btn inline-flex items-center rounded-lg bg-[#edcd1f] px-4 py-2 text-sm font-semibold text-black"
            :href="phoneTel"
          >
            {{ phoneDisplay }}
          </a>
        </li>
      </fwb-navbar-collapse>
    </template>
    <template #right-side>
      <a
        class="btn inline-flex items-center rounded-lg bg-[#edcd1f] px-4 py-2 text-sm font-semibold text-black"
        :href="phoneTel"
      >
        {{ phoneDisplay }}
      </a>
    </template>
  </fwb-navbar>
</template>
