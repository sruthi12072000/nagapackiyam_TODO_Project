package com.gl.todo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gl.todo.dto.TodoDTO;
import com.gl.todo.service.TodoService;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/todos")
public class TodoController {
	@Autowired
	TodoService todoService;
	
	 @GetMapping
	    public List<TodoDTO> getAllTodos() {
	        return todoService.getAllTodos();
	    }

	    @GetMapping("/{id}")
	    public TodoDTO getTodoById(@PathVariable int id) {
	        return todoService.getTodoById(id);
	    }

	    @PostMapping
	    public TodoDTO createTodo(@RequestBody TodoDTO todoDTO) {
	        return todoService.createTodo(todoDTO);
	    }

	    @PutMapping("/{id}/complete")
	    public TodoDTO completeTodo(@PathVariable int id) {
	        return todoService.completeTodo(id);
	    }

	    @PutMapping("/{id}/incomplete")
	    public TodoDTO incompleteTodo(@PathVariable int id) {
	        return todoService.incompleteTodo(id);
	    }

	    @PutMapping("/{id}")
	    public TodoDTO updateTodo(@PathVariable int id, @RequestBody TodoDTO todoDTO) {
	        return todoService.updateTodo(id, todoDTO);
	    }

	    @DeleteMapping("/{id}")
	    public void deleteTodo(@PathVariable int id) {
	        todoService.deleteTodo(id);
	    }

}
