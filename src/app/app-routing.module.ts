import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';


const routes: Routes = [
  {
    path:"",
    component: MainpageComponent
  },
  {
    path:"**",
    redirectTo:""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




/* 

// lazy loading
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: 'app/enrollment/modules/authentication/authentication.module#AuthenticationModule',
      },
      {
        path: 'enrollment',
        canActivate: [
          AuthGuard
        ],
        loadChildren: 'app/enrollment/enrollment.module#EnrollmentModule',
      },
      {
        path: 'login',
        loadChildren: 'app/enrollment/modules/authentication/authentication.module#AuthenticationModule',
      },

      {
        path: 'error',
        component: StandAloneErrorComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];
*/