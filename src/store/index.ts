import { InjectionKey } from 'vue'
import * as Vuex from 'vuex'

export interface State {
  isInitialLoadComplete: boolean
  isComponentsLoaded: boolean
}

export const key: InjectionKey<Vuex.Store<State>> = Symbol()

export const store = Vuex.createStore<State>({
  state: {
    isInitialLoadComplete: false,
    isComponentsLoaded: false
  },
  getters: {
    isFullyLoaded: (state: State) => state.isInitialLoadComplete && state.isComponentsLoaded
  },
  mutations: {
    setInitialLoadComplete(state: State) {
      state.isInitialLoadComplete = true
    },
    setComponentsLoaded(state: State) {
      state.isComponentsLoaded = true
    }
  }
})

// Define your own `useStore` composition function
export function useStore() {
  return Vuex.useStore(key)
}

export default store
