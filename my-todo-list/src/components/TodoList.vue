<template>
  <div>
    <div v-for="(item, index) in propsdata" :key="index">
      <router-link :to="{ name: 'todo_detail', params: { todoDetail: item } }">
        {{ item }}
      </router-link>
    </div>
  </div>
</template>

<script>
import EventBus from '../utils/eventBus.js';

export default {
  name: 'TodoList',
  props: ['propsdata'],
  created() {
    EventBus.$on('todo-item', data => {
      this.todoItems.push(data);
    });
  },
  data() {
    return {
      todoItems: [],
    };
  },
};
</script>

<style scoped></style>
