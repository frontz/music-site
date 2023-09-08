import { Component } from '@angular/core';
import {Album} from "../../models/album.model";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent {

  items: Album[] = [];

}
