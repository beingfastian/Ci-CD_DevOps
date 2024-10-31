// eslint.config.cjs
module.exports = [
    {
        languageOptions: {
            globals: {
                browser: true,
                es2021: true,
            },
            parserOptions: {
                ecmaVersion: 12,
                sourceType: 'module',
            },
        },
        rules: {
            'no-console': 'off', // Allow console logs
        },
    },
    // ESLint recommended rules
    {
        rules: {
            'no-unused-vars': 'warn', // Example rule
            'semi': ['error', 'always'],
            // Add more rules as needed
        },
    },
];
