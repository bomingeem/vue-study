import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
  },
  mutations: {
    ['ADD_TODO'](state, todo) {
      state.todos.push(todo);
    },
  },
  actions: {
    addTodo({ comit }, todo) {
      commit('ADD_TODO', todo);
    },
  },
  modules: {},
});
