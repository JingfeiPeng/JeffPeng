import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-scroll-screen-animation',
  templateUrl: './scroll-screen-animation.component.html',
  styleUrls: ['./scroll-screen-animation.component.scss']
})
export class ScrollScreenAnimationComponent implements OnInit {
  posX : number = 0;
  imageWidth: number  = 150;
  imageheight : number = 120;
  screenWidth : number =window.innerWidth;

  constructor(public el: ElementRef) { }

  ngOnInit() {
  }

  @HostListener('window:scroll',[])
  animateObject(){
    const height = window.innerHeight;
    const width = window.innerWidth + this.imageWidth;
    // get the position when screen scrow pos > element.top
    const componentPosition = this.el.nativeElement.offsetTop - height-80;
    const scrollPosition = window.pageYOffset;
    let diff = scrollPosition - (componentPosition + this.imageheight);
    if (diff >= this.imageheight && diff < height){
      let percentage = width / height;
      let calc = Math.floor((diff - this.imageheight) * percentage /50)*50
      calc = calc*1.2
      if (calc < this.imageheight){
        calc = 0;
      } else if (calc >=width - 2*this.imageWidth) {
        calc = width - 2*this.imageWidth;
      }
      this.posX = calc;
    }
  }

  getStyle(){
    return {
      'left': this.posX
    }
  }

}
