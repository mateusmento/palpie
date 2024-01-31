import 'reflect-metadata';
import '@/assets/main.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import { createDependencyContainer } from '@/core/dependecy-injection';

const app = createApp(App);

app.provide('dependencyContainer', createDependencyContainer());

app.use(createPinia());
app.use(router);

app.mount('#app');
