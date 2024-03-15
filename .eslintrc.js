module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/recommended",
    "eslint:recommended",
    "@vue/prettier",
    "plugin:storybook/recommended",
    "plugin:@intlify/vue-i18n/recommended"
  ],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "@intlify/vue-i18n/no-missing-keys": "error",
    "@intlify/vue-i18n/no-dynamic-keys": "warn",
    "@intlify/vue-i18n/no-unused-keys": [
      "error",
      {
        "src": "./src",
        "extensions": [".js", ".vue"],
        "ignores": [],
        "enableFix": false
      }
    ],
    "@intlify/vue-i18n/no-duplicate-keys-in-locale": [
      "error",
      {
        "ignoreI18nBlock": false
      }
    ],
    "@intlify/vue-i18n/key-format-style": [
      "error",
      "camelCase",
      {
        "allowArray": false,
        "splitByDots": true,
      }
    ],
    "@intlify/vue-i18n/no-raw-text": [
      "error",
      {
        "attributes": {
          "/.+/": [
            "title",
            "aria-label",
            "aria-placeholder",
            "aria-roledescription",
            "aria-valuetext"
          ],
          "input": ["placeholder"],
          "img": ["alt"]
        },
        "ignorePattern": "^[-#:()&|]+$",
        "ignoreText": ["EUR", "HKD", "USD", "px"]
      }
    ]
  },
  settings: {
    'prettier-vue': {
      SFCBlocks: {
        template: false
      }
    },
    'vue-i18n': {
      localeDir: './src/locales/en/*.{json,json5,yaml,yml}', // extension is glob formatting!
      // Specify the version of `vue-i18n` you are using.
      // If not specified, the message will be parsed twice.
      messageSyntaxVersion: '^9.0.0'
    }
  },
  overrides: [{
    files: ["**/__tests__/*.{j,t}s?(x)", "**/tests/unit/**/*.spec.{j,t}s?(x)", "**/tests/unit/setup.js"],
    env: {
      jest: true
    }
  }]
};