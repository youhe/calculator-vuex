import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  nums: [],
  oprs: [],
  currentNum: ''
}

const getters = {
  display: state => {
    var res = '';
    for (var i = 0; i < state.nums.length; i++) {
      res += String(state.nums[i]);
      res += state.oprs[i];
    }
    res += state.currentNum;
    if (res == '') res += '0';
    return res;
  }
}

const actions = {
  addNum ({commit, state}, val) {
    commit('addCurrentNum', val);
  },
  operation ({commit, state}, val) {
    if (state.currentNum != '0') {
      commit('pushNum', state.currentNum);
      commit('pushOpr', val);
      commit('clearCurrentNum');
    }
  },
  equal ({commit, state}, val) {
    commit('pushNum', state.currentNum);

    var res = Number(state.nums[0]);
    for (var i = 1; i < state.nums.length; i++) {
      switch (state.oprs[i - 1]) {
        case '+':
          res += Number(state.nums[i]);
          break;
        case '-':
          res -= Number(state.nums[i]);
          break;
        case '×':
          res *= Number(state.nums[i]);
          break;
        case '÷':
          res /= Number(state.nums[i]);
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
    if (state.currentNum.indexOf('.') != -1 && val == '.') {
      // 小数点２個目
    } else if (state.currentNum == '0' && val == '0') {
      // 00
    } else if (state.currentNum == '' && val == '.') {
      // . -> 0.
      state.currentNum = '0.';
    } else if (state.currentNum == '0' && val != '.') {
      // 0x -> x
      state.currentNum = String(val);
    } else {
      state.currentNum = state.currentNum + val;
    }
  },
  pushNum (state, val) {
    state.nums.push(val);
  },
  pushOpr (state, val) {
    state.oprs.push(val);
  },
  clearCurrentNum () {
    state.currentNum = '';
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
