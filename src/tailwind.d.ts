declare module 'tailwindcss/nesting' {
  import type { PluginCreator } from 'postcss'
  const plugin: PluginCreator<any>
  export default plugin
}
