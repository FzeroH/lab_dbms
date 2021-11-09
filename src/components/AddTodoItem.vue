<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="title"/>
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
  form{
    display: flex;
  }
  input{
    width: 400rem;
    border-radius: 5px;

  }
  button{
    margin-left: 2rem;
    padding: 5px;
    border-radius: 10px;
    background-color: white;
    font-weight: bold;
    font-size: 1rem;
  }
</style>