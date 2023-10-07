<script setup lang="ts">
import CreateProduct from './CreateProduct.vue';
import Products from './Products.vue';
</script>

<template>
  <main class="grid rows-xl">
    <CreateProduct />
    <div class="products-container">
      <Products />
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  padding: 10px;
  grid-template-columns: repeat(auto-fill, minmax(480px, 1fr));
}

.products-container {
  grid-row: span 2;
}
</style>
