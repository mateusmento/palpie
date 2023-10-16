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

  function incrementQuantity(cartItem: CartItem) {
    cartItem.quantity++;
  }

  function decrementQuantity(cartItem: CartItem) {
    cartItem.quantity--;
    if (cartItem.quantity === 0) {
      items.value = items.value.filter((item) => item.id !== cartItem.id);
    }
  }

  return {
    items,
    addItem,
    incrementQuantity,
    decrementQuantity,
  };
});
