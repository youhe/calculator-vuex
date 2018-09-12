import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  nums: [],
  oprs: [],
  currentNum: 0
}

const getters = {
  display: state => {
    var res = '';
    for (var i = 0; i < state.nums.length; i++) {
      res += String(state.nums[i]);
      res += state.oprs[i];
    }
    if (0 < state.currentNum || res == '') res += state.currentNum;
    return res;
  }
}

const actions = {
  addNum ({commit, state}, val) {
    commit('addCurrentNum', val);
  },
  operation ({commit, state}, val) {
    if (0 < state.currentNum) {
      commit('pushNum', state.currentNum);
      commit('pushOpr', val);
      commit('clearCurrentNum');
    }
  },
  equal ({commit, state}, val) {
    commit('pushNum', state.currentNum);

    var res = state.nums[0];
    for (var i = 1; i < state.nums.length; i++) {
      switch (state.oprs[i - 1]) {
        case '+':
          res += state.nums[i]
          break;
        case '-':
          res -= state.nums[i]
          break;
        case '*':
          res *= state.nums[i]
          break;
        case '/':
          res /= state.nums[i]
          break;
      }
    }

    commit('clearCurrentNum');
    commit('clearNum');
    commit('clearOpr');
    commit('addCurrentNum', res);
  },
  clear ({commit}) {
    commit('clearCurrentNum');
    commit('clearNum');
    commit('clearOpr');
  }
}

const mutations = {
  addCurrentNum (state, val) {
    var res = String(state.currentNum) + val;
    state.currentNum = Number(res);
  },
  pushNum (state, val) {
    state.nums.push(val);
  },
  pushOpr (state, val) {
    state.oprs.push(val);
  },
  clearCurrentNum () {
    state.currentNum = 0;
  },
  clearNum () {
    state.nums = [];
  },
  clearOpr () {
    state.oprs = [];
  },
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
