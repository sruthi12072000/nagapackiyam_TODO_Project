import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { completeTodo, deleteTodo, getAllTodos, incompleteTodo } from "../Service/TodoService";
import { Button, Table } from "react-bootstrap";

type Todo = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};

const ListTodo: React.FC = () => {
  const history = useHistory();
  const [todos, setTodos] = useState<Todo[]>([]);

  const updateTodo = (id: number) => {
    history.push(`/edit-todo/${id}`);
  };

  const listTodos = () => {
    getAllTodos()
      .then((response) => {
        setTodos(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const removeTodo = (id: number) => {
    deleteTodo(id)
      .then(() => listTodos())
      .catch((error) => console.log(error));
  };

  const completeTodos = (id: number) => {
    completeTodo(id)
      .then(() => listTodos())
      .catch((error) => console.log(error));
  };

  const incompleteTodos = (id: number) => {
    incompleteTodo(id)
      .then(() => listTodos())
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    listTodos();
  }, []);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-20">
          <h1 className="text-center mb-4">List Of Todos</h1>
          <Link to="/add-todo" className="btn btn-primary mb-2">Add Todo</Link>
          <div className="table-responsive">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Completed</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {todos.map((todo) => (
                  <tr key={todo.id}>
                    <td>{todo.title}</td>
                    <td>{todo.description}</td>
                    <td>{todo.completed ? "Yes" : "No"}</td>
                    <td>
                      <Button onClick={() => updateTodo(todo.id)} variant="primary">Update</Button>{" "}
                      <Button onClick={() => removeTodo(todo.id)} variant="danger">Delete</Button>{" "}
                      <Button onClick={() => completeTodos(todo.id)} variant="success">Completed</Button>{" "}
                      <Button onClick={() => incompleteTodos(todo.id)} variant="warning">Incompleted</Button>{" "}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListTodo;
