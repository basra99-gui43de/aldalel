import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CrudProvider } from '../../providers/crud/crud';

/**
 * Generated class for the JobListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-job-list',
  templateUrl: 'job-list.html',
})
export class JobListPage {
myJobs:any;
sr=false;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public crudProvider:CrudProvider) {
      
 }


 ionViewDidLoad() {
  this.crudProvider.getJobs().then((data) => {
   
    this.myJobs = data["data"];
    console.log( this.myJobs);
  });
}
  

ser_Input(){
  this.sr=!this.sr;
  }

  back(){
    this.navCtrl.pop();
  }
}
