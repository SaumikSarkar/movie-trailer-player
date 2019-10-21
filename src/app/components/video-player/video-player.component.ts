import { Component, OnInit } from '@angular/core';
import { MovieTrailerService } from 'src/app/_services/movie-trailer.service';
import * as models from '../../_models';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {

  //********* Variables *********/

  movieVideoData: Array<models.VideoPlayerData> = new Array<models.VideoPlayerData>();

  //*************************** */

  constructor(public appService: MovieTrailerService) { }

  ngOnInit() {
    this.appService.getVideoData().subscribe(data => {
      this.movieVideoData = data;
    },
    (error) => {
      console.log(error);
    },
    () => {
      console.log('moviedata', this.movieVideoData);
    });
  }

}