import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProjectInfo } from 'src/app/models';

@Component({
  selector: 'app-specific-detail',
  templateUrl: './specific-detail.component.html',
  styleUrls: ['./specific-detail.component.scss']
})
export class SpecificDetailComponent implements OnInit {

  @Input("displayProjectDetail") display: boolean;
  @Output("closeDetails") closeDetails = new EventEmitter<boolean>()
  @Input("projectDetail") projectDetail : ProjectInfo = <ProjectInfo>{}; 

  constructor() { }

  ngOnInit() {
  }

  toggleDialog() {
    this.closeDetails.emit(false);
  }

}
