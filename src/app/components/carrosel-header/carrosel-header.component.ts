import { Component, Input, OnInit } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { Movie } from '../../models/movie.model';
import { Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'carrosel-header',
  standalone: true,
  imports: [CardModule, ButtonModule, GalleriaModule],
  templateUrl: './carrosel-header.component.html',
  styleUrl: './carrosel-header.component.css',
})
export class CarroselHeaderComponent implements OnInit {
  @Input() movies: Movie[] = [];

  constructor(private router: Router) { }

  getImageUrl(path: string): string {
    return `https://image.tmdb.org/t/p/w1280${path}`;
  }

  goToDetails(id: number) {
    this.router.navigate(['/filmes', id]);
  }

  ngOnInit() {}
}
