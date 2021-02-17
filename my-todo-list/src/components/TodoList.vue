<template>
<div>
    <div v-for="(todo) in todoItems" :key="todo">
        {{ todo }}
    </div>
</div>
</template>

<script>
import EventBus from "../utils/eventBus.js";

export default {
    name: "TodoList",
    created() {
        EventBus.$on("todo-item", data => {
            this.todoItems.push(data);
        });
    },
    data() {
        return {
            todoItems: []
        }
    }
}
</script>

<style scoped>

</style>