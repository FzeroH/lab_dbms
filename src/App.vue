<template>
  <h1>DB_HW Todo Application</h1>
  <AddTodoItem/>
  <hr/>
  <TodoList
  v-bind:todos = "todos"
  @remove-todo="removeTodo"/>
</template>

<script>

import TodoList from "./components/TodoList";
import AddTodoItem from "./components/AddTodoItem";

export default {
  name: 'App',
  data(){
    return {todos: []}
  },
  components: {
    AddTodoItem,
    TodoList
  },
  mounted() {
    fetch("http://80.76.42.97:3000/todos")
        .then(response => response.json(response))
        .then(json => {this.todos = json})
  },
  methods: {
    removeTodo(id){
      this.todos = this.todos.filter(t => t.id !== id)
    },
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
