import { UpdateMoviePage } from './../update-movie/update-movie.page';
import { MovieService } from 'src/app/services/movie.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../models/movie';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit {

  Movies: Movie[];

  constructor(private MovieService: MovieService, private router: Router,private modalController: ModalController) { }
  async openModal(movie: Movie) {
    const modal = await this.modalController.create({
      component: UpdateMoviePage,
      componentProps: {
        movieFind: movie,
        other: {couldAlsoBeAnObject: true}
   }
    });
    return await modal.present();
  }

  ngOnInit() {
    this.getAllMovies();
  }

  ionViewWillEnter(){
    this.getAllMovies();
  }

  getAllMovies(){
    this.MovieService.getMovies().subscribe( Movies => {
      this.Movies = Movies;
      console.log(Movies);
    });

  }
  
  deleteMovie(id: number){
    this.MovieService.deleteMovie(id).subscribe( () => {
      this.getAllMovies();
    })
  }

  insertMovie(){
    this.router.navigateByUrl("/add-movie");
  }
}
