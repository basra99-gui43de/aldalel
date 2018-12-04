import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CrudProvider } from '../../providers/crud/crud';

/**
 * Generated class for the MarkitingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-markiting',
  templateUrl: 'markiting.html',
})
export class MarkitingPage {
myMarkating:any;
sr=false;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public crudProvider:CrudProvider) {
       
  }

  ionViewDidLoad() {
    this.crudProvider.getMarkting().then((data) => {
     
      this.myMarkating = data["data"];
      console.log( this.myMarkating);
    });
  }
    
  
  ser_Input(){
    this.sr=!this.sr;
    }

    back(){
      this.navCtrl.pop();
    } 
}
