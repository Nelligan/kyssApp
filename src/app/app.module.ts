import { AccordionComponent } from './../components/accordion/accordion';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';




//PAGES
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { InformationPage } from './../pages/information/information';
import { AboutPage } from './../pages/about/about';
import { UsefulcontactsPage } from './../pages/usefulcontacts/usefulcontacts';
import { DepressionPage } from './../pages/depression/depression';
import { AnxietyPage } from './../pages/anxiety/anxiety';
import { EatingPage } from './../pages/eating/eating';
import { RelationPage } from './../pages/relation/relation';
import { BullyingPage } from './../pages/bullying/bullying';
import { AlcoholPage } from './../pages/alcohol/alcohol';
import { DrugsPage } from './../pages/drugs/drugs';
import { PsychPage } from './../pages/psych/psych';
import { SuicidePage } from './../pages/suicide/suicide';
import { GriefPage } from './../pages/grief/grief';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import{HttpModule} from '@angular/http';


// PLUGINS
import { InAppBrowser } from '@ionic-native/in-app-browser';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    InformationPage,
    AboutPage,
    UsefulcontactsPage,
    DepressionPage,
    AnxietyPage,
    EatingPage,
    RelationPage,
    BullyingPage,
    AlcoholPage,
    DrugsPage,
    PsychPage,
    SuicidePage,
    GriefPage,
    AccordionComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    InformationPage,
    AboutPage,
    UsefulcontactsPage,
    DepressionPage,
    AnxietyPage,
    EatingPage,
    RelationPage,
    BullyingPage,
    AlcoholPage,
    DrugsPage,
    PsychPage,
    SuicidePage,
    GriefPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    InAppBrowser
    
  ]
})
export class AppModule {}
