import { Component, OnInit } from '@angular/core';
import {fade} from '../../animations/fadeIn'

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  animations:[
    fade
  ]
})
export class AboutMeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
