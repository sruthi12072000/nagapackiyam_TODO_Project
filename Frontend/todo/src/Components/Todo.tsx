import { FormEvent, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
//import { Button } from "react-bootstrap";
import { createTodo, getTodoById, updateTodo } from "../Service/TodoService";

type RouteParam = {
  id: string;
};

const Todo: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);

  const navigator = useHistory();
  const { id } = useParams<RouteParam>();

  const [errors, setErrors] = useState({ title: "", description: "", completed: "" });

  const validateForm = () => {
    let valid = true;
    const errorsCopy = { ...errors };
    if (title.trim()) {
      errorsCopy.title = "";
    } else {
      errorsCopy.title = "Title is Required";
      valid = false;
    }
    if (description.trim()) {
      errorsCopy.description = "";
    } else {
      errorsCopy.description = "Description is Required";
      valid = false;
    }
    setErrors(errorsCopy);
    return valid;
  };

  const saveOrUpdate = (e: FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      const todo = { title, description, completed };
      if (id) {
        updateTodo(Number(id),todo)
          .then(() => navigator.push('/todo'))
          .catch((error) => console.log(error));
      } else {
        createTodo(todo)
          .then(() => navigator.push('/todo'))
          .catch((error) => console.log(error));
      }
    }
  };

  const pageTitle = () => {
    const title = id ? "Update ToDo" : "Add ToDo";
    return <h1>{title}</h1>;
  };

  useEffect(() => {
    if (id) {
      getTodoById(Number(id))
        .then((response) => {
          setTitle(response.data.title);
          setDescription(response.data.description);
          setCompleted(response.data.completed);
        })
        .catch((error) => console.log(error));
    } else {
      // Set default values when adding a new ToDo
      setTitle("");
      setDescription("");
      setCompleted(false);
    }
  }, [id]);

  return (
    <div className="container">
      <div className="card col-md-6 offset-md-3">
        <div className="card-body">
          {pageTitle()}
          <form>
            <div className="mb-3">
              <label className="form-label">Title:</label>
              <input
                type="text"
                className="form-control"
                value={title}
                placeholder="Enter the Title"
                onChange={(e) => setTitle(e.target.value)}
              />
              {errors.title && <div className="text-danger">{errors.title}</div>}
            </div>
            <div className="mb-3">
              <label className="form-label">Description:</label>
              <input
                type="text"
                className="form-control"
                value={description}
                placeholder="Enter the Description"
                onChange={(e) => setDescription(e.target.value)}
              />
              {errors.description && <div className="text-danger">{errors.description}</div>}
            </div>
            <div className="mb-3">
              <label className="form-label">Completed:</label>
              <select
                className="form-select"
                value={completed ? "Yes" : "No"}
                onChange={(e) => setCompleted(e.target.value === "Yes")}
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <button type="button" className="btn btn-primary" onClick={(e) => saveOrUpdate(e)}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Todo;
