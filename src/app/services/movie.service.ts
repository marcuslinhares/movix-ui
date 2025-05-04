import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';
import { environment } from '../../environments/environment';
import { MovieResponse } from '../models/DTOS/movie.response';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private readonly apiKey = environment.apiKey;
  private readonly baseUrl = 'https://api.themoviedb.org/3';
  private readonly LANGUAGE = 'pt-BR'

  constructor(private http: HttpClient) { }

  getMovies(urlMovies: string, page: number = 1): Observable<Movie[]> {
    const url = `${this.baseUrl}/movie/${urlMovies}`;
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('language', this.LANGUAGE)
      .set('page', page.toString());

    return this.http.get<MovieResponse>(url, { params }).pipe(
      map(response => response.results)
    );
  }
}
