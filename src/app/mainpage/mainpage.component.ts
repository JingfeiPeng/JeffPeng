import { Component, OnInit } from '@angular/core';
import {ConfirmationService} from 'primeng/api';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

  constructor(private confirmationService: ConfirmationService) { }

  ngOnInit() {
  }
  
  confirm() {
    this.confirmationService.confirm({
        message: 'Are you sure that you want to perform this action?',
        accept: () => {
            //Actual logic to perform a confirmation
        }
    });
  }
}
