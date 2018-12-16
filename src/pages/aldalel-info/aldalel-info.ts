import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CrudProvider } from '../../providers/crud/crud';

/**
 * Generated class for the AldalelInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aldalel-info',
  templateUrl: 'aldalel-info.html',
})
export class AldalelInfoPage {
myDetails=[];
company_id:any;
company_name:any;
ietmss:any
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public crudProvider:CrudProvider) {
      this.company_id = this.navParams.get('id');
      this.company_name = this.navParams.get('company_name');
 }

  ionViewDidLoad() {
    this.crudProvider.getCompanyDetails(this.company_id).then((data) => {
   
      this.ietmss = data["data"];
      this.myDetails.push(this.ietmss) ;
      console.log( this.myDetails);
    });
  }

}
