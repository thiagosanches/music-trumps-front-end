module.exports = {
  //   env: {
  //     browser: true,
  //     es6: true,
  //   },
  settings: {
    react: {
      version: 'detect', // React version. "detect" automatically picks the version you have installed.
      // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
      // default to latest and warns if missing
      // It will default to "detect" in the future
    },
  },
  extends: ['plugin:react/recommended', 'plugin:prettier/recommended', 'plugin:react-hooks/recommended'],
  parser: 'babel-eslint',
  //   globals: {
  //     Atomics: 'readonly',
  //     SharedArrayBuffer: 'readonly',
  //   },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    //     ecmaVersion: 2018,
    //     sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': [1, {extensions: ['.js', '.jsx']}],
    'react/jsx-props-no-spreading': [0],
    'react/no-unused-prop-types': ['error'],
    'react/no-unused-state': ['error'],
    'no-unused-vars': ['error'],
    'react/forbid-component-props': ['error', {forbid: ['style']}],
    'react/forbid-dom-props': ['error', {forbid: ['style']}],
  },
  ignorePatterns: ['public/*'],
};
