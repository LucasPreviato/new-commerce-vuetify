// import { useThemeStore } from '@/store/themeStore';
import { createVuetify } from 'vuetify';
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
export default createVuetify({
  theme: {
    // dark: useThemeStore().isDarkTheme,
    defaultTheme: 'light',
    themes: {
      light: {
        colors:{
          primary: '#388E3C',
          secondary: '#5CBBF6',
          success: '#4CAF50',
          successLighten1: '#E8F5E9',
          successLighten2: '#C8E6C9',
          successLighten3: '#A5D6A7',
          successLighten4: '#81C784',
          successDarken1: '#43A047',
          successDarken2: '#388E3C',
          successDarken3: '#2E7D32',
          successDarken4: '#1B5E20',
          accent1: '#B9F6CA',
          accent2: '#69F0AE',
          accent3: '#00E676',
          accent4: '#00C853',
        }
      },
      dark: {
        colors:{
          primary: '#388E3C',
          secondary: '#5CBBF6',
          success: '#4CAF50',
          successLighten1: '#E8F5E9',
          successLighten2: '#C8E6C9',
          successLighten3: '#A5D6A7',
          successLighten4: '#81C784',
          successDarken1: '#43A047',
          successDarken2: '#388E3C',
          successDarken3: '#2E7D32',
          successDarken4: '#1B5E20',
          accent1: '#B9F6CA',
          accent2: '#69F0AE',
          accent3: '#00E676',
          accent4: '#00C853',
          background: '#121212',
        }
      },
    },
  },
});
