import { Component } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { MainLayoutComponent } from '../../layouts/main-layout/main-layout.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'busca',
  standalone: true,
  imports: [CommonModule, MainLayoutComponent, MovieCardComponent],
  templateUrl: './busca.component.html',
  styleUrl: './busca.component.css'
})
export class BuscaComponent {
  movies: Movie[] = [];
  query = '';

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.query = params.get('query') || '';
      this.buscarFilmes();
    });
  }

  buscarFilmes(): void {
    if (!this.query) return;
    this.movieService.buscarFilmes(this.query).subscribe(movies => {
      this.movies = movies;
    });
  }
}
