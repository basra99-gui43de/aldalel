import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController,AlertController } from 'ionic-angular';
import { AldalelInfoPage } from '../aldalel-info/aldalel-info';
import { CrudProvider } from '../../providers/crud/crud';
// import {HttpClient} from '@angular/common/http';
/**
 * Generated class for the AldalelListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aldalel-list',
  templateUrl: 'aldalel-list.html',
})
export class AldalelListPage {
myCompany:any;
type:any
sr=false;
internet=false;
constructor(public navCtrl: NavController,
   public navParams: NavParams,
   public alertCtrl: AlertController,
   public loadingCtrl: LoadingController,
    public crudProvider:CrudProvider) {
      this.type = this.navParams.get('id');
 }

 noInternet() {
    
  const alert = this.alertCtrl.create({
    title: 'لا يوجد اتصال',
    subTitle: "تأكد من اتصالك بالانترنيت",
    buttons: ['حسناً']
  });
  alert.present();
}

ionViewDidLoad() {
  const loader = this.loadingCtrl.create({
    content: "يرجى الانتضار ... يعمد على سرعة الانترنيت لديك",});
  loader.present();
  
    setTimeout(() => {
      if (this.internet == false) {
         loader.dismiss();
       this.noInternet();
        }
      }, 10000);

  this.crudProvider.getCompanyByType(this.type).then((data) => {
    if (data) {
      loader.dismiss();
      this.internet=true
    }
    this.myCompany = data["data"];
    console.log( this.myCompany);
  });
}




  info(id, company_name){
    this.navCtrl.push(AldalelInfoPage, {
      id:id,
      company_name: company_name
    });
    console.log('detailsId',id);

  }

  ser_Input(){
    this.sr=!this.sr;
    }

    back(){
      this.navCtrl.pop();
    }
}
