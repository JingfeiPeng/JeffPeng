import { Component, OnInit } from '@angular/core';
import {faPhone, faMailBulk, faEnvelope  } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent implements OnInit {
  faPhone = faPhone
  faMailBulk = faMailBulk
  faEnvelope = faEnvelope
  topPos : number;
  constructor() { }

  ngOnInit() {
    const thisContainer = document.getElementById(`Contact`) as HTMLElement;
    const topPos = thisContainer.getBoundingClientRect().top;
    this.topPos = topPos
  }

}
