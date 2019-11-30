import { Component, OnInit } from '@angular/core';
import { SplashScreenTimerService } from './services/splash-screen-timer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loadingPage : boolean = true;
  constructor(private timer: SplashScreenTimerService){
  }

  ngOnInit(){
    setTimeout(()=>{
      this.loadingPage = false
    }, this.timer.total)
  }
}
