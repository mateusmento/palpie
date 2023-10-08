import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Product } from './product.type';
import { ProductsApi, type FindProductsCriteria } from './products.api';

const productsApi = new ProductsApi();

export const useProductsStore = defineStore('products', () => {
  const products = ref<Product[]>([]);
  const product = ref<Product>();

  async function fetch(criteria: FindProductsCriteria = {}) {
    products.value = await productsApi.findAll(criteria);
  }

  async function create(data: Partial<Product>) {
    const product = await productsApi.create(data);
    products.value.push(product);
  }

  return {
    products,
    product,
    fetch,
    create,
  };
});
