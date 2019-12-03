import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule}  from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ParticlesModule } from 'angular-particle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ProfileComponent } from './mainpage/profile/profile.component';
import { AboutMeComponent } from './mainpage/about-me/about-me.component';
import { ProjectsComponent } from './mainpage/projects/projects.component';
import { ContactInfoComponent } from './mainpage/contact-info/contact-info.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { ParticleComponent } from './particle/particle.component';
import { PrimengModule } from './primeng/primeng.module';




export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http,
    `./assets/languages/`,
    '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainpageComponent,
    ProfileComponent,
    AboutMeComponent,
    ProjectsComponent,
    ContactInfoComponent,
    SplashScreenComponent,
    ParticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    ParticlesModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    PrimengModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
