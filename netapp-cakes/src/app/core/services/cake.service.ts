import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Cake} from "../../shared/models/cake";
import {environment} from "../../../environments/environment";

@Injectable()
export class CakeService {
  private readonly productsUri = 'assets/data/products.json';

  constructor(private http: HttpClient) {
  }
  getProducts$(): Observable<Cake[]> {
    return this.http.get<Cake[]>(
      `http://localhost:4000/products`
    );
  }

  addCake(cake: Cake) {
    console.log(cake)
     this.http.post(`http://localhost:4000/products`, cake).subscribe(console.log)
  }
}
