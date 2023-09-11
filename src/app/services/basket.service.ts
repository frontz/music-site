import { Injectable } from '@angular/core';
import {Album} from "../models/album.model";

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  selectedItems: Album[] = [];

  getItems() {
    return this.selectedItems;
  }

  addItem(album: Album) {
    this.selectedItems.push(album);
    console.log(this.selectedItems);
  }

  removeItem(album: Album) {
    this.selectedItems.filter(e => !album);
    console.log(this.selectedItems);
  }

  clearItems() {
    this.selectedItems = [];
    console.log(this.selectedItems);
  }

  isAdded(id: number) {
    return !!this.selectedItems.find(e => e.id === id);
  }

}
