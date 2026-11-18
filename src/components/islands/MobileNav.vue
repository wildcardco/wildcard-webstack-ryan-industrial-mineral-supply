<script setup lang="ts">
import { ref } from "vue";
import { FwbButton, FwbSidebar } from "flowbite-vue";
import { Menu, X } from "lucide-vue-next";

const props = defineProps<{
  current: string;
  links: { href: string; label: string }[];
  ctaHref: string;
  ctaLabel: string;
}>();

const open = ref(false);

function toggle() {
  open.value = !open.value;
}

function close() {
  open.value = false;
}

function current(href: string) {
  if (href.startsWith("/#")) return false;
  return props.current === href;
}
</script>

<template>
  <div class="nav-wrap">
    <button
      class="menu-button"
      type="button"
      aria-controls="site-menu"
      :aria-expanded="open"
      @click="toggle"
    >
      <Menu v-if="!open" :size="22" aria-hidden="true" />
      <X v-else :size="22" aria-hidden="true" />
      <span class="sr-only">Menu</span>
    </button>

    <!-- FwbNavbar hardcodes aria-expanded="false", so this drawer uses FwbSidebar. -->
    <FwbSidebar id="site-menu" class="site-menu static h-auto w-full" :class="{ 'is-open': open }">
      <ul class="menu-list">
        <li v-for="link in links" :key="link.href">
          <a
            :href="link.href"
            :aria-current="current(link.href) ? 'page' : undefined"
            @click="close"
          >{{ link.label }}</a>
        </li>
        <li class="menu-cta">
          <FwbButton :href="ctaHref" color="blue" class="quote-link" @click="close">
            {{ ctaLabel }}
          </FwbButton>
        </li>
      </ul>
    </FwbSidebar>
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

.nav-wrap {
  display: contents;
}

.menu-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  margin-inline-start: auto;
  border: 1px solid #d5dde3;
  border-radius: 4px;
  background: #ffffff;
  color: #1f2736;
}

.site-menu {
  position: static !important;
  height: auto !important;
  transform: none !important;
  background: #ffffff;
  color: #1f2736;
}

.site-menu > div {
  height: auto;
  overflow: visible;
  background: #ffffff;
  padding: 0;
}

.menu-list {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin: 0;
  padding: 0.5rem 0 0;
  list-style: none;
}

.menu-list a {
  display: flex;
  align-items: center;
  min-height: 44px;
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  color: #1f2736;
  font-weight: 600;
  text-decoration: none;
}

.menu-list a[aria-current="page"] {
  box-shadow: inset 3px 0 0 #1748d7;
  color: #1748d7;
}

.quote-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 44px;
  background: #1748d7 !important;
  color: #ffffff !important;
  border-radius: 4px;
}

@media (max-width: 767px) {
  .site-menu:not(.is-open) {
    display: none;
  }

  .site-menu.is-open {
    flex-basis: 100%;
  }
}

@media (min-width: 768px) {
  .menu-button {
    display: none;
  }

  .site-menu,
  .site-menu:not(.is-open) {
    display: block;
    width: auto;
    margin-inline-start: auto;
  }

  .menu-list {
    flex-direction: row;
    align-items: center;
    gap: 0.25rem;
    padding: 0;
  }

  .menu-list a[aria-current="page"] {
    box-shadow: inset 0 -3px 0 #1748d7;
  }

  .quote-link {
    width: auto;
    padding-inline: 1rem;
  }
}
</style>
