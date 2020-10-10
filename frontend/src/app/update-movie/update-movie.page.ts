import { MovieService } from 'src/app/services/movie.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavController, NavParams, ToastController } from '@ionic/angular';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Movie } from '../models/movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.page.html',
  styleUrls: ['./update-movie.page.scss'],
})
export class UpdateMoviePage implements OnInit {
  movieUpadteForm: FormGroup;
  movieFind;
  constructor(public fb: FormBuilder,public MovieService: MovieService,private modalController: ModalController,private router: Router) {
    this.movieUpadteForm = this.fb.group({
      name: [''],
      despricion: [''],
      genre: [''],
      release_date : ['']
    });
   }
  ngOnInit() {
    console.log(`${this.movieFind.id}`)
  }
  async closeModal() {
    await this.modalController.dismiss();
  }

  onFormSubmit() {
    console.log(this.movieUpadteForm.value)
    if (!this.movieUpadteForm.valid) {
      return false;
    } else {
      let Movie = {
        id: this.movieFind.id,
        name: this.movieUpadteForm.value.name,
        description: this.movieUpadteForm.value.description,
        genre: this.movieUpadteForm.value.genre,
        release_date : this.movieUpadteForm.value.realease_date,
      }
      this.MovieService.updateMovie(Movie.id,Movie)
        .subscribe((res) => {
          console.log("por aquí pasó")
          this.router.navigateByUrl("/");
        });
    }
  }
}
