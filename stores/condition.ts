export const useConditionStore = defineStore('conditionStore', {
  state: () => {
    return {
      headerMenu: false,
    }
  },
  actions: {
    openHeaderMenu() {
      this.headerMenu = true
    },
    hideHeaderMenu() {
      this.headerMenu = false
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useConditionStore, import.meta.hot))
}
