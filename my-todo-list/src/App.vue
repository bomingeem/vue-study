<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <todo-header/>
      <todo-element/>
      <todo-input/>
      <todo-list/>
      <todo-footer/>
    </v-main>
  </v-app>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoElement from './components/TodoElement.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

  export default {
    components: {
      TodoHeader,
      TodoElement,
      TodoInput,
      TodoList,
      TodoFooter
    },
    data: () => ({ drawer: null })
  }
</script>
