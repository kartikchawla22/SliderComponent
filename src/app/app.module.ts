import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Router, Route, RouterModule } from '@angular/router'

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

const routes = [
  { path: "admin", component: AdminComponent },
  { path: 'login', component: LoginComponent },
  { path: "", component: MainbodyComponent },
  {
    path: 'about',
    component: AboutComponent
  },

  {
    path: 'contacts',
    component: ContactsComponent
  },

  {
    path: 'terms',
    component: TermsComponent
  }



]

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
    FooterComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CheckLogin],
  bootstrap: [AppComponent]
})
export class AppModule { }
