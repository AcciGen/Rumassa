import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeInTwoComponent } from './Pages/home/home-in-two/home-in-two.component';
import { HomeInOneComponent } from './Pages/home/home-in-one/home-in-one.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { KontaktComponent } from './Pages/kontakt/kontakt.component';
import { SpasiboComponent } from './Pages/spasibo/spasibo.component';
import { AdresDostavkiComponent } from './Pages/adres-dostavki/adres-dostavki.component';
import { OplataComponent } from './Pages/oplata/oplata.component';
import { DostavkaComponent } from './Pages/dostavka/dostavka.component';
import { HomeInThreeComponent } from './Pages/home/home-in-three/home-in-three.component';
import { HomeInFourComponent } from './Pages/home/home-in-four/home-in-four.component';
import { HomeInFiveComponent } from './Pages/home/home-in-five/home-in-five.component';
import { HomeInEightComponent } from './Pages/home/home-in-eight/home-in-eight.component';
import { HomeInNineComponent } from './Pages/home/home-in-nine/home-in-nine.component';
import { HomeInSevenComponent } from './Pages/home/home-in-seven/home-in-seven.component';
import { HomeInSixComponent } from './Pages/home/home-in-six/home-in-six.component';
import { SkidkiComponent } from './Pages/skidki/skidki.component';
import { SkidkiSidebarComponent } from './Pages/skidki/skidki-sidebar/skidki-sidebar.component';
import { OIVComponent } from './Pages/o-i-v/o-i-v.component';
import { KOZComponent } from './Pages/k-o-z/k-o-z.component';
import { NovostiInComponent } from './Pages/novosti-in/novosti-in.component';
import { NovostiInOneComponent } from './Pages/novosti-in/novosti-in-one/novosti-in-one.component';
import { NovostiComponent } from './Pages/novosti/novosti.component';
import { NovostiOneComponent } from './Pages/novosti/novosti-one/novosti-one.component';
import { OtzifComponent } from './Pages/otzif/otzif.component';
import { OtzifOneComponent } from './Pages/otzif/otzif-one/otzif-one.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { OPComponent } from './Pages/o-p/o-p.component';
import { OPOneComponent } from './Pages/o-p/o-p-one/o-p-one.component';
import { FacebookLoginProvider, GoogleLoginProvider, GoogleSigninButtonModule, SocialAuthService, SocialAuthServiceConfig, SocialLoginModule } from '@abacritt/angularx-social-login';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    HomeInTwoComponent,
    HomeInOneComponent,
    LoginComponent,
    RegisterComponent,
    KontaktComponent,
    SpasiboComponent,
    AdresDostavkiComponent,
    OplataComponent,
    DostavkaComponent,
    HomeInThreeComponent,
    HomeInFourComponent,
    HomeInFiveComponent,
    HomeInEightComponent,
    HomeInNineComponent,
    HomeInSevenComponent,
    HomeInSixComponent,
    SkidkiComponent,
    SkidkiSidebarComponent,
    OIVComponent,
    KOZComponent,
    NovostiInComponent,
    NovostiInOneComponent,
    NovostiComponent,
    NovostiOneComponent,
    OtzifComponent,
    OtzifOneComponent,
    OPComponent,
    OPOneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterLink,
    RouterOutlet,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    GoogleSigninButtonModule,
    SocialLoginModule,
  ],
  providers: [
    provideClientHydration(), provideHttpClient(),
    SocialAuthService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false, // Set to true if you want to automatically log in users
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider("184933981069-ip8r3v84lkku8712umpipn0nhk0p3nm8.apps.googleusercontent.com")
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider("1419142218734083")
          }
        ],
        onError: (err) => {
          debugger;
          console.error(err);
        },
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
