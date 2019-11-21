import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  windowHeight: number = window.innerHeight;
  steps = [
    {
      id:"Home",
      label:"Home"
    },
    {
      id:"AboutMe",
      label:"About Me"
    },
    {
      id:"Projects",
      label:"Projects"
    },
    {
      id:"Contact",
      label:"Contact"
    }
  ]
  
  @HostListener('window:scroll', ['$event'])
  // called when scrolling
  onScroll(ev: any) {
    this.scrollManager();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowHeight = window.innerHeight;
  }

  constructor() { }

  ngOnInit() {
  }

  scrollManager(){
    const scrollPosY = window.pageYOffset || document.body.scrollTop;
    const navContainer = document.getElementById('header');
    const aboutmeContainer = document.getElementById(`AboutMe`) as HTMLElement;
    const bottomPos = aboutmeContainer.getBoundingClientRect().top;
    if (scrollPosY <= this.windowHeight - 100) {
      navContainer.classList.remove('shrinked');
    } else {
      navContainer.classList.add('shrinked');
    }

    const steps = this.steps; // set up steps
    for (const i in steps) {
      if (steps.hasOwnProperty(i)) {
        // get actual target id as html
        const step = document.getElementById(`${steps[i].id}`) as HTMLElement;
        const stepYPosition = step.getBoundingClientRect().top;
        if (stepYPosition < 200 && stepYPosition >= 0) { // within 200 of the height of page
          const stepNav = document.getElementById(
            `NAV-${steps[i].id}`
          ) as HTMLElement;
          // console.log(stepNav)
          if (stepNav) {
            const stepNavItems = document.querySelectorAll('.nav-link');
            [].forEach.call(stepNavItems, (item) => {
              item.classList.remove('active');
            });
            stepNav.classList.add('active');
          }
          break;
        }
      } 
    }

  }

  goToStep(stepId : string){
    let index;
    for (const i in this.steps) {
      if (this.steps.hasOwnProperty(i)) {
        if (stepId === this.steps[i].id) {
          index = parseInt(i, 10);
          break;
        }
      }
    }
    let stepTop = document.getElementById(stepId);
    if (index === 0){
      stepTop = document.querySelector('app-header');
    }
    stepTop.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}
