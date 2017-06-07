
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
        getusers: 'http://192.168.15.148:4000/api/v2/users',
        getseries: 'http://192.168.15.148:4000/api/v2/series',
        getseason: 'http://192.168.15.148:4000/api/v2/seasons',
        getcomics: 'http://192.168.15.148:4000/api/v2/comics',
        search: 'http://192.168.15.148:4000/api/v2/search/',
        checkusers: 'http://192.168.15.148:4000/api/v1/Check',
        getseasonbyid: 'http://192.168.15.148:4000/api/v2/seasons/',
        getcomicsbyid: 'http://192.168.15.148:4000/api/v2/comcis/',
        verifyemail: "http://192.168.15.148:4000/api/v1/verify/email",
        delusers: 'http://192.168.15.148:4000/api/v2/users',
        delseries: 'http://192.168.15.148:4000/api/v2/series',
        delseason: 'http://192.168.15.148:4000/api/v2/seasons',
        delcomics: 'http://192.168.15.148:4000/api/v2/comics',
        verify : 'http://192.168.15.148:4000/api/v2/verification/',


    }

    public roles = {
        x: ['SA', 'A', 'U']
    }
}