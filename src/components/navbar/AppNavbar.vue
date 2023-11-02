<template>
  <nav>
    <v-app-bar app color="primary" class="line">
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down" style="flex: 1; justify-content: center;">
        <v-btn
          text
          v-for="(item, index) in topToolbarItems"
          :key="index"
          class="white--text"
        >
          {{ item.label }}
        </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon @click="toggleTheme">
        <v-icon>{{ isDarkTheme ? 'mdi-white-balance-sunny' : 'mdi-moon-waning-crescent' }}</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
  </nav>
</template>

<script setup lang="js">
import { useTheme } from 'vuetify';
// import { useThemeStore } from '@/store/themeStore.js'; // Certifique-se de que o caminho para a loja de temas esteja correto

const theme = useTheme();
const isDarkTheme = theme.global.current.value.dark; // Verifica se o tema atual é escuro
// const themeStore = useThemeStore();

function toggleTheme() {
  const newTheme = isDarkTheme ? 'light' : 'dark';
  theme.global.name.value = newTheme;
  // themeStore.toggleTheme(newTheme); // Atualize a preferência do tema no Pinia
}
const topToolbarItems = [
  { label: 'dashboard' },
  { label: 'catálogo' },
  { label: 'Pedidos' },
  { label: 'expedição' },
];
</script>
