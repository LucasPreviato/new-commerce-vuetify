import { createPinia } from 'pinia';
import { useAppStore } from './app';
import { useThemeStore } from './themeStore';

const pinia = createPinia();

// Registre o módulo de store 'app'
pinia.use(useThemeStore);
pinia.use(useAppStore);

export default { pinia, useThemeStore, useAppStore }

