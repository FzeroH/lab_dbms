<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="title"/>
    <button type="submit">Добавить</button>
  </form>
</template>

<script>
export default {
  name: "AddTodoItem",
  data() {
    return {
      title: ''
    }
  },
  methods:{
    onSubmit(){
      this.title = ''
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