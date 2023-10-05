<script lang="ts" setup>
import { computed, inject, ref } from 'vue';

const props = defineProps<{
  modelValue?: any;
  name: string;
}>();

const emit = defineEmits(['update:modelValue']);

const state = ref();

const form = inject('form', {
  get: (field: string) => state.value,
  set: (field: string, value: any) => (state.value = value),
});

const modelValue = computed({
  get: () => props.modelValue ?? form.get(props.name),
  set: (value: any) => {
    form.set(props.name, value);
    emit('update:modelValue', value);
  },
});
</script>

<template>
  <input v-bind="$attrs" v-model="modelValue" />
</template>
