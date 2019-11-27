import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loadingPage : boolean = true;
  constructor(){
  }

  ngOnInit(){
    setTimeout(()=>{
      this.loadingPage = false
    }, 1000)
  }
}
