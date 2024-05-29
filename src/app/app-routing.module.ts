import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { KontaktComponent } from './Pages/kontakt/kontakt.component';
import { SpasiboComponent } from './Pages/spasibo/spasibo.component';
import { OplataComponent } from './Pages/oplata/oplata.component';
import { DostavkaComponent } from './Pages/dostavka/dostavka.component';
import { AdresDostavkiComponent } from './Pages/adres-dostavki/adres-dostavki.component';
import { NovostiComponent } from './Pages/novosti/novosti.component';
import { authGuard, expireGuard } from './guards/auth.guard';
import { KOZComponent } from './Pages/k-o-z/k-o-z.component';
import { SkidkiComponent } from './Pages/skidki/skidki.component';
import { OtzifComponent } from './Pages/otzif/otzif.component';
import { OIVComponent } from './Pages/o-i-v/o-i-v.component';

const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [authGuard, expireGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'news', component: NovostiComponent, canActivate: [authGuard, expireGuard]},
  {path: 'contact', component: KontaktComponent, canActivate: [authGuard, expireGuard]},
  {path: 'thanks', component: SpasiboComponent, canActivate: [authGuard, expireGuard]},
  {path: 'oplata', component: OplataComponent, canActivate: [authGuard, expireGuard]},
  {path: 'dostavka', component: DostavkaComponent, canActivate: [authGuard, expireGuard]},
  {path: 'adress', component: AdresDostavkiComponent, canActivate: [authGuard, expireGuard]},
  {path: 'zakaz', component: KOZComponent, canActivate: [authGuard, expireGuard]},
  {path: 'skidki', component: SkidkiComponent, canActivate: [authGuard, expireGuard]},
  {path: 'otziv', component: OtzifComponent, canActivate: [authGuard, expireGuard]},
  {path: 'obmen-vozvrat', component: OIVComponent, canActivate: [authGuard, expireGuard]},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
