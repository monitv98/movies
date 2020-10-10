import { Movie } from './../models/movie';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  })
};
const apiUrl = 'http://localhost:8080/movies';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  currentMovieId: number;

  constructor(private http: HttpClient) { }

  setCurrentMovieId(id: number){
    this.currentMovieId = id;
  }

  getCurrentMovieId(): number {
    return this.currentMovieId;
  }

  getMovieById(id: number): Observable<Movie> {
    return this.http.get<Movie>(apiUrl + "/" + id);
  }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(apiUrl);
      // .pipe(
      //   tap(Movie => console.log('fetched Movies'))
      //   // ,
      //   // catchError(this.handleError('getMovies', []))
      // );
  };

  deleteMovie(id: number): Observable<any>{
    return this.http.delete(apiUrl + "/" + id);
  }

  addMovie(movie: any): Observable<any>{
    let result: Observable<Object>;
      var formData = new FormData();
      formData.append('name', movie.name);
      formData.append('description', movie.description);
      formData.append('genre', movie.genre );
      formData.append('release_date', movie.release_date)
      result = this.http.post(apiUrl, formData);
    
    return result;
  }

  updateMovie(id: number, movie: any): Observable<any>{
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append('name', movie.name);
    bodyEncoded.append('description', movie.description);
    bodyEncoded.append('genre', movie.genre );
    bodyEncoded.append('release_date', movie.release_date);
   
    return this.http.put(apiUrl + "/" + id, bodyEncoded, httpOptions);
  }
  

  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  //     console.error(error); // log to console instead
  //     return of(result as T);
  //   };
  // }
}