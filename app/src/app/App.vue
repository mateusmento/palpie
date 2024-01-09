<script setup lang="ts">
import { createDependencyContainer } from '@/core/dependecy-injection';
import { provide } from 'vue';
import { RouterView } from 'vue-router';

provide('dependencyContainer', createDependencyContainer());
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
