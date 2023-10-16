<script lang="ts" setup>
import PalCartItem from '@/components/PalCartItem.vue';
import { useCartStore } from '@/domain/cart/cart.store';

const cart = useCartStore();
</script>

<template>
  <section class="flex rows-lg card-lg">
    <div class="flex cols-auto">
      <h2>Cart</h2>
      <button class="buy-btn">Buy</button>
    </div>
    <div class="list grid rows-lg">
      <PalCartItem
        v-for="cartItem of cart.items"
        :key="cartItem.id"
        :cart-item="cartItem"
        @add-quantity="cart.incrementQuantity(cartItem)"
        @remove-quantity="cart.decrementQuantity(cartItem)"
      />
    </div>
  </section>
</template>

<style scoped>
.list {
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-auto-rows: 200px;
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
</style>
