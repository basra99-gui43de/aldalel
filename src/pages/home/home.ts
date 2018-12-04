import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AldalelPage } from '../aldalel/aldalel';
import { MarkitingPage } from '../markiting/markiting';
import { PhonesPage } from '../phones/phones';
import { JobsPage } from '../jobs/jobs';
import { CarrerPage } from '../carrer/carrer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  dalel(){
  this.navCtrl.push(AldalelPage);
}
  markiting(){
  this.navCtrl.push(MarkitingPage);
}
  phone(){
  this.navCtrl.push(PhonesPage);
}
  job(){
  this.navCtrl.push(JobsPage);
}
career(){
  this.navCtrl.push(CarrerPage);
}

}
