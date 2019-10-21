import { Component, OnInit } from '@angular/core';
import { MovieTrailerService } from 'src/app/_services/movie-trailer.service';
import * as models from '../../_models';
import { DomSanitizer } from "@angular/platform-browser";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {

  //********* Variables *********/

  movieVideoData: Array<models.VideoPlayerData> = new Array<models.VideoPlayerData>();
  selectedVideo: models.VideoPlayerData = new models.VideoPlayerData();

  //*************************** */

  constructor(public appService: MovieTrailerService,
    private domSanitizer: DomSanitizer,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.appService.getVideoData().subscribe(data => {
      this.movieVideoData = data;
    },
    (error) => {
      console.log(error);
      this.toastr.error('Process failed due to some error');
      alert('Process failed due to some error');
    },
    () => {
      if (this.movieVideoData.length > 0) {
        this.selectedVideo = this.movieVideoData[0];
      }
    });
  }

  setTrailerUrl() {
    if (this.movieVideoData.length > 0) {
      return this.domSanitizer.bypassSecurityTrustResourceUrl(this.selectedVideo.trailer);
    }
    else {
      return this.domSanitizer.bypassSecurityTrustResourceUrl('');
    }
  }

  setSelectedTrailer(data: models.VideoPlayerData) {
    this.selectedVideo = data;
  }

}