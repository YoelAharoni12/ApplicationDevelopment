import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Cake} from "../../shared/models/cake";

@Injectable()
export class CakeService {
  private readonly productsUri = 'assets/data/products.json';
  // ${environment.productsUrl}/${this.productsUri}
  constructor(private http: HttpClient) {
  }

  getProducts$(): Observable<Cake[]> {
    return this.http.get<Cake[]>(
      `http://localhost:4000/products`
    );
  }

  addCake(cake: Cake) {
     this.http.post(`http://localhost:4000/products`, cake).subscribe(console.log)
  }
}
