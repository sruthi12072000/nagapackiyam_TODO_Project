package com.gl.todo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TodoDTO {
	
	//DTO- Data Transfer Object
	
	int id;
	String title;
	String description;
	boolean completed;

}
