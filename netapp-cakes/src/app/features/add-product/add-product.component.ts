import {Component, OnInit} from '@angular/core';
import {Cake} from "../../shared/models/cake";
import {CakeService} from "../../core/services/cake.service";
import {Observable, ReplaySubject} from "rxjs";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  cakeToAdd: Cake = {_id: "", category: "", description: "", image: "", name: "", price: 0};
  cakesCategory: string[] = ['birthdayCakes', 'stripeCakes', 'specialCookies', 'chocolateMousse', 'fruits', 'chocolateChipCookies', 'frenchPastries', 'muffinPastry']
  base64Output: string;

  constructor(private cakeService: CakeService) {
  }

  onFileSelected(event: Event) {
    // @ts-ignore
    this.convertFile(event.target.files[0]).subscribe((base64: string) => {
      this.base64Output = base64;
    });
  }

  convertFile(file: File): Observable<string> {
    const result = new ReplaySubject<string>(1);
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    // @ts-ignore
    reader.onload = (event) => result.next(btoa(event.target.result.toString()));
    return result;
  }

  onSubmit() {
    this.cakeToAdd.image = 'data:image/jpg;base64,' + this.base64Output
    this.cakeService.addCake(this.cakeToAdd)

  }
}
