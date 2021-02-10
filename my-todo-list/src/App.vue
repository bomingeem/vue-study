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
import TodoHeader from './views/TodoHeader.vue'
import TodoElement from './views/TodoElement.vue'
import TodoInput from './views/TodoInput.vue'
import TodoList from './views/TodoList.vue'
import TodoFooter from './views/TodoFooter.vue'

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
