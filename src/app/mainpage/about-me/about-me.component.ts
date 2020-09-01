import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { fade } from '../../animations/fadeIn'

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  animations: [fade],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutMeComponent {

  constructor() { }

}
