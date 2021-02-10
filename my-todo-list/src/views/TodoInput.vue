<template>
    <div>
        <v-text-field label="입력" v-model="inputTodo" style="width: 20rem; display: inline-block;">
        </v-text-field>
        <v-btn elevation="2" small style="display: inline-block;" @click="clickEvent">저장</v-btn>
    </div>
</template>

<script>
import EventBus from '../utils/eventBus.js';

export default {
    name: 'TodoInput',
    data() {
        return {
            inputTodo: ''
        }
    },
    methods: {
        clickEvent() {
            EventBus.$emit('todo-item', this.inputTodo);
        }
    }
}
</script>

<style scoped>

</style>