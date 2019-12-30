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
    // const text = document.querySelector(".introTitle");
    // const strText = text.textContent;
    // const splitText = strText.split("");
    // text.textContent = "";
    // for (let i = 0; i < splitText.length; i++){
    //   text.innerHTML +="<span>"+ splitText[i]+"</span>";
    // }

    // let char = 0;
    // let timer = setInterval(()=>{
    //   const span = text.querySelectorAll("span")[char++];
    //   console.log(span)
    //   span.classList.add('titleWithStyle');
    //   if (char === splitText.length){
    //     clearInterval(timer);
    //     return;
    //   }
    // }, 50);
  }

  startViewing(){
    let aboutMe = document.getElementById("AboutMe");
    aboutMe.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }

}

