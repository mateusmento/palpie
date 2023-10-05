<script lang="ts" setup>
import { computed } from 'vue';
import Input from './Input.vue';
import uniqid from 'uniqid';

const props = defineProps<{
  label: string;
  name: string;
}>();

const fieldId = computed(() => uniqid(props.name + '-'));
</script>

<template>
  <div class="field">
    <label :for="fieldId">{{ label }}</label>
    <Input v-bind="$attrs" :id="fieldId" :name="name" />
  </div>
</template>
