// eslint.config.cjs
module.exports = {
    languageOptions: {
        globals: {
            browser: true,
            es2021: true,
            structuredClone: 'readonly', // Declare structuredClone as global if you're using it
        },
        parserOptions: {
            ecmaVersion: 12, // This is equivalent to ES2021
            sourceType: 'module',
        },
    },
    rules: {
        'no-unused-vars': 'warn', // Warn on unused variables
        'no-console': 'off', // Allow console logs
        'semi': ['error', 'always'], // Require semicolons
        // Add more rules as needed
    },
};
