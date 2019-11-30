import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SplashScreenTimerService {
  private totalTime: number;
  private firstTextTime : number;
  constructor() { 
    this.totalTime = 2500
    this.firstTextTime = this.totalTime/4
  }

  get total(){
    return this.totalTime
  }

  get firstText(){
    return this.firstTextTime
  }


}
