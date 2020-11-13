import { ISender } from './../../models/sender';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  sender: Partial<ISender> = {};

  constructor() { }

  ngOnInit(): void {
  }

}
