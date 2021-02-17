<template>
    <div>
        <v-text-field label="입력" v-model="inputTodo" style="width: 20rem; display: inline-block;">
        </v-text-field>
        <v-btn elevation="2" small style="display: inline-block;" @click="saveTodo">저장</v-btn>
        <router-link to="/foo">Go to Foo</router-link>
        <router-link to="/bar">Go to Bar</router-link>
        <router-view/>
    </div>
</template>

<script>
import EventBus from "../utils/eventBus.js";

export default {
    name: "TodoInput",
    data() {
        return {
            inputTodo: ''
        }
    },
    methods: {
        saveTodo() {
            EventBus.$emit('todo-item', this.inputTodo);
        }
    }
}
</script>

<style scoped>

</style>