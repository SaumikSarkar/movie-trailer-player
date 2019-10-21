import { Injectable } from '@angular/core';
import { CONFIG_DATA } from '../../assets/config/config-data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieTrailerService {

  APIurl: string = CONFIG_DATA.APIurl;

  constructor(private http: HttpClient) { }

  getVideoData(): Observable<any> {
    return this.http.get(`${this.APIurl}getVideos`);
  }
}