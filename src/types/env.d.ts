/// <reference types="vite/client" />
/// <reference types="@vue/runtime-core" />
/// <reference types="@vue/runtime-dom" />

declare module '*.vue' {
  import type { DefineComponent } from '@vue/runtime-core'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// Vuex type augmentation
import { Store } from 'vuex'
import { State } from '@/stores'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}

// Add explicit module declaration for vuex
declare module 'vuex' {
  export * from 'vuex/types/index.d.ts'
}
