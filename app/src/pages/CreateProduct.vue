<script lang="ts" setup>
import Field from '@/components/Field.vue';
import Form from '@/components/Form.vue';
import Button from '@/components/Button.vue';
import { useProductsStore } from '@/domain/products/products.store';

const productsStore = useProductsStore();
</script>

<template>
  <section class="create-product grid rows-lg card-lg">
    <h2>Create Product</h2>
    <Form class="grid rows-lg" @submit="productsStore.createProduct">
      <Field
        name="title"
        label="Title"
        placeholder="Enter a title..."
        class="grid rows-sm"
        class-input="p-sm"
      />
      <Field
        name="price"
        label="Price"
        placeholder="Enter a prize"
        class="grid rows-sm"
        class-input="p-sm"
      />
      <Field
        name="quantity"
        label="Quantity"
        placeholder="Enter a quantity"
        class="grid rows-sm"
        class-input="p-sm"
      />
      <div class="grid cols-md w-fit ml-auto">
        <Button type="reset" class="p-sm">Clear</Button>
        <Button type="submit" class="p-sm">Send</Button>
      </div>
    </Form>
  </section>
</template>
