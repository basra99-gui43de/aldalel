import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {JobListPage} from '../job-list/job-list';
import {EmployeesPage} from '../employees/employees';

/**
 * Generated class for the JobsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jobs',
  templateUrl: 'jobs.html',
})
export class JobsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  goToJobList(){
    this.navCtrl.push(JobListPage);
  }

  goToEmployees(){
    this.navCtrl.push(EmployeesPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JobsPage');
  }

}
