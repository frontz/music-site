import { Injectable } from '@angular/core';
import {Album} from "../models/album.model";

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  albums: Album[] = [
    {id: 1, title: "Piano Solo", pathToImg: "assets/piano-solo.jpg", description: "original-projects.piano-solo", price: 9.50},
    {id: 2, title: "Deep Blue", pathToImg: "assets/deep-blue.jpg", description: "original-projects.deep-blue", price: 10.50},
    {id: 3, title: "Words & Tears", pathToImg: "assets/words&tears.jpg", description: "original-projects.words-and-tears", price: 1.90}
  ];

  selectedItems: Album[] = [];

  getAlbums() {
    return this.albums;
  }

  getItems() {
    return this.selectedItems;
  }

  addItem(album: Album) {
    this.selectedItems.push(album);
    console.log(this.selectedItems);
  }

  removeItem(id: number) {
    this.selectedItems = this.selectedItems.filter(album => album.id !== id);
  }

  clearItems() {
    this.selectedItems = [];
    console.log(this.selectedItems);
  }

  isAdded(id: number) {
    return !!this.selectedItems.find(e => e.id === id);
  }

  totalPrice() {
    let price = 0;
    for (let i = 0; i < this.selectedItems.length; i++) {
      price += this.selectedItems[i].price;
    }
    return price;
  }

}
