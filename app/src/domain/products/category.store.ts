import { defineStore } from 'pinia';
import { reactive, toRefs } from 'vue';
import { CategoriesApi, type FindCategoryCriteria } from './categories.api';
import type { Category } from './category.type';
import { useInjectable } from '@/core/dependecy-injection';

export const useCategoryStore = defineStore('category', () => {
  const state = reactive({
    categories: [] as Category[],
  });

  const categoriesApi = useInjectable(CategoriesApi);

  async function fetch(criteria: FindCategoryCriteria = {}) {
    state.categories = await categoriesApi.findAll(criteria);
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
