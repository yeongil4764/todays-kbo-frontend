module.exports = {
    root: true,
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react-native/all',
      'plugin:prettier/recommended', // Prettier를 ESLint와 함께 사용
    ],
    plugins: ['react', 'react-native', 'prettier'],
    env: {
      'react-native/react-native': true,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          semi: true,
          singleQuote: true,
          printWidth: 80,
          trailingComma: 'all',
          tabWidth: 2,
          bracketSpacing: true,
          arrowParens: 'avoid',
        },
      ],
      // 추가로 규칙을 덮어쓰고 싶으면 여기에 작성
    },
  };
  