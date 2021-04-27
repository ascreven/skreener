import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { find } from 'lodash';
import { DomSanitizer } from '@angular/platform-browser';

import { Movie } from '../movies.model';
import { MoviesService } from '../movies.service';
import { IVideo } from 'src/app/models/video.model';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movie: Movie;
  video?: IVideo;

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private movieService: MoviesService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id
    this.movieService.getMovie(id).subscribe((res) => {
      this.movie = res;
      this.getVideo();
    })
  }

  getVideo() {
    if (this.movie.videos) {
      const videos: IVideo[] = this.movie.videos.results;
      this.video = find(videos, function(video: IVideo) {
        return video.site == "YouTube";
      })

      if (this.video) {
        const url = 'https://www.youtube.com/embed/' + this.video.key;
        this.video.url = this.sanitizer.bypassSecurityTrustResourceUrl(url);
      }
    }
  }
}
