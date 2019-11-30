import { Component, OnInit, Input } from '@angular/core';
import { SplashScreenTimerService } from '../services/splash-screen-timer.service';
import {fade, fadeOut} from '../animations/fadeIn'

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss'],
  animations:[
    fade, fadeOut
  ]
})
export class SplashScreenComponent implements OnInit {
  showFirstText: boolean = true;
  showSecondText: boolean = false;
  @Input("exist") exist : boolean;
  constructor(private timer: SplashScreenTimerService) { }

  ngOnInit() {
    setTimeout(()=>{ 
      this.showSecondText = true;
    }, this.timer.firstText)
  }

}
