import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Movie } from '../movie';
import { }

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

private movies : Movie[];
private searchName : string;
  constructor(private service : HttpService, 
              private route: ActivatedRoute,
              private router: Router) { 
  }

  ngOnInit() {
  }

  async playMovie(movie:Movie){
     let path : string = await this.service.getVideos(movie.id);
     this.router.navigate(['/video-play', path]);
  }
  
  onClick(searchName:string){
     this.service.getMovie(searchName).subscribe(response => this.movies = response);
  }

  popularMovies(){
    this.service.getMostPopularMovies().subscribe(response => this.movies = response);
  }

  highRatedMovies(){
    this.service.getHigestRatedMovies().subscribe(response => this.movies = response);
  }

  upcomingMovies(){
    this.service.getUpcommingMovies().subscribe(response => this.movies = response);
  }

}
