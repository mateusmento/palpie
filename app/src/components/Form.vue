<script lang="ts" setup>
import { provide, ref, watch } from 'vue';
import { get, set } from 'lodash';

const props = defineProps<{
  modelValue?: any;
}>();

const emit = defineEmits(['update:modelValue']);

const state = ref(props.modelValue ?? {});

watch(
  () => props.modelValue,
  (v) => state.value !== v && (state.value = v)
);

provide('form', {
  get: (field: string) => {
    return get(state.value, field);
  },
  set: (field: string, value: any) => {
    state.value = { ...set(state.value, field, value) };
    emit('update:modelValue', state.value);
  },
});
</script>

<template>
  <form v-bind="$attrs">
    <slot />
  </form>
</template>
