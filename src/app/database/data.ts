import {Album} from "../models/album.model";

export class Data {
  albums: Album[] = [
    {id: 1, title: "Piano Solo", pathToImg: "assets/piano-solo.jpg", price: 9.50},
    {id: 2, title: "Deep Blue", pathToImg: "assets/deep-blue.jpg", price: 10.50},
    {id: 3, title: "Words & Tears", pathToImg: "assets/words&tears.jpg", price: 1.90}
  ];
}
