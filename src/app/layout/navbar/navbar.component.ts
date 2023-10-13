import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {BasketService} from "../../services/basket.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public translate: TranslateService, private basket: BasketService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

}
