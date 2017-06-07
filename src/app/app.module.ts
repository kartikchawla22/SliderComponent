import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Router, Route, RouterModule } from '@angular/router'
import {SelectModule} from 'angular2-select';

import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { MainbodyComponent } from './mainbody/mainbody.component'; 
import { SearchComponent } from './search/search.component';
import { CheckLogin } from './cookie';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { TermsComponent } from './terms/terms.component';
import { FooterComponent } from './footer/footer.component';
import { SeasonsComponent } from './seasons/seasons.component';
import { ComicsComponent } from './comics/comics.component';
import  { routes } from    './routes';
import {Configuration} from './config';
import { AuthserviceService } from './authservice.service'

import { RestfullService } from './restfull.service';
import { SearchresultComponent } from './searchresult/searchresult.component';
import { UpdateseriesComponent } from './updateseries/updateseries.component';
import { UpdateseasonsComponent } from './updateseasons/updateseasons.component';
import { UpdatecomicsComponent } from './updatecomics/updatecomics.component';
import { AdminauthService  } from './adminauth.service'



@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    HeaderComponent,
    LoginComponent,
    AdminComponent,
    MainbodyComponent,
    SearchComponent,
    ContactsComponent,
    AboutComponent,
    TermsComponent,
    FooterComponent,
    SeasonsComponent,
    ComicsComponent,
    SearchresultComponent,
    UpdateseriesComponent,
    UpdateseasonsComponent,
    UpdatecomicsComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SelectModule,
    RouterModule.forRoot(routes),
  ],
  providers: [CheckLogin, RestfullService, Configuration, AuthserviceService, AdminauthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
