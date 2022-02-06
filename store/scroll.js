export const state = () => ({
  scroll: {
    isScrolling: false,
    limit: {
      x: 0,
      y: 0,
    },
    x: 0,
    y: 0,
  },
})

export const mutations = {
  SET_SCROLL: (state, payload) => {
    state.scroll = Object.assign({}, state.scroll, payload)
  },
}

export const actions = {
  setScroll: ({ commit }, payload) => {
    commit('SET_SCROLL', payload)
  },
}

export const getters = {
  getScroll: (state) => state.scroll,
}
