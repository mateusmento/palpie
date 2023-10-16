import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { CartItem } from './cart-item.type';
import type { Product } from '../products/product.type';

export const useCartStore = defineStore('cart', () => {
  const items = ref<CartItem[]>([]);

  function addItem(product: Product) {
    const existingItem = items.value.find((item) => item.product.id === product.id);
    if (existingItem) {
      incrementQuantity(existingItem);
    } else {
      items.value.push({
        id: items.value.map((p) => p.id).reduce((a, b) => Math.max(a, b), 0) + 1,
        product,
        quantity: 1,
      });
    }
  }

  function removeItem(cartItem: CartItem) {
    items.value = items.value.filter((item) => item.id !== cartItem.id);
  }

  function incrementQuantity(cartItem: CartItem) {
    cartItem.quantity++;
  }

  function decrementQuantity(cartItem: CartItem) {
    cartItem.quantity--;
    if (cartItem.quantity === 0) removeItem(cartItem);
  }

  return {
    items,
    addItem,
    removeItem,
    incrementQuantity,
    decrementQuantity,
  };
});
