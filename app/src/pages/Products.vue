<script lang="ts" setup>
import PalProduct from '@/components/PalProduct.vue';
import { useCategoryStore } from '@/domain/products/category.store';
import type { Category } from '@/domain/products/category.type';
import type { Product } from '@/domain/products/product.type';
import { useProductsStore } from '@/domain/products/products.store';
import { onMounted, ref, watch } from 'vue';

const productsStore = useProductsStore();
const categoryStore = useCategoryStore();

const activeCategory = ref<Category>();

onMounted(() => {
  productsStore.fetch();
  categoryStore.fetch();
});

watch(activeCategory, (category) => {
  productsStore.fetch({ categoryId: category?.id });
});

function editProduct(product: Product) {
  productsStore.product = product;
}
</script>

<template>
  <section class="products flex rows-lg card-lg">
    <h2 class="products__title">Products</h2>
    <div class="flex wrap cols-md">
      <div
        v-for="category of categoryStore.categories"
        :key="category.id"
        class="category p-sm"
        :class="{ active: category.id === activeCategory?.id }"
        @click="activeCategory = category !== activeCategory ? category : undefined"
      >
        {{ category.name }}
      </div>
    </div>
    <div class="list grid rows-lg">
      <PalProduct
        v-for="product of productsStore.products"
        :key="product.id"
        :product="product"
        @edit="editProduct(product)"
      />
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

.category {
  width: fit-content;
  min-width: 80px;
  padding: 5px 10px;
  border-radius: 50px;
  background-color: rgb(215, 215, 255);
  color: rgb(80, 80, 211);
  text-align: center;
  cursor: pointer;
  &.active {
    background-color: rgb(80, 80, 211);
    color: #fff;
  }
}

.list {
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-auto-rows: 200px;
}
</style>
