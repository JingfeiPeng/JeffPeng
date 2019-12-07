import { Component, OnInit } from '@angular/core';
import {ProjectInfo} from '../../models'
import { projectData } from './projectData';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects : ProjectInfo[] = projectData;
  displayProjectDetail: boolean = false;
  projectDetail = null

  constructor() { }

  ngOnInit() {
  }
  
  showDetail(index: number){
    this.displayProjectDetail = true;
    this.projectDetail = this.projects[index]
  }
  closeDetail(){
    this.displayProjectDetail = false;
  }

}
