import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    DialogModule,
    ConfirmDialogModule
  ],
  exports:[
    ButtonModule,
    DialogModule,
    ConfirmDialogModule
  ],
  providers:[
    ConfirmationService
  ]
})
export class PrimengModule { }
