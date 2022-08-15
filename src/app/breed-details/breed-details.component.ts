import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-breed-details',
  templateUrl: './breed-details.component.html',
  styleUrls: ['./breed-details.component.css']
})
export class BreedDetailsComponent implements OnInit {
  breed: string = 'Breed';
  sub: string = 'Sub-Breed';

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.breed = this.route.snapshot.params['breed'];
    this.sub = this.route.snapshot.params['sub'];
    this.route.params
    .subscribe(
      (params: Params) => {
        this.breed = params['breed'];
        this.sub = params['sub'];
      }
    )
    if (this.sub === '') this.sub = 'Sub-Breed';
  }

}
