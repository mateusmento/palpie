import { ProductsApi } from '@/domain/products/products.api';
import { container, type DependencyContainer, type InjectionToken } from 'tsyringe';
import { createAxios } from './axios';
import { inject } from 'vue';

export function createDependencyContainer() {
  const diContainer = container.createChildContainer();
  diContainer.registerInstance('axios', createAxios());
  diContainer.registerSingleton(ProductsApi);
  return diContainer;
}

export function useDependencyContainer() {
  const container = inject<DependencyContainer>('dependencyContainer');
  if (!container) throw new Error('DI container not provided');
  return container;
}

export function useInjectable<T>(key: InjectionToken<T>): T {
  const container = useDependencyContainer();
  return container.resolve(key);
}
