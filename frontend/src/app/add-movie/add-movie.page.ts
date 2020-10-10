import { MovieService } from 'src/app/services/movie.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.page.html',
  styleUrls: ['./add-movie.page.scss'],
})
export class AddMoviePage implements OnInit {

  movieForm: FormGroup;

  constructor(public fb: FormBuilder,
    private MovieService: MovieService,
    private router: Router) {
    this.movieForm = this.fb.group({
      name: [''],
      despricion: [''],
      genre: [''],
      release_date : ['']
    });
  }

  ngOnInit() {
  }

  onFormSubmit() {
    if (!this.movieForm.valid) {
      return false;
    } else {
      let Movie = {
        id: null,
        name: this.movieForm.value.name,
        description: this.movieForm.value.despricion,
        genre: this.movieForm.value.genre,
        release_date : this.movieForm.value.release_date,
      }
      this.MovieService.addMovie(Movie)
        .subscribe((res) => {
          console.log("por aquí pasó")
          this.router.navigateByUrl("/home");
        });
    }
  }
}
