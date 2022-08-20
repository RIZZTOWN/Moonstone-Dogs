import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FetchDogsService } from '../shared/fetchDogs.service';

@Component({
  selector: 'app-pic-gallery',
  templateUrl: './pic-gallery.component.html',
  styleUrls: ['./pic-gallery.component.css']
})
export class PicGalleryComponent implements OnInit, OnChanges {
  modalSource: string = '';
  dogPics = [];
  @Input() breedP: string = '';
  @Input() subP: string = '';

  constructor(private http: HttpClient, private FetchDogsService: FetchDogsService) { }

  ngOnInit(): void {
    if (this.breedP === '' && this.subP === '') {
      this.fetchRandomDogPics();
    } else {
      this.fetchBreed();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.fetchBreed();
  }

  onSelect(event: any) {
    this.modalSource = event.target.src;
  }

  onModalClose() {
    this.modalSource = '';
  }

  private fetchRandomDogPics() {
    this.FetchDogsService.fetchDogs()
    .subscribe(res => {
      this.dogPics = res.message;
    });
  }

  private fetchBreed() {
    this.FetchDogsService.fetchBreeds(this.breedP, this.subP)
    .subscribe(res => {
      this.dogPics = res.message;
    })
  }

}
