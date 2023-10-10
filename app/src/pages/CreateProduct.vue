<script lang="ts" setup>
import Field from '@/components/Field.vue';
import Form from '@/components/Form.vue';
import Button from '@/components/Button.vue';
import { useProductsStore } from '@/domain/products/products.store';
import { CategoriesApi } from '@/domain/products/categories.api';
import Multiselect from '@/components/Multiselect.vue';

const productStore = useProductsStore();
const categoryApi = new CategoriesApi();

function searchCategories(query: string) {
  return categoryApi.findAll({ name: query });
}
</script>

<template>
  <section class="create-product grid rows-lg card-lg">
    <h2>Create Product</h2>
    <Form
      v-model="productStore.product"
      class="grid rows-lg"
      @submit="productStore.create(productStore.product ?? {})"
    >
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
      <Field name="categories" label="Category" class="grid rows-sm">
        <Multiselect
          :options="searchCategories"
          track-by="id"
          label-by="name"
          class-search="p-sm"
        />
      </Field>
      <div class="grid cols-md w-fit ml-auto">
        <Button type="reset" class="p-sm">Clear</Button>
        <Button type="submit" class="p-sm">Send</Button>
      </div>
    </Form>
  </section>
</template>
