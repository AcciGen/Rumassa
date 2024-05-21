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

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'news', component: NovostiComponent},
  {path: 'contact', component: KontaktComponent},
  {path: 'thanks', component: SpasiboComponent},
  {path: 'oplata', component: OplataComponent},
  {path: 'dostavka', component: DostavkaComponent},
  {path: 'adress', component: AdresDostavkiComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
