<script setup lang="ts">
import Field from '@/components/Field.vue';
import Form from '@/components/Form.vue';
import Button from '@/components/Button.vue';

interface Product {
  id: number;
  title: string;
  price: string;
}

async function createProduct(data: Partial<Product>) {}
</script>

<template>
  <main class="grid cols-xl">
    <section class="grid rows-lg card-lg">
      <h2>Create Product</h2>
      <Form class="grid rows-lg" @submit="createProduct">
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
        <Button type="submit" class="p-sm">Send</Button>
      </Form>
    </section>
  </main>
</template>

<style lang="scss" scoped>
main {
  padding: 10px;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
}
</style>
