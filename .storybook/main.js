module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  features: {
    storyStoreV7: true,
  },
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "storybook-css-modules-preset",
    'storybook-addon-themes',
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
      }
    },
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
    "storybook-addon-turbo-build"
  ],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
};
