<template>
  <h1>Todo Application</h1>
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
      let bearer_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidG9kb191c2VyIn0.00oETdVsYnWPnFTnzjWXdDsUxDBIdPu9U4F2HPaQm5U'
      const bearer = 'Bearer ' + bearer_token;
      this.todos = this.todos.filter(t => t.id !== id)
      fetch("http://80.76.42.97:3000/todos?id=eq."+id, {
        method: 'DELETE',
        headers: {
          'Authorization' : bearer,
          'Content-type' : 'application/json',
          "Access-Control-Allow-Origin": "*"
        },
      })
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
