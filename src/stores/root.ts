import { defineStore } from 'pinia'

export const useRootStore = defineStore('root', {
  state: () => ({
    isInitialLoadComplete: false,
    isComponentsLoaded: false
  }),
  getters: {
    isFullyLoaded(state) {
      return state.isInitialLoadComplete && state.isComponentsLoaded
    }
  },
  actions: {
    setInitialLoadComplete() {
      this.isInitialLoadComplete = true
    },
    setComponentsLoaded() {
      this.isComponentsLoaded = true
    }
  }
})
