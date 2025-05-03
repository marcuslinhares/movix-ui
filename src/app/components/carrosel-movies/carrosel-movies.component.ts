import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'movie-carousel',
  templateUrl: './carrosel-movies.component.html',
  standalone: true,
  imports: [DividerModule, CardModule, CommonModule, CarouselModule, ButtonModule, TagModule]
})
export class MovieCarouselComponent implements OnInit {
  @Input() title: string = '';
  @Input() movies: Movie[] = [];

  responsiveOptions = [
    { breakpoint: '1400px', numVisible: 8, numScroll: 1 },
    { breakpoint: '1199px', numVisible: 7, numScroll: 1 },
    { breakpoint: '767px', numVisible: 5, numScroll: 1 },
    { breakpoint: '575px', numVisible: 4, numScroll: 1 }
  ];

  constructor(private router: Router) {}

  getImageUrl(path: string): string {
    return `https://image.tmdb.org/t/p/w500${path}`;
  }

  goToDetails(id: number) {
    this.router.navigate(['/filmes', id]);
  }

  ngOnInit() {}
}
