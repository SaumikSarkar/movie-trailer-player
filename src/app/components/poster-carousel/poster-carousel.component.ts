import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as models from 'src/app/_models';

@Component({
  selector: 'app-poster-carousel',
  templateUrl: './poster-carousel.component.html',
  styleUrls: ['./poster-carousel.component.scss']
})
export class PosterCarouselComponent implements OnInit {

  //********* Variables ************/

  @Input('poster-data') posterData: Array<models.VideoPlayerData>;
  @Output('selected-video-data') selectedMovie: EventEmitter<models.VideoPlayerData> =
    new EventEmitter<models.VideoPlayerData>();

  //***************************** */

  constructor() { }

  ngOnInit() {
  }

  getPosterWidth(): number {
    return (100 / this.posterData.length);
  }

  setTrailer(selectedPoster: models.VideoPlayerData) {
    this.selectedMovie.emit(selectedPoster);
  }

}
