<template>
  <h1>Todo Application</h1>
  <AddTodoItem @add-title="initTodos"/>
  <hr/>
  <TodoList
    v-bind:todos="todos"
    @remove-todo="removeTodo"
  />
</template>

<script>
import TodoList from "./components/TodoList";
import AddTodoItem from "./components/AddTodoItem";

import TodosService from "./api/todo.requests";

export default {
  name: 'App',

  data() {
    return {
      todos: []
    }
  },

  components: {
    AddTodoItem,
    TodoList
  },

  mounted() {
    this.initTodos();
  },

  methods: {
    async removeTodo(id){
      this.todos = this.todos.filter(t=> t.id !== id)
      await TodosService.removeTodo(id)
          .catch((error) => console.error(error.message));
    },

    async initTodos() {
      await TodosService.getTodos()
          .then((data) => this.todos = data)
          .catch((error) => console.error(error.message));
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
