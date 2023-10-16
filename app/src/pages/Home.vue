<script setup lang="ts">
import Cart from './Cart.vue';
import CreateCategory from './CreateCategory.vue';
import CreateProduct from './CreateProduct.vue';
import Products from './Products.vue';
</script>

<template>
  <main class="grid rows-xl">
    <CreateProduct class="create-product" />
    <div class="products-container">
      <Products />
    </div>
    <Cart />
    <CreateCategory />
  </main>
</template>

<style lang="scss" scoped>
main {
  padding: 10px;
  grid-template-columns: 380px 3fr 1fr;
  grid-template-rows: auto auto auto;
}

.products-container {
  grid-row: span 3;
}
</style>
