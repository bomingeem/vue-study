<template>
  <div>
    <v-text-field
      label="입력"
      v-model="inputTodo"
      style="width: 20rem; display: inline-block;"
    >
    </v-text-field>
    <v-btn elevation="2" small style="display: inline-block;" @click="saveTodo"
      >저장</v-btn
    >
  </div>
</template>

<script>
// import EventBus from "../utils/eventBus.js";
// import store from '../store';
import { mapActions } from 'vuex';

export default {
  name: 'TodoInput',
  data() {
    return {
      inputTodo: '',
    };
  },
  methods: {
    saveTodo() {
      this.addTodo(this.inputTodo);
    },
    ...mapActions(['addTodo']),
  },
};
</script>
