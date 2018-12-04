import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CrudProvider } from '../../providers/crud/crud';

/**
 * Generated class for the PhonesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phones',
  templateUrl: 'phones.html',
})
export class PhonesPage {
  myphone:any
  sr=false;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public crudProvider:CrudProvider) {
       
  }

  ionViewDidLoad() {
    this.crudProvider.getPhones().then((data) => {
     
      this.myphone = data["data"] 
      console.log( this.myphone)
    })
  }
  ser_Input(){
    this.sr=!this.sr;
    }

    back(){
      this.navCtrl.pop();
    }
}
