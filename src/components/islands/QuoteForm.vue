<script setup lang="ts">
import { nextTick, onMounted, ref } from "vue";
import { FwbButton, FwbInput, FwbSelect, FwbTextarea } from "flowbite-vue";

const props = defineProps<{
  subjects: string[];
  email: string;
}>();

const name = ref("");
const email = ref("");
const subject = ref("");
const message = ref("");
const errors = ref<Record<string, string>>({});
const sent = ref(false);
const nameEl = ref<HTMLElement | null>(null);
const emailEl = ref<HTMLElement | null>(null);
const subjectEl = ref<HTMLElement | null>(null);
const messageEl = ref<HTMLElement | null>(null);

const options = props.subjects.map((item) => ({ value: item, name: item }));

onMounted(() => {
  const item = new URLSearchParams(window.location.search).get("item");
  if (!item) return;
  subject.value = "Blast media order";
  message.value = `Quote for ${item}.`;
});

function fieldError(key: string) {
  return errors.value[key] || "";
}

async function onSubmit() {
  const next: Record<string, string> = {};
  if (!name.value.trim()) next.name = "Enter your name.";
  if (!email.value.trim() || !email.value.includes("@")) next.email = "Enter a valid email.";
  if (!subject.value) next.subject = "Choose a subject.";
  if (!message.value.trim()) next.message = "Tell us what you need.";
  errors.value = next;
  if (Object.keys(next).length) {
    await nextTick();
    const map: Record<string, HTMLElement | null> = {
      name: nameEl.value,
      email: emailEl.value,
      subject: subjectEl.value,
      message: messageEl.value,
    };
    const first = Object.keys(next)[0];
    map[first]?.querySelector<HTMLElement>("input, select, textarea")?.focus();
    return;
  }

  const body = [`Name: ${name.value.trim()}`, `Email: ${email.value.trim()}`, "", message.value.trim()].join("\n");
  const href = `mailto:${props.email}?subject=${encodeURIComponent(`Quote: ${subject.value}`)}&body=${encodeURIComponent(body)}`;
  window.location.href = href;
  sent.value = true;
}

function onMessageKey(event: KeyboardEvent) {
  if (event.key === "Enter" && (event.metaKey || event.ctrlKey)) {
    event.preventDefault();
    onSubmit();
  }
}
</script>

<template>
  <form class="quote-form" novalidate @submit.prevent="onSubmit">
    <div ref="nameEl">
      <FwbInput
        v-model="name"
        label="Name"
        name="name"
        type="text"
        autocomplete="name"
        required
        size="lg"
        :validation-status="fieldError('name') ? 'error' : undefined"
      />
      <p v-if="fieldError('name')" class="field-error" role="alert">{{ fieldError("name") }}</p>
    </div>
    <div ref="emailEl">
      <FwbInput
        v-model="email"
        label="Email"
        name="email"
        type="email"
        autocomplete="email"
        inputmode="email"
        spellcheck="false"
        required
        size="lg"
        :validation-status="fieldError('email') ? 'error' : undefined"
      />
      <p v-if="fieldError('email')" class="field-error" role="alert">{{ fieldError("email") }}</p>
    </div>
    <div ref="subjectEl">
      <FwbSelect
        v-model="subject"
        label="Subject"
        :options="options"
        placeholder="Choose a subject…"
        required
        size="lg"
        :validation-status="fieldError('subject') ? 'error' : undefined"
      />
      <p v-if="fieldError('subject')" class="field-error" role="alert">{{ fieldError("subject") }}</p>
    </div>
    <div ref="messageEl">
      <FwbTextarea
        v-model="message"
        label="Message"
        name="message"
        required
        :rows="5"
        :validation-status="fieldError('message') ? 'error' : undefined"
        @keydown="onMessageKey"
      />
      <p v-if="fieldError('message')" class="field-error" role="alert">{{ fieldError("message") }}</p>
    </div>
    <FwbButton type="submit" color="blue" class="quote-submit">Get a quote</FwbButton>
    <p v-if="sent" class="quote-thanks" role="status">
      Thanks for submitting! Your email app should open with this quote. You can also call (708) 895-6070.
    </p>
  </form>
</template>

<style>
.quote-form {
  display: grid;
  gap: 1rem;
  width: 100%;
}

.quote-form label {
  color: #1f2736;
}

.quote-form input,
.quote-form select,
.quote-form textarea {
  color: #1f2736;
  background: #ffffff;
  font-size: 16px;
}

.quote-form input,
.quote-form select {
  min-height: 44px;
}

.quote-form ::placeholder {
  color: #4b5563;
  opacity: 1;
}

.field-error {
  margin: 0.35rem 0 0;
  color: #051137;
  font-size: 0.95rem;
  font-weight: 600;
}

.quote-submit {
  min-height: 44px;
  background: #1748d7 !important;
  color: #ffffff !important;
}

.quote-thanks {
  margin: 0;
  color: #1f2736;
}
</style>
