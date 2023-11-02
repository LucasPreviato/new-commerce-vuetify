import { defineStore } from 'pinia';

export const useThemeStore = defineStore('theme', {
  state: () => ({
    isDarkTheme: false, // Valor padrão pode ser 'false' para light e 'true' para dark
  }),
  actions: {
    toggleTheme() {
      this.isDarkTheme = !this.isDarkTheme;
      // Aqui você pode salvar a preferência do tema no localStorage, se desejar
      localStorage.setItem('theme', this.isDarkTheme ? 'dark' : 'light');
    },
  },
});
