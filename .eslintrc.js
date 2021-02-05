module.exports = {
  extends: ['react-app', 'airbnb', 'prettier', 'prettier/react'],
  env: {
    jest: true,
    browser: true,
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'max-len': ['warn', { code: 150 }],
    'react/jsx-filename-extension': ['off'],
    'no-use-before-define': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/no-named-as-default': 'off',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'ignore',
        named: 'ignore',
        asyncArrow: 'ignore',
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx'],
      },
      alias: {
        map: [
          ['@containers', './src/containers/'],
          ['@components', './src/components/'],
          ['@stores', './src/stores/'],
        ],
      },
    },
  },
  globals: {
    fetch: false,
    document: true,
    window: true,
  },
};
