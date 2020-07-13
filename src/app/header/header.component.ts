import { Component, OnInit, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HeaderSteps } from '../models/HeaderSteps.model'

interface Language {
  displayText: string,
  json: string
}

const Languages: { [ langName: string]: Language} = {
  ch: { displayText: '中文', json: 'ch'},
  en: { displayText: 'En', json: 'en'},
  fr: { displayText: 'Fr', json: 'fr'}
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  selectedLang: Language = Languages.en;
  languages = [ Languages.en, Languages.fr, Languages.ch]
  windowHeight: number = window.innerHeight;
  steps: HeaderSteps[] = [
    {
      id: "Home",
      label: "Home"
    },
    {
      id: "AboutMe",
      label: "About Me"
    },
    {
      id: "Experiences",
      label: "Experiences"
    },
    {
      id: "Projects",
      label: "Projects"
    },
    {
      id: "Contact",
      label: "Contact"
    }
  ]

  // called when scrolling
  @HostListener('window:scroll', ['$event'])
  onScroll(ev: any) {
    this.scrollManager();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowHeight = window.innerHeight;
  }
  
  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'fr', 'ch']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr|ch/) ? browserLang : 'en')
  }

  changeLanguage(lang: Language){
    this.selectedLang = lang;
    this.translate.use(`${lang.json}`);
  }

  // changeLanguage() {
    // this.language = this.language === languages.chinese ? languages.english : languages.chinese;
    // const languageCode = (this.language === languages.chinese) ? "en" : "ch";
    // this.translate.use(`${languageCode}`);
  // }

  ngOnInit() {
  }

  scrollManager() {
    const scrollPosY = window.pageYOffset || document.body.scrollTop;
    const navContainer = document.getElementById('header');
    const aboutmeContainer = document.getElementById(`AboutMe`) as HTMLElement;
    const bottomPos = aboutmeContainer.getBoundingClientRect().top;
    if (scrollPosY <= this.windowHeight - 100) {
      navContainer.classList.remove('shrinked');
    } else {
      navContainer.classList.add('shrinked');
    }

    const lowerPartDetectionRange = 200;
    const upperPartDetectionRange = -50;

    const steps = this.steps; // set up steps
    for (const i in steps) {
      if (steps.hasOwnProperty(i)) {
        // get actual target id as html
        const step = document.getElementById(`${steps[i].id}`) as HTMLElement;
        const stepYPosition = step.getBoundingClientRect().top;
        // when the top part of the container is within the detection range
        if (stepYPosition < lowerPartDetectionRange && stepYPosition >= upperPartDetectionRange) {
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

  goToStep(stepId: string) {
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
    if (index === 0) {
      stepTop = document.querySelector('app-header');
    }
    stepTop.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}
