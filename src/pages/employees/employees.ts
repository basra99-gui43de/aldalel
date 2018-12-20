import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController,AlertController } from 'ionic-angular';
import { CrudProvider } from '../../providers/crud/crud';

/**
 * Generated class for the EmployeesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-employees',
  templateUrl: 'employees.html',
})
export class EmployeesPage {
myEmployees:any;
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

  this.crudProvider.getEmployees().then((data) => {
    if (data) {
      loader.dismiss();
      this.internet=true
    }
    this.myEmployees = data["data"];
    console.log( this.myEmployees);
  });
}

ser_Input(){
  this.sr=!this.sr;
  }

  back(){
    this.navCtrl.pop();
  }
}
