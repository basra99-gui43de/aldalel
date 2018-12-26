import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController,AlertController } from 'ionic-angular';
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
  internet=false;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public alertCtrl: AlertController,
     public loadingCtrl: LoadingController,
    public crudProvider:CrudProvider) {
      this.id = this.navParams.get('id');
      console.log('recieving id .....:', this.id);
      
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

    this.crudProvider.getCarrerInfo().then((data) => {
      if (data) {
        loader.dismiss();
        this.internet=true
      }
      this.myCarrerInfo = data["data"];
      console.log( this.myCarrerInfo);
    });
    }

}
