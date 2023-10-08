import { defineStore } from 'pinia';
import { reactive, toRefs } from 'vue';
import { CategoriesApi } from './categories.api';
import type { Category } from './category.type';

const categoriesApi = new CategoriesApi();

export const useCategoryStore = defineStore('category', () => {
  const state = reactive({
    categories: [] as Category[],
  });

  async function fetch() {
    state.categories = await categoriesApi.findAll();
  }

  async function create(data: Partial<Category>) {
    const category = await categoriesApi.create(data);
    state.categories.push(category);
  }

  return {
    ...toRefs(state),
    fetch,
    create,
  };
});
