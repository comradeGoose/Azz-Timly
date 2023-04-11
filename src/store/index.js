import { createStore } from 'vuex'

export default createStore({
  state: {
    calls: [
      {
        id: 0,
        play: false,
        music_name: 'music_0',
        week_days: ['2', '4', '6'],
        time_start: '00:00',
        time_end: '00:00'
      },
      {
        id: 1,
        play: true,
        music_name: 'music_1',
        week_days: ['1', '3', '5'],
        time_start: '11:11',
        time_end: '11:11'
      }
    ]
  },
  getters: {
    calls: state => state.calls
  },
  mutations: {
    addCall (state, call) {
      state.calls.push(call)
      console.log(state.calls)
    },
    sortCall (state) {
      state.calls.sort((a, b) => a.id - b.id)
    },
    deleteCall (state, id) {
      console.log(state.calls.filter((call) => call.id === id))
      state.calls = state.calls.filter((call) => call.id !== id)
      // console.log(state.calls)
    },
    clearCall (state) {
      state.calls = []
    },
    createCalls (state, newCalls) {
      state.calls = newCalls
    }
  },
  actions: {
    addCall ({ commit }, call) {
      commit('addCall', call)
    },
    sortCalls ({ commit }) {
      commit('sortCalls')
    },
    deleteCall ({ commit }, id) {
      commit('deleteCall', id)
    },
    clearCalls ({ commit }) {
      commit('clearCalls')
    },
    createCalls ({ commit }, newCalls) {
      commit('createCalls', newCalls)
    }
  },
  modules: {
  }
})
