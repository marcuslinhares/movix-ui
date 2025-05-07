import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { MovieService } from '../../services/movie.service';
import { MovieCarouselComponent } from '../../components/carrosel-movies/carrosel-movies.component';
import { MainLayoutComponent } from '../../layouts/main-layout/main-layout.component';
import { CarroselHeaderComponent } from '../../components/carrosel-header/carrosel-header.component';

@Component({
  selector: 'app-movie-list',
  imports: [MainLayoutComponent, MovieCarouselComponent, CarroselHeaderComponent],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent implements OnInit{
  popularMovies: Movie[] = [];
  emCartazMovies: Movie[] = [];
  upcomingMovies: Movie[] = [];
  topRatedMovies: Movie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movieService.getMovies('popular').subscribe(movies => {
      this.popularMovies = movies;
    });

    this.movieService.getMovies('now_playing').subscribe(movies => {
      this.emCartazMovies = movies;
    });

    this.movieService.getMovies('upcoming').subscribe(movies => {
      this.upcomingMovies = movies;
    });

    this.movieService.getMovies('top_rated').subscribe(movies => {
      this.topRatedMovies = movies;
    });
  }
}
