import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { TextToSpeech } from '@ionic-native/text-to-speech';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SelectLanguagePage } from '../pages/select-language/select-language';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { HockettProvider } from '../providers/hockett/hockett';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SelectLanguagePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SelectLanguagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TextToSpeech,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HockettProvider
  ]
})
export class AppModule {}
