import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CrudProvider } from '../../providers/crud/crud';

/**
 * Generated class for the CarrerInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-carrer-info',
  templateUrl: 'carrer-info.html',
})
export class CarrerInfoPage {
  myCarrerInfo:any;
  id:any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public crudProvider:CrudProvider) {
      this.id = this.navParams.get('id');
      console.log('recieving id .....:', this.id);
      
 }

  ionViewDidLoad() {
    this.crudProvider.getCarrerInfo().then((data) => {
     
      this.myCarrerInfo = data["data"];
      console.log( this.myCarrerInfo);
    });
    }

}
