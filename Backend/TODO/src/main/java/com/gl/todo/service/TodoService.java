package com.gl.todo.service;

import java.util.List;

import com.gl.todo.dto.TodoDTO;

public interface TodoService {
	List<TodoDTO> getAllTodos();
    TodoDTO getTodoById(int id);
    TodoDTO createTodo(TodoDTO todoDTO);
    TodoDTO completeTodo(int id);
    TodoDTO incompleteTodo(int id);
    TodoDTO updateTodo(int id, TodoDTO todoDTO);
    void deleteTodo(int id);

}
