import { Component, Input } from '@angular/core';
import { Ator } from '../../models/ator.model';
import { AtorCardComponent } from '../ator-card/ator-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'elenco',
  standalone: true,
  imports: [CommonModule, AtorCardComponent],
  templateUrl: './elenco.component.html',
  styleUrl: './elenco.component.css'
})
export class ElencoComponent{

  @Input() elenco: Ator[] | null = null;

  constructor(){}
}
