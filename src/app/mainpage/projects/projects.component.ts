import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ProjectInfo } from '../../models'
import { projectData } from './projectData';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent {
  projects: ProjectInfo[] = projectData;
  displayProjectDetail: boolean = false;
  projectDetail = null

  constructor() { }

  showDetail(index: number) {
    this.displayProjectDetail = true;
    this.projectDetail = this.projects[index]
  }

  closeDetail() {
    this.displayProjectDetail = false;
  }
}
