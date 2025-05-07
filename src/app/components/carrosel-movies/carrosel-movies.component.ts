import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { MovieCardComponent } from '../movie-card/movie-card.component';

@Component({
  selector: 'movie-carousel',
  templateUrl: './carrosel-movies.component.html',
  standalone: true,
  imports: [MovieCardComponent, DividerModule, CardModule, CommonModule, CarouselModule]
})
export class MovieCarouselComponent{
  @Input() title: string = '';
  @Input() movies: Movie[] = [];

  constructor(){}

  responsiveOptions = [
    { breakpoint: '1400px', numVisible: 8, numScroll: 4 },
    { breakpoint: '1200px', numVisible: 7, numScroll: 3 },
    { breakpoint: '1000px', numVisible: 6, numScroll: 2 },
    { breakpoint: '800px', numVisible: 5, numScroll: 2 },
    { breakpoint: '600px', numVisible: 4, numScroll: 1 }

  ];
}
