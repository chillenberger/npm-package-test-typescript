module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-notes/register-panel",
    "storybook-addon-designs",
    {
      name: 'storybook-addon-sass-postcss',
        options: {
          sassLoaderOptions: {
            implementation: require('sass'),
          },
        },
      },
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}