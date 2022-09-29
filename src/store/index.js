import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ArrayListexpenses: [],
    ArrayCategory: []
  },
  mutations: {
    FETCH_PAYMENT (state, ArrayListexpenses) {
      state.ArrayListexpenses = ArrayListexpenses
    },
    ADD_FETCH_PAYMENT (state, payment) {
      state.ArrayListexpenses.push(payment)
    },
    FETCH_CATEGORY (state, select) {
      state.ArrayCategory = select
    },
    SWITCH_EXP (state, settings) {
      state.ArrayCategory.find((item) => item === settings)
    }
  },
  getters: {
    ArrayListexpenses: (state) => state.ArrayListexpenses,
    ArrayCategory: (state) => state.ArrayCategory,
    TotalCost: (state) => state.ArrayListexpenses.reduce((sum, { value }) => sum + value, 0)
  },
  actions: {
    fetchData ({ commit }) {
      setTimeout(() => {
        const fetchPaymentsData = [
          {
            date: '28.03.2020',
            category: 'Food',
            value: 169
          },
          {
            date: '24.03.2020',
            category: 'Transport',
            value: 360
          },
          {
            date: '24.03.2020',
            category: 'Food',
            value: 532
          }
        ]
        commit('FETCH_PAYMENT', fetchPaymentsData)
      }, 100)
    },
    fetchCategory ({ commit }) {
      setTimeout(() => {
        const category = ['food', 'transport', 'journeys', 'lesson', 'Entertainment']
        commit('FETCH_CATEGORY', category)
      }, 100)
    }
  }
})
