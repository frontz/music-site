import { Injectable } from '@angular/core';
import {Album} from "../models/album.model";

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  albums: Album[] = [
    {id: 1, title: "Piano Solo", pathToImg: "assets/piano-solo.jpg", description: "original-projects.piano-solo", linkToListen: "#", price: 9.50},
    {id: 2, title: "Deep Blue", pathToImg: "assets/deep-blue.jpg", description: "original-projects.deep-blue", linkToListen: "https://www.youtube.com/watch?v=vUjWlBub8nA&list=PLNVnImUpc6CkVYVFokgodYsXvwSDbl1xz&ab_channel=TomaszFr%C4%85czek-Topic", price: 10.50},
    {id: 3, title: "Words & Tears", pathToImg: "assets/words&tears.jpg", description: "original-projects.words-and-tears", linkToListen: "https://www.youtube.com/watch?v=uSSazAhaJsI&t=2s&ab_channel=VariousArtists-Topic", price: 1.90}
  ];

  selectedItems: Album[] = [];

  getAlbums() {
    return this.albums;
  }

}
