module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'react-app',
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  parser: '@typescript-eslint/parser',
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.js', '.jsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
        moduleDirectory: ['node_modules', 'src/'],
        paths: ['src'],
      },
    },
  },
  plugins: ['react', 'simple-import-sort', 'import', 'prettier'],
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/prefer-default-export': 'off',
    'import/no-cycle': 'off',
    'import/no-anonymous-default-export': [
      'error',
      {
        // no export default on bad caces
        allowArray: true,
        allowArrowFunction: false,
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowCallExpression: true, // The true value here is for backward compatibility
        allowLiteral: true,
        allowObject: true,
      },
    ],
    'consistent-return': 'off',
    'array-callback-return': 'off',
    'no-shadow': 'off',
    'implicit-arrow-linebreak': 'off',
    'import/no-unresolved': 'off',
    'no-param-reassign': 'off',
    'no-restricted-syntax': 'off',
    'no-debugger': 'warn',
    'prefer-destructuring': 'off',
    'no-nested-ternary': 'off',
    'no-underscore-dangle': 'off',
    'prefer-rest-params': 'off',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
  },
};
