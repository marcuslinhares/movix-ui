import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { MovieService } from '../../services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { MainLayoutComponent } from '../../layouts/main-layout/main-layout.component';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { GeneroService } from '../../services/genero.service';
import { Genero } from '../../models/genero.model';

@Component({
  selector: 'movie-list-genero',
  standalone: true,
  imports: [InfiniteScrollModule, CommonModule, MainLayoutComponent, MovieCardComponent],
  templateUrl: './movie-list-genero.component.html',
  styleUrl: './movie-list-genero.component.css'
})
export class MovieListGeneroComponent implements OnInit {
  movies: Movie[] = [];
  genreId!: number;
  generoName!: string;
  page = 1;
  isLoading = false;
  hasMore = true;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private generoService: GeneroService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.genreId = +params.get('id')!;
      this.page = 1;
      this.movies = [];
      this.hasMore = true;
      this.loadMovies();
      this.loadGeneroName();
    });
  }

  loadGeneroName(): void {
    this.generoService.getGeneros().subscribe((response) => {
      const genero = response.genres.find(g => g.id === this.genreId);
      this.generoName = genero?.name || '';
    });
  }
  
  onScroll(): void {
    if (this.isLoading || !this.hasMore) return;
    this.page++;
    this.loadMovies();
  }

  loadMovies(): void {
    this.isLoading = true;
    this.movieService.getMoviesGenero(this.genreId, this.page).subscribe(
      (response) => {
        this.movies.push(...response.results);
        this.hasMore = this.page < response.total_pages;
        this.isLoading = false;
      }
    );
  }
}
