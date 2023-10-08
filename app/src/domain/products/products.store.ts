import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Product } from './product.type';
import { ProductsApi } from './products.api';

const productsApi = new ProductsApi();

export const useProductsStore = defineStore('products', () => {
  const products = ref<Product[]>([]);

  async function fetch() {
    products.value = await productsApi.findAll();
  }

  async function create(data: Partial<Product>) {
    const product = await productsApi.create(data);
    products.value.push(product);
  }

  return {
    products,
    fetch,
    create,
  };
});
