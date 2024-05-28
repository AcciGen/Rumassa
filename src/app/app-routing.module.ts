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

const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, canActivate: [authGuard, expireGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'news', component: NovostiComponent, canActivate: [authGuard, expireGuard]},
  {path: 'contact', component: KontaktComponent, canActivate: [authGuard, expireGuard]},
  {path: 'thanks', component: SpasiboComponent, canActivate: [authGuard, expireGuard]},
  {path: 'oplata', component: OplataComponent, canActivate: [authGuard, expireGuard]},
  {path: 'dostavka', component: DostavkaComponent, canActivate: [authGuard, expireGuard]},
  {path: 'adress', component: AdresDostavkiComponent, canActivate: [authGuard, expireGuard]},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
