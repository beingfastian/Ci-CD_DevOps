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
            'no-unused-vars': 'warn', // Warn on unused variables
            'semi': ['error', 'always'], // Enforce semicolons
        },
    },
];
