import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public crudProvider:CrudProvider) {
      
 }

 ionViewDidLoad() {
  this.crudProvider.getEmployees().then((data) => {
   
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
