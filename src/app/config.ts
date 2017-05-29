
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

export class Configuration {
    public URLS = {
        getusers: 'http://192.168.15.148:4000/api/v1/users',
        getseries: 'http://192.168.15.148:4000/api/v1/series',
        getseason: 'http://192.168.15.148:4000/api/v1/seasons',
        getcomics: 'http://192.168.15.148:4000/api/v1/comics',
        search: 'http://192.168.15.148:4000/api/v1/search/',
        checkusers: 'http://192.168.15.148:4000/api/v1/search/'



    }
}