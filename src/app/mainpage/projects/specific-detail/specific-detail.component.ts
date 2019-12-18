import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation, OnChanges, HostListener } from '@angular/core';
import { ProjectInfo } from 'src/app/models';

@Component({
  selector: 'app-specific-detail',
  templateUrl: './specific-detail.component.html',
  styleUrls: ['./specific-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SpecificDetailComponent implements OnInit, OnChanges {

  @Input("displayProjectDetail") display: boolean;
  @Output("closeDetails") closeDetails = new EventEmitter<boolean>()
  @Input("projectDetail") projectDetail : ProjectInfo = <ProjectInfo>{}; 
  images: any[] = [];
  windowSize: number;
  galleriaWidth : number = 400; 
  galleriaHeight : number  = 300;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowSize = window.innerWidth;
    this.updateGalleriaSize()
  }

  constructor() { }


  updateGalleriaSize(){
    if (this.windowSize <= 600){
      this.galleriaWidth = 330;
      this.galleriaHeight = 210;
    } else {
      this.galleriaWidth = 400; 
      this.galleriaHeight  = 300;
    }
  }

  ngOnInit() {
    this.windowSize = window.innerWidth;
    this.updateGalleriaSize()
  }

  ngOnChanges(){
    if (this.projectDetail && this.display){
      let newImages = []
      for (let picture of this.projectDetail.picturesList){
        let newImage = {
          source:`../../../assets/images/${picture}`,
          alt:'Hey',
          title: "yo"
        }
        newImages.push(newImage)
      }
      this.images = newImages;

    }
  }

  toggleDialog() {
    this.closeDetails.emit(false);
    // this.images = [];
  }

}
