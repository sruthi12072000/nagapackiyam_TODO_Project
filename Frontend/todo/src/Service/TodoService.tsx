import axios from "axios";

const TODO_REST_API_BASE_URL = 'http://localhost:8080/api/todos'
export const getAllTodos = () => axios.get(TODO_REST_API_BASE_URL);
export const getTodoById =(todoId : number)=>axios.get(TODO_REST_API_BASE_URL+'/'+todoId);
export const createTodo=(todo : any)=>axios.post(TODO_REST_API_BASE_URL,todo);
export const completeTodo=(todoId : number)=>axios.put(TODO_REST_API_BASE_URL+'/'+todoId+'/complete');
export const incompleteTodo=(todoId : number)=>axios.put(TODO_REST_API_BASE_URL+'/'+todoId+'/incomplete');
export const updateTodo=(todoId : number,todo : any )=>axios.put(TODO_REST_API_BASE_URL+'/'+todoId,todo);
export const deleteTodo=(todoId : number)=>axios.delete(TODO_REST_API_BASE_URL+'/'+todoId);
