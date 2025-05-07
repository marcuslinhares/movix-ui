import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'movie-card',
  standalone: true,
  imports: [CommonModule, ButtonModule, TagModule],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent{
  @Input() movie: Movie | null = null;

  constructor(private router: Router) { }

  getImageUrl(path: string): string {
    return `https://image.tmdb.org/t/p/w500${path}`;
  }

  goToDetails(movieId: number): void {
    this.router.navigate(['/movie', movieId]);
  }
}
