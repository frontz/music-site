import { Component } from '@angular/core';
import {BasketService} from "../../services/basket.service";
import {Album} from "../../models/album.model";

@Component({
  selector: 'app-original-projects',
  templateUrl: './original-projects.component.html',
  styleUrls: ['./original-projects.component.css']
})
export class OriginalProjectsComponent {

  constructor(private basket: BasketService) {
  }

  addAlbum(id: number, title: string, price: number) {
    this.basket.addItem({id, title, price});
  }

  isAlbumAdded(id: number) {
    return this.basket.isAdded(id);
  }

}
