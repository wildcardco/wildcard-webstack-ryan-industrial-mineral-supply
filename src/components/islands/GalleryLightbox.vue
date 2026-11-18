<script setup lang="ts">
import { nextTick, ref } from "vue";
import { FwbButton } from "flowbite-vue";

type Photo = { src: string; alt: string; width: number; height: number };

defineProps<{ photos: Photo[] }>();

const dialog = ref<HTMLDialogElement | null>(null);
const current = ref<Photo | null>(null);

async function open(photo: Photo) {
  current.value = photo;
  await nextTick();
  dialog.value?.showModal();
}

function close() {
  dialog.value?.close();
}

function onDialogClick(event: MouseEvent) {
  if (event.target === dialog.value) close();
}
</script>

<template>
  <div>
    <ul class="gallery-grid">
      <li v-for="photo in photos" :key="photo.src">
        <button type="button" class="gallery-hit" @click="open(photo)">
          <img
            :src="photo.src"
            :alt="photo.alt"
            :width="photo.width"
            :height="photo.height"
          />
          <span class="sr-only">Open full size</span>
        </button>
      </li>
    </ul>

    <dialog
      ref="dialog"
      class="lightbox"
      aria-labelledby="lightbox-title"
      @click="onDialogClick"
      @close="current = null"
    >
      <div class="lightbox-card">
        <h2 id="lightbox-title">{{ current?.alt }}</h2>
        <img v-if="current" :src="current.src" :alt="current.alt" />
        <FwbButton type="button" color="blue" class="lightbox-close" @click="close">
          Close
        </FwbButton>
      </div>
    </dialog>
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

.gallery-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.gallery-hit {
  display: block;
  width: 100%;
  padding: 0;
  border: 0;
  background: #f3f4f6;
  cursor: pointer;
}

.gallery-hit img {
  display: block;
  width: 100%;
  height: 12rem;
  object-fit: cover;
}

.lightbox {
  width: min(100% - 1.5rem, 56rem);
  max-width: calc(100% - 1.5rem);
  padding: 0;
  border: 0;
  background: transparent;
  color: #1f2736;
}

.lightbox[open] {
  display: block;
}

.lightbox::backdrop {
  background: rgb(5 17 55 / 0.72);
}

.lightbox,
.lightbox::backdrop {
  overscroll-behavior: contain;
}

.lightbox-card {
  max-height: calc(100vh - 2rem);
  overflow: auto;
  padding: 1rem;
  background: #ffffff;
  color: #1f2736;
}

.lightbox-card h2 {
  margin: 0 0 0.75rem;
  font-size: 1.125rem;
  line-height: 1.3;
}

.lightbox-card img {
  display: block;
  width: 100%;
  height: auto;
  object-fit: contain;
}

.lightbox-close {
  margin-top: 0.75rem;
  min-height: 44px;
  background: #1748d7 !important;
  color: #ffffff !important;
}

@media (min-width: 640px) {
  .gallery-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 1024px) {
  .gallery-grid {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
