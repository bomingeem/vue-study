<template>
  <div>
    <div v-for="(item, index) in todoItems" :key="index">
      <router-link :to="{ name: 'todo_detail', params: { todoDetail: item } }">
        {{ item }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'TodoList',
  props: ['propsdata'],
  computed: {
    ...mapState({
      vuex_todos: state => state.todos,
    }),
  },
  data() {
    return {
      todoItems: [],
    };
  },
};
</script>

<style scoped></style>
