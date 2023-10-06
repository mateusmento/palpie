<script lang="ts" setup>
import { provide, ref, watch } from 'vue';
import { get, set } from 'lodash';

const props = defineProps<{
  modelValue?: any;
}>();

const emit = defineEmits(['update:modelValue', 'submit']);

const data = ref(props.modelValue ?? {});
const undo = ref(props.modelValue ?? {});
const changes = ref({});

watch(data, (v) => props.modelValue !== v && emit('update:modelValue', v));
watch(
  () => props.modelValue,
  (v) => data.value !== v && (data.value = v)
);

provide('form', {
  get: (field: string) => {
    return get(data.value, field);
  },
  set: (field: string, value: any) => {
    changes.value = set({ ...changes.value }, field, value);
    data.value = set({ ...data.value }, field, value);
  },
});

function submit() {
  emit('submit', { ...changes.value });
  undo.value = data.value;
  changes.value = {};
}

function reset() {
  data.value = undo.value;
  changes.value = {};
}
</script>

<template>
  <form v-bind="$attrs" @submit.prevent="submit" @reset="reset">
    <slot />
  </form>
</template>
