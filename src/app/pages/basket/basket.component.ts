import {Component, OnInit} from '@angular/core';
import {Album} from "../../models/album.model";
import {BasketService} from "../../services/basket.service";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  paymentHandler: any = null;

  items: Album[] = [];

  constructor(private basket: BasketService) {
  }

  ngOnInit() {
    this.items = this.basket.getItems();
    this.basket.getItems();

  }

  removeAlbum(id: number) {
    this.basket.removeItem(id);
    this.items = this.basket.getItems();
    this.getTotalPrice();
  }

  getTotalPrice() {
    return this.basket.totalPrice();
  }

}
