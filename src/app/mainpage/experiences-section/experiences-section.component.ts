import { Component, OnInit } from '@angular/core';
import {experiencesData} from './experiencesData'
import { Experience } from 'src/app/models/experience.model';
// modified from : https://codepen.io/adventuresinmissions/pen/sJemI

@Component({
  selector: 'app-experiences-section',
  templateUrl: './experiences-section.component.html',
  styleUrls: ['./experiences-section.component.scss']
})
export class ExperiencesSectionComponent implements OnInit {
  
  experiences: Experience[] = experiencesData;

  constructor() { }

  ngOnInit() {
  }

}
