<script lang="ts" setup>
import Form from '@/components/Form.vue';
import Field from '@/components/Field.vue';
import Button from '@/components/Button.vue';
import { useCategoryStore } from '@/domain/products/category.store';

const categoryStore = useCategoryStore();
</script>

<template>
  <section class="grid rows-lg card-lg">
    <h2>Create Category</h2>
    <Form class="grid rows-lg" @submit="categoryStore.create">
      <Field
        label="Name"
        name="name"
        placeholder="Enter a name..."
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
