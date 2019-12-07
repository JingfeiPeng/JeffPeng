import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {GalleriaModule} from 'primeng/galleria';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    DialogModule,
    ConfirmDialogModule,
    GalleriaModule
  ],
  exports:[
    ButtonModule,
    DialogModule,
    ConfirmDialogModule,
    GalleriaModule
  ],
  providers:[
    ConfirmationService
  ]
})
export class PrimengModule { }
