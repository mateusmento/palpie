<script lang="ts" setup>
import { get } from 'lodash';
import { inject, ref, watch } from 'vue';

const props = defineProps<{
  modelValue?: any;
  name?: string;
  options: any[] | ((query: string) => any[] | Promise<any[]>);
  trackBy: string | ((v: any) => any);
  labelBy: string | ((v: any) => any);
}>();

const emit = defineEmits(['update:modelValue']);

const query = ref('');
const items = ref<any[]>([]);

const state = ref();

const form = inject('form', {
  get: (field: string) => state.value,
  set: (field: string, value: any) => (state.value = value),
});

watch(query, async () => {
  if (props.options instanceof Function) items.value = await props.options(query.value);
  else
    items.value = props.options.filter((op) =>
      labelOf(op).toLowerCase().includes(query.value.toLowerCase())
    );
});

function select(item: any) {
  emit('update:modelValue', item);
}

function labelOf(value: any) {
  if (props.labelBy instanceof Function) return props.labelBy(value);
  else return get(value, props.labelBy);
}

function trackOf(value: any) {
  if (props.trackBy instanceof Function) return props.trackBy(value);
  else return get(value, props.trackBy);
}
</script>

<template>
  <div class="combobox">
    <input v-model="query" />
    <ul>
      <li
        v-for="item of items"
        :key="trackOf(item)"
        @click="select(item)"
        :class="{ active: trackOf(modelValue) === trackOf(item) }"
      >
        {{ labelOf(item) }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.active {
  background-color: #ddd;
}
</style>
