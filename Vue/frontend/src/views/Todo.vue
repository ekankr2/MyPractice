<template>
  <div class="todo">
      <router-link :to="{ name: 'Home' }"
                   class="nav-link"
                   active-class="active">
        Home
      </router-link>
    <todo-header></todo-header>
    <!-- todo-input 컴포넌트가 emit(addTodo, ~~)를 하면 onAddTodo()가 동작 -->
    <todo-input v-on:addTodo="onAddTodo"></todo-input>
  </div>
</template>

<script>
import TodoHeader from "../components/TodoHeader";
import TodoInput from "../components/TodoInput";
export default {
  name: "Todo",
  components: {TodoInput, TodoHeader},
  methods: {
    ...mapActions([
        'addTodo',
        'removeTodo',
    ]),
    onAddTodo(content) {
      const todoItem = {content}
      this.addTodo(todoItem)
      this.save()
    }
  }
}
</script>

<style scoped>

</style>