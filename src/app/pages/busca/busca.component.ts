import { Component } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { MainLayoutComponent } from '../../layouts/main-layout/main-layout.component';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@Component({
  selector: 'busca',
  standalone: true,
  imports: [CommonModule, InfiniteScrollModule, MainLayoutComponent, MovieCardComponent],
  templateUrl: './busca.component.html',
  styleUrl: './busca.component.css'
})
export class BuscaComponent {
  movies: Movie[] = [];
  query = '';
  page = 1;
  hasMore = true;
  isLoading = false;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.query = params.get('query') || '';
      this.page = 1;
      this.movies = [];
      this.hasMore = true;
      if (this.query) this.buscarFilmes();
    });
  }

  buscarFilmes(): void {
    if (!this.query || this.isLoading || !this.hasMore) return;
    this.isLoading = true;
    this.movieService.buscarFilmes(this.query, this.page).subscribe(response => {
      this.movies.push(...response.results);
      this.hasMore = this.page < response.total_pages;
      this.isLoading = false;
    });
  }

  onScroll(): void {
    if (this.isLoading || !this.hasMore) return;
    this.page++;
    this.buscarFilmes();
  }
}
