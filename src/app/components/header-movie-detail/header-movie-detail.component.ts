import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { MovieDetail } from '../../models/DTOS/movie-detail.response';

@Component({
  selector: 'header-movie-detail',
  standalone: true,
  imports: [CommonModule, CardModule],
  templateUrl: './header-movie-detail.component.html',
  styleUrl: './header-movie-detail.component.css'
})
export class HeaderMovieDetailComponent {
  @Input() movie: MovieDetail | null = null;

  getImageUrl(path: string): string {
    return `https://image.tmdb.org/t/p/original${path}`;
  }

  get genres(): string {
    return this.movie?.genres?.map(g => g.name).join(', ') || '';
  }
  
  get spokenLanguages(): string {
    return this.movie?.spoken_languages?.map(l => l.english_name).join(', ') || '';
  }
  
  get countries(): string {
    return this.movie?.production_countries?.map(p => p.name).join(', ') || '';
  }
  
  get studios(): string {
    return this.movie?.production_companies?.map(c => c.name).join(', ') || '';
  }
  
}
