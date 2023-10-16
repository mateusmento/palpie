import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { CartItem } from './cart-item.type';
import type { Product } from '../products/product.type';

export const useCartStore = defineStore('cart', () => {
  const items = ref<CartItem[]>([]);

  function addItem(product: Product) {
    items.value.push({
      id: items.value.map((p) => p.id).reduce((a, b) => Math.max(a, b), 0) + 1,
      product,
      quantity: 1,
    });
  }

  return {
    items,
    addItem,
  };
});
