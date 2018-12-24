module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "es6": true,
        "jest": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:flowtype/recommended",
        "plugin:prettier/recommended",
        "prettier",
        "prettier/flowtype",
        "prettier/react"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "flowtype",
        "prettier"
    ],
    "rules": {
        "prettier/prettier": ['error', { "singleQuote": false }],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "react/prop-types": [
            "off"
        ],
        "no-var": [
            "error"
        ],
        "no-console": "off",
        "no-debugger": "off",
        "no-unused-vars": [
            "warn"
        ],
    }
};