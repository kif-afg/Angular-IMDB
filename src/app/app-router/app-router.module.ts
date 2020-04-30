import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }  from '@angular/router';

import { MoviesComponent }   from '../movies/movies.component';
import { VideoPlayComponent } from '../video-play/video-play.component';


const appRoutes: Routes = [
  { path: 'movies', component: MoviesComponent },
  { path: 'video-play/:path', component: VideoPlayComponent },
  { path: '',   redirectTo: '/movies', pathMatch: 'full' },
  { path: '**', component: MoviesComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRouterModule { }
