import { Component, OnInit, HostListener, ElementRef, AfterViewInit } from '@angular/core';

const headerHeight = 80;

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
  picturesList : string[] = ["code3.jpg",'code1.png',"code2.jpeg", "code4.png", "code5.png", "code6.png", "code7.png", "code8.png"]
  picturesListTop: number = 1711.625;
  picturesToShow: number = this.picturesList.length;
  constructor(public el: ElementRef) { }

  ngOnInit() {
    const responsiveSceenSize = 600;
    if (this.screenWidth < responsiveSceenSize){
      this.imageheight = 80;
      this.imageWidth = this.imageheight*0.8;
    }
  }

  @HostListener('window:scroll',[])
  animateObject(){
    const height = window.innerHeight;
    const width = window.innerWidth + this.imageWidth;
    // get the position when screen scrow pos > element.top
    const componentPosition = this.el.nativeElement.offsetTop - height-headerHeight;
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
