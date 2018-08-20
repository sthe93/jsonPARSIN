import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';



/**
 * Generated class for the ListingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-listing',
  templateUrl: 'listing.html',
})
export class ListingPage {
  data: any
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data=navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListingPage');
  }

}
