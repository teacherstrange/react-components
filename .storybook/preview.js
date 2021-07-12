import '../dist/themes/light.css';
import '../src/core.css';
import './overrides.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    showRoots: true,
  },
}
