import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pic-gallery',
  templateUrl: './pic-gallery.component.html',
  styleUrls: ['./pic-gallery.component.css']
})
export class PicGalleryComponent implements OnInit, OnChanges {
  modalSource: string = '';
  dogPics = [];
  @Input() breedP = '';
  @Input() subP = '';

  constructor(private http: HttpClient) { }

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
    this.http
    .get<any>('https://dog.ceo/api/breeds/image/random/9')
    .subscribe(res => {
      this.dogPics = res.message;
    });
  }

  private fetchBreed() {
    if (this.subP === 'Sub-Breed' || this.subP === '') {
      this.http
      .get<any>(`https://dog.ceo/api/breed/${this.breedP}/images/random/9`)
      .subscribe(res => {
        this.dogPics = res.message;
      })
    } else {
      this.http
      .get<any>(`https://dog.ceo/api/breed/${this.breedP}${this.subP}/images/random/9`)
      .subscribe(res => {
        this.dogPics = res.message;
      })
    }
  }

}
