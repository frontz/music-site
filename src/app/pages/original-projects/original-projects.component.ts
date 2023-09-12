import {Component, OnInit} from '@angular/core';
import {BasketService} from "../../services/basket.service";
import {Album} from "../../models/album.model";

@Component({
  selector: 'app-original-projects',
  templateUrl: './original-projects.component.html',
  styleUrls: ['./original-projects.component.css']
})
export class OriginalProjectsComponent implements OnInit {

  albums: Album[] = [];

  constructor(private basket: BasketService) {
  }

  ngOnInit() {
    this.albums = this.basket.getAlbums();
  }

  getAlbums() {
    return this.basket.getItems();
  }

  addAlbum(album: Album) {
    this.basket.addItem(album);
  }

  isAlbumAdded(id: number) {
    return this.basket.isAdded(id);
  }

}
