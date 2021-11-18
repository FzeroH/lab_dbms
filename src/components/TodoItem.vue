<template>
 <li>
    <span v-bind:class="{done:todo.done}">
      <input type="checkbox" v-if="!todo.done" @change="markDone(todo)"/>
      {{todo.task}}
    </span>
    <button class="remove_btn" v-on:click="$emit('remove-todo',todo.id)">
      Удалить
    </button>
  </li>
</template>

<script>
import TodosService from "../api/todo.requests";

export default {
  name: "TodoItem",
  props: {
    todo: {
      type: Object,
      required: true,
    }
  },
  methods: {
    async markDone(todo){
      todo.done = !todo.done
        await TodosService.updateTodoStatus(todo.id)
            .catch((error) => console.error(error.message))
    }
  }
}
</script>

<style scoped>
  li {
    border: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }

  .remove_btn {
    height: 100%;
    padding: 2px 5px;
    border: 1px solid transparent;
    border-radius: 5px;
    background-color: red;
    color: white;
    font-weight: bold;
    cursor: pointer;
  }

  input {
    margin-right: 1.5rem;
  }

  .done {
    text-decoration: line-through;

  }
</style>