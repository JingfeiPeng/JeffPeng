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
import { InfoModalComponent } from './modals/info-modal/info-modal.component';
import { ToolsListComponent } from './mainpage/tools-list/tools-list.component';
import { CommonModule } from '@angular/common';
import { SpecificDetailComponent } from './mainpage/projects/specific-detail/specific-detail.component';
import { ScrollScreenAnimationComponent } from './mainpage/scroll-screen-animation/scroll-screen-animation.component';
import { CardNumDirective } from './mask/card-num.directive';
import { MonthYearDirective } from './mask/month-year.directive';
import { PhoneMaskDirective } from './mask/phone-mask.directive';
import { ExperiencesSectionComponent } from './mainpage/experiences-section/experiences-section.component';
import { TestComponent } from './test/test.component';




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
    ParticleComponent,
    InfoModalComponent,
    ToolsListComponent,
    SpecificDetailComponent,
    ScrollScreenAnimationComponent,
    CardNumDirective,
    MonthYearDirective,
    PhoneMaskDirective,
    ExperiencesSectionComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
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
