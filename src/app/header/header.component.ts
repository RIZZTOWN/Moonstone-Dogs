import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {
  breedsObj: { [key: string]: any } = {};
  breeds: any = [];
  selectedBreed = '';
  selectedSubBreed = '';
  subBreeds = [];
  @Input() breedValue = 'Breed';
  @Input() subValue = 'Sub-Breed';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchBreeds();
    if (this.subValue === '') this.subValue = 'Sub-Breed';
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.subValue === '') this.subValue = 'Sub-Breed';
  }

  private fetchBreeds() {
    this.http
    .get<any>('https://dog.ceo/api/breeds/list/all')
    .subscribe(res => {
      this.breeds = res.message;
      this.breedsObj = res.message;
      const arr = [];
      for (const breed in this.breeds) {
        arr.push(breed);
      }
      this.breeds = arr;
    })
  }

  onBreedSelect(event: any) {
    this.selectedBreed = event.target.innerHTML;
    this.breedValue = event.target.innerHTML;
    this.subBreeds = this.breedsObj[this.selectedBreed];
    this.selectedSubBreed = '';
    this.subValue = 'Sub-Breed'
  }

  onSubBreedSelect(event: any) {
    this.selectedSubBreed = '/' + event.target.innerHTML;
    this.subValue = event.target.innerHTML;
  }

}
