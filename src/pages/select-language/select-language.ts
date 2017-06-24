import { Component } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { ActionSheetController, IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Http } from '@angular/http';


@IonicPage()
@Component({
  selector: 'page-select-language',
  templateUrl: 'select-language.html',
})
export class SelectLanguagePage {  
   email;
   public API_ENDPOINT: string;
language;

  constructor(public http: Http,  
    private storage: Storage,
    public platform: Platform,
  public actionsheetCtrl: ActionSheetController,
  public navCtrl: NavController,
   public navParams: NavParams,
   public alerCtrl: AlertController) {
        this.API_ENDPOINT = "";

  }

  getStarted()

    { this.navCtrl.push(HomePage);
 
      
      this.storage.set('email', this.email);
      this.storage.set('language', this.language);
      
  let loginURL = this.API_ENDPOINT + 'user/authenticate';

  
      this.storage.get('email').then((val) => {
    console.log('Your email is', val);
  });
       this.storage.get('language').then((val) => {
    console.log('Your language is', val);
  });
    
  
};

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectLanguagePage');
  }

}
