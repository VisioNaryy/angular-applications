import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UnsplashResponse } from '../models/UnsplashResponse';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  constructor(private httpClient: HttpClient) {}

  getPhoto() {
    return this.httpClient.get<UnsplashResponse>(
      'https://api.unsplash.com/photos/random',
      {
        headers: {
          Authorization:
            'Client-ID AZvq24WLXgOmOUoDABGXGBfyz_noeerVvs8bW7iZR-Y',
        },
      }
    );
  }
}
