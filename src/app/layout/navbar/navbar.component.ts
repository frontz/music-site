import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {BasketService} from "../../services/basket.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(public translate: TranslateService, private basket: BasketService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  quantity: number = 0;

  ngOnInit() {
    console.log('navbar-component');
    this.basket.getItems();
    this.quantity = this.basket.getItems().length;
  }

  getNumberOfItems() {
    return this.basket.getItems().length;
  }

}
