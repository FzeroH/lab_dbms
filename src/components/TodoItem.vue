<template>
 <li>
    <span v-bind:class="{done:todo.done}">
      <input type="checkbox" @change="markDone(todo)"/>
      <!--<strong>{{todo.id}}.</strong>-->
      {{todo.task}}
    </span>
    <button
        class="remove_btn"
        v-on:click="$emit('remove-todo',todo.id)"
    >
      &times;
    </button>
  </li>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    todo: {
      type: Object,
      required: true,
    }
  },
  methods: {
    markDone(todo){
      todo.done = !todo.done
    }
  }
}
</script>

<style scoped>
  li{
    border: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    padding: .5rem 2rem;
    margin-bottom: 1rem;
  }
  .remove_btn{
    background-color: red;
    border-radius: 50%;
    color: white;
    font-weight: bold;
  }
  input{
    margin-right: 1.5rem;
  }
  .done{
    text-decoration: line-through;
  }
</style>