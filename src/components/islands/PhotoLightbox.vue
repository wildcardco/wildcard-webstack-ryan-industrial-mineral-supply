<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';

const props = defineProps<{
  pictures: { src: string; alt: string; caption: string }[];
}>();

const dialog = ref<HTMLDialogElement | null>(null);
const index = ref(0);
const current = computed(() => props.pictures[index.value]);

function openAt(next: number) {
  if (!props.pictures[next]) return;
  index.value = next;
  dialog.value?.showModal();
}

function close() {
  dialog.value?.close();
}

function step(delta: number) {
  const count = props.pictures.length;
  index.value = (index.value + delta + count) % count;
}

function onClick(event: MouseEvent) {
  const target = event.target;
  if (!(target instanceof Element)) return;
  const button = target.closest('[data-lightbox]');
  if (!(button instanceof HTMLElement)) return;
  const next = Number(button.dataset.lightbox);
  if (Number.isNaN(next)) return;
  openAt(next);
}

function onDialogClick(event: MouseEvent) {
  if (event.target === dialog.value) close();
}

function onKey(event: KeyboardEvent) {
  if (!dialog.value?.open) return;
  if (event.key === 'ArrowRight') step(1);
  if (event.key === 'ArrowLeft') step(-1);
}

onMounted(() => {
  document.addEventListener('click', onClick);
  document.addEventListener('keydown', onKey);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', onClick);
  document.removeEventListener('keydown', onKey);
});
</script>

<template>
  <dialog
    ref="dialog"
    class="w-[min(960px,calc(100vw-2rem))] max-h-[90vh] overflow-auto rounded-[16px] border-0 bg-white p-0 shadow-lift backdrop:bg-navy/80"
    aria-label="Job photo"
    @click="onDialogClick"
  >
    <img
      v-if="current"
      :src="current.src"
      :alt="current.alt"
      class="max-h-[70vh] w-full bg-tint object-contain"
    />
    <div class="flex flex-wrap items-center gap-3 px-4 py-3">
      <p v-if="current" class="mr-auto font-semibold text-navy">{{ current.caption }}</p>
      <button type="button" class="inline-flex min-h-11 items-center font-bold text-navy" @click="step(-1)">Previous</button>
      <button type="button" class="inline-flex min-h-11 items-center font-bold text-navy" @click="step(1)">Next</button>
      <button type="button" class="inline-flex min-h-11 items-center font-bold text-navy" @click="close">Close</button>
    </div>
  </dialog>
</template>
