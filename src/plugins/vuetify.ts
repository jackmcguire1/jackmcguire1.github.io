/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Composables
import { createVuetify } from 'vuetify'
// Styles
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        dark: true,
        colors: {
          'primary': '#4FC3F7',
          'secondary': '#B39DDB',
          'accent': '#FF6B6B',
          'error': '#FF5252',
          'info': '#2196F3',
          'success': '#4CAF50',
          'warning': '#FB8C00',
          'background': '#121212',
          'surface': '#1E1E1E',
          'surface-variant': '#2A2A2A',
          'on-surface-variant': '#EEEEEE',
        },
      },
    },
  },
})
