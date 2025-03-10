import { Store } from 'vuex'
import { State } from '@/stores'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
