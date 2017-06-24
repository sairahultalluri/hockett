import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { ListPage } from '../list/list';
import { Http } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

   selectedItem: any;
  icons: string[];
  items: [''];

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  this.http.get('https://jsonplaceholder.typicode.com/comments')
  .map(res => res.json()).subscribe(data => {
        this.items = data;
        console.log(this.items);
        },
    err => {
        console.log("Oops!");
    }
    );
    

    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for (let i = 1; i < 5; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }

}
