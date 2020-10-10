package com.monica.cinema.entity.services;



import java.util.List;

import com.monica.cinema.entity.models.Movies;

public interface IMovieService {
	public Movies get(long id);

	public List<Movies> getEvry(String genre);

	public List<Movies> getAll();

	public void post(Movies movies);

	public void put(Movies movies, long id);

	public void delete(long id);
}
