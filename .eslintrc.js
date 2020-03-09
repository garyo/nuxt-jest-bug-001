module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    'vue/singleline-html-element-content-newline': 'off',
    'space-before-function-paren': ['error', 'never'],
    // nuxt-link really should be a singleline element but it's not,
    // so ignore it here.
    'vue/multiline-html-element-content-newline': ["error", {
      "ignores": ["nuxt-link"]
    }]
  }
}
