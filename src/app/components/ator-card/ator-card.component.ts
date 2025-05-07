import { Component, Input } from '@angular/core';
import { Ator } from '../../models/ator.model';

@Component({
  selector: 'ator-card',
  standalone: true,
  imports: [],
  templateUrl: './ator-card.component.html',
  styleUrl: './ator-card.component.css'
})
export class AtorCardComponent {
  @Input() ator!: Ator;


  getImageUrl(path: string): string {
    return `https://image.tmdb.org/t/p/w500${path}`;
  }
}
