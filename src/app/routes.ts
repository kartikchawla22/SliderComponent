
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
import { SearchresultComponent } from './searchresult/searchresult.component';

export const routes = [
  {
    path: "admin",
    component: AdminComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: "",
    component: MainbodyComponent,
  },
  {
    path: 'series/:i',
    component: SeasonsComponent,
  },
  {
    path: 'series/:i/season/:id',
    component: ComicsComponent
  },

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
  },
  {
    path: 'searchresults/:search',
    component: SearchresultComponent
  }


]