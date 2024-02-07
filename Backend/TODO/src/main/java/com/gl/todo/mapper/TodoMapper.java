package com.gl.todo.mapper;

import com.gl.todo.dto.TodoDTO;
import com.gl.todo.model.Todo;

public class TodoMapper {
	
	// convert Todo entity into TodoDTO
	public static TodoDTO mapToTodoDTO(Todo todo) {
        TodoDTO dto = new TodoDTO(todo.getId(),todo.getTitle(),todo.getDescription(),todo.isCompleted());
        return dto;
		
	}
	
	 //convert TodoDTO into Todo entity
	public static Todo mapToTodo(TodoDTO todoDTO) {
		Todo todo=new Todo(todoDTO.getId(),todoDTO.getTitle(),todoDTO.getDescription(),todoDTO.isCompleted());
		return todo;
	}

}
