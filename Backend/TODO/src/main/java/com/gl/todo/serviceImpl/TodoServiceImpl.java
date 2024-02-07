package com.gl.todo.serviceImpl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gl.todo.dto.TodoDTO;
import com.gl.todo.exception.ResourceNotFoundException;
import com.gl.todo.mapper.TodoMapper;
import com.gl.todo.model.Todo;
import com.gl.todo.repository.TodoRepository;
import com.gl.todo.service.TodoService;
@Service
public class TodoServiceImpl implements TodoService {
	@Autowired
	TodoRepository todoRepository;

	@Override
	public List<TodoDTO> getAllTodos() {
		List<Todo> list=todoRepository.findAll();
		return list.stream().map((todo)->TodoMapper.mapToTodoDTO(todo)).collect(Collectors.toList());
	}

	@Override
	public TodoDTO getTodoById(int id) {
		Todo todo=todoRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Todo is not exists with a given id :"+id));
		return TodoMapper.mapToTodoDTO(todo);
	}

	@Override
	public TodoDTO createTodo(TodoDTO todoDTO) {
		Todo todo=TodoMapper.mapToTodo(todoDTO);
		return TodoMapper.mapToTodoDTO(todoRepository.save(todo));
	}

	@Override
	public TodoDTO completeTodo(int id) {
		Todo todo=todoRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Todo is not exists with a given id :"+id));
		todo.setCompleted(true);
		return TodoMapper.mapToTodoDTO(todoRepository.save(todo));
	}

	@Override
	public TodoDTO incompleteTodo(int id) {
		
		Todo todo=todoRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Todo is not exists with a given id :"+id));
		todo.setCompleted(false);
		return TodoMapper.mapToTodoDTO(todoRepository.save(todo));
	}

	@Override
	public TodoDTO updateTodo(int id, TodoDTO todoDTO) {
		Todo todo=todoRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Todo is not exists with a given id :"+id));
		todo.setTitle(todoDTO.getTitle());
		todo.setDescription(todoDTO.getDescription());
		todo.setCompleted(false);
		return TodoMapper.mapToTodoDTO(todoRepository.save(todo));
	}

	@Override
	public void deleteTodo(int id) {
		Todo todo=todoRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Todo is not exists with a given id :"+id));
		todoRepository.deleteById(id);
		
		
	}

}
