import { Component, OnInit } from '@angular/core';
import { SplashScreenTimerService } from './services/splash-screen-timer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  loadingPage : boolean;
  
  constructor(private timer: SplashScreenTimerService){
    this.loadingPage = true;
    let visited = localStorage.getItem("visited");
    // don't show the splash screen if already visited before
    if (visited) this.loadingPage = false;
    else localStorage.setItem("visited","true")
  }

  ngOnInit(){
    setTimeout(()=>{
      this.loadingPage = false
    }, this.timer.total)
  }
}
