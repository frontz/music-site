import { Component } from '@angular/core';
import {Album} from "../../models/album.model";
import {BasketService} from "../../services/basket.service";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent {

  constructor(private basket: BasketService) {
  }

  addAlbum(album: Album) {
    this.basket.addItem(album);
  }

  items: Album[] = [];
}
