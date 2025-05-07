import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { GenreResponse } from '../models/DTOS/generos.response';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {
  private readonly apiKey = environment.apiKey;
  private readonly baseUrl = 'https://api.themoviedb.org/3';
  private readonly LANGUAGE = 'pt-BR'

  constructor(private http: HttpClient) { }

  getGeneros(): Observable<GenreResponse> {
    return this.http.get<GenreResponse>(`${this.baseUrl}/genre/movie/list?api_key=${this.apiKey}&language=${this.LANGUAGE}`);
  }
}
