import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor() { }

  quantityPS = 0;
  quantityWT = 0;

  ngOnInit(): void {
  }

  addPSToBasket() {
    this.quantityPS++;
    console.log(this.quantityPS);
  }

  addWTToBasket() {
    this.quantityWT++;
    console.log(this.quantityWT);
  }



}
