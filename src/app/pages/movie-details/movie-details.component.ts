import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { MovieDetail } from '../../models/DTOS/movie-detail.response';
import { HeaderMovieDetailComponent } from '../../components/header-movie-detail/header-movie-detail.component';
import { MainLayoutComponent } from '../../layouts/main-layout/main-layout.component';

@Component({
  selector: 'movie-details',
  standalone: true,
  imports: [MainLayoutComponent, HeaderMovieDetailComponent],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent implements OnInit{
    movie: MovieDetail | null = null;

  constructor(private route: ActivatedRoute, private movieService: MovieService) {}

  ngOnInit(): void {
    const movieId = Number(this.route.snapshot.paramMap.get('id'));
    this.movieService.getMovieDetail(movieId).subscribe(movie => {
      this.movie = movie;
    });
  }
}
