import './overrides.css';
import 'what-input';
// import '../src/core/core.css';

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
