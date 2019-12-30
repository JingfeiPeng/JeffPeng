import { Component, OnInit } from '@angular/core';
import { faChevronDown  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  downArrow = faChevronDown

  constructor() { }

  ngOnInit() {
    const text = document.querySelector("#introTitle");
    const strText = text.textContent;
    console.log(strText)
  }

  startViewing(){
    console.log("hit")
    let aboutMe = document.getElementById("AboutMe");
    aboutMe.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }

}

