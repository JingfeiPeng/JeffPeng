import { Component, OnInit } from '@angular/core';
import {faPhone, faMailBulk  } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent implements OnInit {
  faPhone = faPhone
  faMailBulk = faMailBulk
  constructor() { }

  ngOnInit() {
  }

}
