import { Component, OnInit, HostListener } from '@angular/core';
import {experiencesData} from './experiencesData'
import { Experience } from 'src/app/models/experience.model';
import { fadeFrom } from 'src/app/animations/ExperienceFadein';
// modified from : https://codepen.io/adventuresinmissions/pen/sJemI

@Component({
  selector: 'app-experiences-section',
  templateUrl: './experiences-section.component.html',
  styleUrls: ['./experiences-section.component.scss'],
  animations:[
    fadeFrom
  ]
})
export class ExperiencesSectionComponent implements OnInit {
  
  experiences: Experience[] = experiencesData;
  initialXPosForSections: number = 100;
  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(ev: any) {
    this.displaySections();
  }

  fadeInDirection(index: number){
    let initialPos = index % 2 == 0 && window.innerWidth>600 ? -this.initialXPosForSections: this.initialXPosForSections;
    let stateValue = this.experiences[index].show ? "shown": "hidden"
    return {value: stateValue, params : {initialPos: initialPos}};
  }

  displaySections(){
    const scrollPosYLower = window.pageYOffset || document.body.scrollTop;
    const scrollPosYUpper = scrollPosYLower + window.innerHeight*0.75;
    const steps = this.experiences; // set up steps
    for (const i in steps) {
      if (steps.hasOwnProperty(i)) {
        let de = document.documentElement;
        // get actual target id as html
        const step = document.getElementById(`${steps[i].title}`) as HTMLElement;
        let box = step.getBoundingClientRect();
        let top = box.top + window.pageYOffset - de.clientTop;
        // when the top part of the container is within the detection range
        if ( scrollPosYLower <= top && top <=scrollPosYUpper){
          steps[i].show = true;
        }
      }
    }
  }

}
