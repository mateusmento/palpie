<script lang="ts" setup>
import { useProductsStore } from '@/domain/products/products.store';
import { onMounted } from 'vue';

const productsStore = useProductsStore();

onMounted(() => {
  productsStore.fetchProducts();
});
</script>

<template>
  <section class="products flex rows-lg card-lg">
    <h2>Products</h2>
    <div class="list grid rows-lg">
      <div v-for="product of productsStore.products" :key="product.id" class="list-item card-lg">
        <div class="title">{{ product.title }}</div>
        <div class="price">${{ product.price }}</div>
        <div class="quantity">{{ product.quantity }} units</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.products {
  /* width: fit-content; */
}

.list {
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: 200px;
}

.list-item {
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  align-content: space-between;
}

.title {
  grid-column: span 2;
}
</style>
