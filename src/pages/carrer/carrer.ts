import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController,AlertController } from 'ionic-angular';
import { CarrerInfoPage } from './../carrer-info/carrer-info';
import { CrudProvider } from '../../providers/crud/crud';

/**
 * Generated class for the CarrerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-carrer',
  templateUrl: 'carrer.html',
})
export class CarrerPage {
myCarrer:any;
sr=false;
internet=false;
constructor(public navCtrl: NavController,
   public navParams: NavParams,
   public alertCtrl: AlertController,
   public loadingCtrl: LoadingController,
    public crudProvider:CrudProvider) {
      
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

    this.crudProvider.getCarrer().then((data) => {
      if (data) {
        loader.dismiss();
        this.internet=true
      }
      this.myCarrer = data["data"];
      console.log( this.myCarrer);
    });
  }
  

  info(id){
    this.navCtrl.push(CarrerInfoPage, {
      id:id
    });
    console.log('carrer details',id);
    
  }
  ser_Input(){
    this.sr=!this.sr;
    }

    back(){
      this.navCtrl.pop();
    }
}
