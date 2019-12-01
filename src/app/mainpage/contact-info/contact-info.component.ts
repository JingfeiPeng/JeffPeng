import { Component, OnInit } from '@angular/core';
import {faPhone  } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent implements OnInit {
  faCoffee = faPhone
  constructor() { }

  ngOnInit() {
  }

}
