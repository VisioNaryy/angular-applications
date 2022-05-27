import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../services/photos.service';

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css'],
})
export class PhotoShowComponent implements OnInit {
  photoUrl: string = '';

  constructor(private photosService: PhotosService) {
    // this.fetchPhoto();
  }

  ngOnInit(): void {}

  onClick(): void {
    this.fetchPhoto();
  }

  fetchPhoto(): void {
    this.photosService.getPhoto().subscribe((response) => {
      this.photoUrl = response.urls.regular;
    });
  }
}
