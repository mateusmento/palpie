<script lang="ts" setup>
import PalCartItem from '@/components/PalCartItem.vue';
import type { CartItem } from '@/domain/cart/cart-item.type';
import { useCartStore } from '@/domain/cart/cart.store';

const cart = useCartStore();

function addQuantity(cartItem: CartItem) {
  cartItem.quantity++;
}

function removeQuantity(cartItem: CartItem) {
  cartItem.quantity--;
}
</script>

<template>
  <section class="flex rows-lg card-lg">
    <h2>Cart</h2>
    <div class="list grid rows-lg">
      <PalCartItem
        v-for="cartItem of cart.items"
        :key="cartItem.id"
        :cart-item="cartItem"
        @add-quantity="addQuantity(cartItem)"
        @remove-quantity="removeQuantity(cartItem)"
      />
    </div>
  </section>
</template>

<style scoped>
.list {
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-auto-rows: 200px;
}
</style>
