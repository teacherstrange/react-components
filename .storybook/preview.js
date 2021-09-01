import { ThemeProvider } from '../src/theme-switch'
import '../dist/themes.css';
import '../src/core.css';
import './overrides.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme="light">
      <Story />
    </ThemeProvider>
  ),
];
