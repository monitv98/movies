package com.monica.cinema.controllers;




import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import com.monica.cinema.entity.models.Movies;
import com.monica.cinema.entity.services.IMovieService;


@CrossOrigin(origins = "http://localhost:8100")
@RestController

public class MovieController {
	
	@Autowired
	IMovieService movieService;

	@GetMapping("/movies") 
	public List<Movies> getAllBicycles() {
		return movieService.getAll();
	}
	
	@GetMapping("/movies/{id}")
	public Movies getOne(@PathVariable(value = "id") long id) {
		return movieService.get(id);
	}

	@PostMapping("/movies")
	public void add(Movies movies) {
		movieService.post(movies);
	}

	@PutMapping("/movies/{id}")
	public void update(Movies movies, @PathVariable(value = "id") long id) {
		movieService.put(movies, id);
	}

	@DeleteMapping("/movies/{id}")
	public void update(@PathVariable(value = "id") long id) {
		movieService.delete(id);
	}
	
}
