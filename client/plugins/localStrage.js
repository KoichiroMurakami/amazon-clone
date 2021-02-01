import createPersistdState from 'vuex-persistedstate'

export default ({ store }) => {
  window.onNuxtReady(() => {
    createPersistdState({})(store)
  })
}
