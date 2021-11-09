import instance from "../../config/axios.config";

class TodosService {

  static getTodos = () => new Promise((resolve, reject) => {
    instance.get('/todos')
        .then((res) => resolve(res.data))
        .catch((error) => reject(error));
  })

  static addTodo = (data) => new Promise((resolve, reject) => {
    instance.post('/todos', data)
        .then((res) => resolve(res))
        .catch((error) => reject(error));
  })

  static removeTodo = (id) => new Promise((resolve, reject) => {
    instance.delete(`todos?id=eq.${id}`)
        .then((res) => resolve(res))
        .catch((error) => reject(error));
  })
}

export default TodosService;