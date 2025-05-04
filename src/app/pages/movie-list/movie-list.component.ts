import { Component } from '@angular/core';
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
export class MovieListComponent {
  popularMovies: Movie[] = [];
  emCartazMovies: Movie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movieService.getPopularMovies().subscribe(movies => {
      this.popularMovies = movies;
    });

    this.movieService.getPopularMovies().subscribe(movies => {
      this.emCartazMovies = movies;
    });
  }
}
