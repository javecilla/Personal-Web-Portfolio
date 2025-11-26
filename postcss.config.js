import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import postcssNesting from 'postcss-nesting'
import postcssImport from 'postcss-import'

export default {
  plugins: [postcssImport(), postcssNesting(), tailwindcss(), autoprefixer()],
}
