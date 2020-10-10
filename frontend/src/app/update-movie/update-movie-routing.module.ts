import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateMoviePage } from './update-movie.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateMoviePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateMoviePageRoutingModule {}
