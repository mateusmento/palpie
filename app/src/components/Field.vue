<script lang="ts" setup>
import { computed } from 'vue';
import Input from './Input.vue';
import uniqid from 'uniqid';
import { omit } from 'lodash';

const props = defineProps<{
  label: string;
  name: string;
  classInput?: any;
}>();

const fieldId = computed(() => uniqid(props.name + '-'));
</script>

<template>
  <div class="field">
    <label :for="fieldId">{{ label }}</label>
    <Input v-bind="omit($attrs, 'class', 'id')" :id="fieldId" :name="name" :class="classInput" />
  </div>
</template>
