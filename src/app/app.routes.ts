import { Routes } from '@angular/router';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { MovieListGeneroComponent } from './pages/movie-list-genero/movie-list-genero.component';
import { BuscaComponent } from './pages/busca/busca.component';

export const routes: Routes = [
  {
    path: '',
    component: MovieListComponent
  },
  {
    path: 'movie/:id',
    component: MovieDetailsComponent
  },
  {
    path: 'movies/genero/:id',
    component: MovieListGeneroComponent
  },
  {
    path: 'buscar/:query',
    component: BuscaComponent
  }
  
];
