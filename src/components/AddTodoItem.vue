<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="title" placeholder="Введите текст заметки"/>
    <button type="submit">Добавить</button>
  </form>
</template>

<script>
import TodosService from "../api/todo.requests";

export default {
  name: "AddTodoItem",
  
  data() {
    return {
      title: ''
    }
  },

  computed: {
    hasText() {
      return this.title.length !== 0;
    }
  },
  
  methods:{
    async onSubmit() {
      if (this.hasText) {
        await TodosService.addTodo({task: this.title})
            .then(() => this.$emit('add-title'))
            .catch((error) => console.error(error.message));
      }
      this.title = '';
    }
  }
}
</script>

<style scoped>
  form {
    display: flex;
  }

  input {
    width: 400rem;
    border-radius: 5px;
    border: 1px solid gray;

    padding: 0 10px;

    font-size: 18px;

    transition: 200ms ease;
    outline: none;
  }

  input[type=text]:focus {
    border: 1px solid dodgerblue;
    transition: 200ms ease;
  }

  button {
    margin-left: 2rem;
    padding: 10px;
    border: 2px solid transparent;
    border-radius: 5px;
    font-weight: bold;
    font-size: 1rem;

    background-color: dodgerblue;
    color: white;

    transition: 300ms ease;

    cursor: pointer;
  }

  button[type=submit]:hover {
    background: transparent;
    border: 2px solid dodgerblue;
    color: dodgerblue;

    transition: 300ms ease;
  }
</style>