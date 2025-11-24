import Prism from 'prismjs'

// Define Vue language
Prism.languages.vue = Prism.languages.extend('markup', {})

// Define Vue language components
Object.assign(Prism.languages.vue, {
  comment: /<!--[\s\S]*?-->/,
  component: {
    pattern: /<\/?[\w:-]+\s*[^>]*>/i,
    inside: {
      tag: {
        pattern: /^<\/?[\w:-]+/i,
        inside: {
          punctuation: /^<\/?/,
          namespace: /^[\w:-]+:/,
        },
      },
      'attr-value': {
        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
        inside: {
          punctuation: [
            /^=/,
            { pattern: /^(\s*)["']|["']$/, lookbehind: true },
          ],
        },
      },
      punctuation: /\/?>/,
      'attr-name': /[\w:-]+/,
    },
  },
  script: {
    pattern: /(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,
    lookbehind: true,
    inside: Prism.languages.javascript,
    alias: 'language-javascript',
  },
  style: {
    pattern: /(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,
    lookbehind: true,
    inside: Prism.languages.css,
    alias: 'language-css',
  },
  template: {
    pattern: /(<template[\s\S]*?>)[\s\S]*?(?=<\/template>)/i,
    lookbehind: true,
    inside: Prism.languages.markup,
  },
})

export default Prism
