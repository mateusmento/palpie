import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Product } from './product.type';
import { ProductsApi, type FindProductsCriteria } from './products.api';
import { useInjectable } from '@/core/dependecy-injection';

export const useProductsStore = defineStore('products', () => {
  const products = ref<Product[]>([]);
  const product = ref<Product>();

  const productsApi = useInjectable(ProductsApi);

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
