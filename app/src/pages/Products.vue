<script lang="ts" setup>
import { useCategoryStore } from '@/domain/products/category.store';
import { useProductsStore } from '@/domain/products/products.store';
import { onMounted } from 'vue';

const productsStore = useProductsStore();
const categoryStore = useCategoryStore();

onMounted(() => {
  productsStore.fetch();
  categoryStore.fetch();
});
</script>

<template>
  <section class="products flex rows-lg card-lg">
    <h2 class="products__title">Products</h2>
    <div class="list grid rows-lg">
      <div
        v-for="product of productsStore.products"
        :key="product.id"
        class="list-item g-md card-lg"
      >
        <div class="title">{{ product.title }}</div>
        <div class="price-quantity flex rows-md">
          <div class="price">${{ product.price }}</div>
          <div class="quantity">{{ product.quantity }} units</div>
        </div>
        <div class="buttons flex rows-sm ml-auto">
          <button class="buy-btn mt-auto">Buy</button>
          <button class="addto-cart-button">Add to cart</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.card-lg {
  border-color: rgb(180, 173, 196);
}

.products__title {
  color: rgb(41, 20, 88);
}

.list {
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-auto-rows: 200px;
}

.list-item {
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: 1fr auto auto;
}

.title {
  grid-column: span 2;
}

.buttons {
  grid-row: span 2;
}

.title {
  color: rgb(80, 80, 211);
}

.price-quantity {
  grid-row: span 2;
}

.price {
  font-size: 1.4rem;
  color: rgb(41, 20, 88);
}

.quantity {
  color: rgb(94, 83, 119);
}

.buy-btn {
  padding: 10px 15px;
  min-width: 80px;
  border-radius: 10px;
  background-color: rgb(80, 80, 211);
  border-color: rgb(80, 80, 211);
  color: #fff;
  font-weight: 600;
  font-size: 15px;
  &:focus {
    border-color: rgb(128, 128, 218);
  }
}

.addto-cart-button {
  padding: 5px 10px;
  border-radius: 5px;
  min-width: 100px;
  font-size: 13px;
  background-color: rgb(215, 215, 255);
  border-color: rgb(215, 215, 255);
  color: rgb(80, 80, 211);
}
</style>
