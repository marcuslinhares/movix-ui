import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';
import { environment } from '../../environments/environment';
import { MovieResponse } from '../models/DTOS/movie.response';
import { map, Observable } from 'rxjs';
import { CreditsResponse } from '../models/DTOS/credits.response';
import { MovieDetail } from '../models/DTOS/movie-detail.response';

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

  getMovieDetail(movieId: number): Observable<MovieDetail> {
    const url = `${this.baseUrl}/movie/${movieId}`;
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('language', this.LANGUAGE);
  
    return this.http.get<MovieDetail>(url, { params });
  }

  getMovieCredits(movieId: number) {
    const url = `${this.baseUrl}/movie/${movieId}/credits`;
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('language', this.LANGUAGE);
  
    return this.http.get<CreditsResponse>(url, { params }).pipe(
      map(response => response.cast)
    );
  }

  getMoviesGenero(generoId: number, page: number = 1): Observable<MovieResponse> {
    const url = `${this.baseUrl}/discover/movie`;
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('language', this.LANGUAGE)
      .set('with_genres', generoId)
      .set('page', page.toString());
  
    return this.http.get<MovieResponse>(url, { params });
  }
  
  
}
