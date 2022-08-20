import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class FetchDogsService {

  constructor(private http: HttpClient) {}

  fetchDogs() {
    return this.http
    .get<any>('https://dog.ceo/api/breeds/image/random/9');
  }

  fetchBreeds(breed: string, subBreed: string) {
    if (subBreed === 'Sub-Breed' || subBreed === '') {
      return this.http
      .get<any>(`https://dog.ceo/api/breed/${breed}/images/random/9`)
    } else {
      return this.http
      .get<any>(`https://dog.ceo/api/breed/${breed}/${subBreed}/images/random/9`)
    }
  }

}