package com.monica.cinema.entity.dao;



import java.util.List;

import org.springframework.data.repository.CrudRepository;
import com.monica.cinema.entity.models.Movies;


public interface IMovieDao extends CrudRepository<Movies, Long> {

	List<Movies> findByGenre(String genre);
}
