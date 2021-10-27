<template>
  <form @submit="onSubmit">
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
      let bearer_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidG9kb191c2VyIn0.00oETdVsYnWPnFTnzjWXdDsUxDBIdPu9U4F2HPaQm5U'
      const bearer = 'Bearer ' + bearer_token;
      if(this.title.trim()){
        let data = {
          'task': this.title
        }
        fetch("http://80.76.42.97:3000/todos", {
          method: 'POST',
          headers: {
            'Authorization' : bearer,
            'Content-type' : 'application/json',
            "Access-Control-Allow-Origin": "*"
          },
          body: JSON.stringify(data)
        })

      }
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