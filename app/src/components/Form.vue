<script lang="ts" setup>
import { provide, ref } from 'vue';
import { get, set } from 'lodash';

const props = defineProps<{
  modelValue?: any;
}>();

const emit = defineEmits(['update:modelValue']);

const state = ref({});

provide('form', {
  get: (field: string) => {
    return get(props.modelValue ?? state.value, field);
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
