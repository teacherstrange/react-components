import '../dist/themes/light.css';
import './overrides.css';
import 'what-input';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    showRoots: true,
  },
}
