module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'plugin:vue/essential',
      'eslint:recommended',
    ],
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
    },
    rules: {
      'vue/multi-word-component-names': 'off', // Lehetővé teszi az egyszavas komponensneveket
    },
  };
  