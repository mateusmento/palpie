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
    <div class="list flex rows-sm">
      <div
        v-for="product of productsStore.products"
        :key="product.id"
        class="list-item flex cols-sm"
      >
        <div class="mr-auto">{{ product.title }}</div>
        <div>${{ product.price }}</div>
        <div>{{ product.quantity }} units</div>
      </div>
    </div>
  </section>
</template>
