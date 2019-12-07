import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import action from './action'
import getters from './getters'

Vue.use(Vuex)

const state = {
  loginState: false,
  stuId: null,
  identity: null // 1 for user; 2 for Administrator;
}

export default new Vuex.Store({
  state: state,
  mutations: mutations,
  actions: action,
  getters: getters
})
