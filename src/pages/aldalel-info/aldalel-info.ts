import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController,AlertController } from 'ionic-angular';
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
internet=false;
constructor(public navCtrl: NavController,
   public navParams: NavParams,
   public alertCtrl: AlertController,
   public loadingCtrl: LoadingController,
    public crudProvider:CrudProvider) {
      this.company_id = this.navParams.get('id');
      this.company_name = this.navParams.get('company_name');
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
    content: "يرجى الانتضار ... يعتمد على سرعة الانترنيت لديك",});
  loader.present();
  
    setTimeout(() => {
      if (this.internet == false) {
         loader.dismiss();
       this.noInternet();
        }
      }, 10000);

    this.crudProvider.getCompanyDetails(this.company_id).then((data) => {
      if (data) {
        loader.dismiss();
        this.internet=true
      }
      this.ietmss = data["data"];
      this.myDetails.push(this.ietmss) ;
      console.log( this.ietmss);
    });
  }

}
