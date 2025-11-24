import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import postcssNesting from 'postcss-nesting'

export default {
  plugins: [postcssNesting(), tailwindcss(), autoprefixer()],
}
