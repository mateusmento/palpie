<script lang="ts" setup>
import type { CartItem } from '@/domain/cart/cart-item.type';

const props = defineProps<{
  cartItem: CartItem;
}>();

const emit = defineEmits(['edit', 'add-quantity', 'remove-quantity']);

function editProduct() {
  emit('edit', props.cartItem);
}

function addQuantity() {
  emit('add-quantity');
}

function removeQuantity() {
  emit('remove-quantity');
}
</script>

<template>
  <div class="product g-md card-md" @click="editProduct">
    <div class="title">{{ cartItem.product.title }}</div>
    <div class="price-quantity flex rows-md">
      <div class="price">${{ cartItem.product.price * cartItem.quantity }}</div>
      <div class="quantity">{{ cartItem.quantity }} units</div>
    </div>
    <div class="buttons flex rows-sm ml-auto">
      <button class="add-btn mt-auto" @click="addQuantity">Add More</button>
      <button class="remove-btn" @click="removeQuantity">One Less</button>
    </div>
  </div>
</template>

<style scoped>
.product {
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

.add-btn {
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

.remove-btn {
  padding: 5px 10px;
  border-radius: 5px;
  min-width: 100px;
  font-size: 13px;
  background-color: rgb(215, 215, 255);
  border-color: rgb(215, 215, 255);
  color: rgb(80, 80, 211);
}
</style>
