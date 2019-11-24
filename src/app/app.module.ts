import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    ContactInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
