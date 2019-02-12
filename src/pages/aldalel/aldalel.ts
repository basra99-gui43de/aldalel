import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController,AlertController } from 'ionic-angular';
import { AldalelInfoPage } from '../aldalel-info/aldalel-info';
import { CrudProvider } from '../../providers/crud/crud';

/**
 * Generated class for the AldalelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aldalel',
  templateUrl: 'aldalel.html',
})
export class AldalelPage {
//f= '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25';
// d=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
//myCategories:any;
myCompany:any;
sr=false;
internet=false;
//typeName=['0','سفر وسياحة','مطاعم','فنادق','اطارات وبطاريات','زيوت','بنوك و صيرفات','اثاث و مفروشات','طبية','طباعة واعلان','ديكور واصباغ','كاميرات المراقبة وملحقاتها','الحاسبات وملحقاتها','الزهور وتزيين العرائس','ملابس','سيارات','هواتف','كهربائية','الكترونية','مدارس وجامعات','شركات امنية','تجهيزات غذائية','انشائية','الماء والمشروبات الغازية','صالونات والازياء','النقل والتخليص'];


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
      content: "يرجى الانتضار ... يعتمد على سرعة الانترنيت لديك",});
    loader.present();

    setTimeout(() => {
      if (this.internet == false) {
         loader.dismiss();
       this.noInternet();
        }
      }, 10000);

    this.crudProvider.getCompaniesWithDetails().then((data) => {
     if (data) {
      loader.dismiss();
      this.internet=true
    }
      this.myCompany = data["data"];
      console.log( this.myCompany);
    });


    
  }


  ser_Input(){
    this.sr=!this.sr;
    }

    back(){
      this.navCtrl.pop();
    }

    info(id, company_name, subject,phone_number){
      this.navCtrl.push(AldalelInfoPage, {
        id:id,
        company_name: company_name,
        subject: subject,
        phone_number: phone_number
      });
      console.log('detailsId',id);
      console.log('subject: ', subject, 'company_name: ', company_name, 'phone_number: ', phone_number );
      
  
    }





  // list(id){
  //   this.navCtrl.push(AldalelListPage,{
  //     id:id
  //   });
  //   console.log('category id', id);
    
  // }
}
