<script setup lang="ts">
import CreateProduct from './CreateProduct.vue';
import Products from './Products.vue';
</script>

<template>
  <main class="grid rows-xl">
    <CreateProduct />
    <Products />
  </main>
</template>

<style lang="scss" scoped>
main {
  padding: 10px;
  grid-template-columns: repeat(auto-fill, minmax(420px, 1fr));
}
</style>
