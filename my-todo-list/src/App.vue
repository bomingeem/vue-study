<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <todo-header />
      <todo-input @todo-item="writeTodo"/>
      <todo-list v-bind:propsdata="todos"/>
      <todo-footer />
      <router-link to="/foo">Go to Foo</router-link><br/>
      <router-link to="/bar">Go to Bar</router-link>
     <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  },
  data: () => ({
    drawer: null,
    msg: "",
    todos: []
  }),
  methods: {
    testMethod(data) {
      this.msg = data;
    },
    writeTodo(todo) {
      console.log('상위 컴포넌트', todo)
      this.todos.push(todo)
    }
  }
};
</script>
