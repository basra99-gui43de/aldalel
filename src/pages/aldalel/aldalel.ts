import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AldalelListPage } from '../aldalel-list/aldalel-list';
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
d=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
myCategories:any;
constructor(public navCtrl: NavController,
  public navParams: NavParams,
  public crudProvider:CrudProvider) {
    
}

  ionViewDidLoad() {

  }
  list(id){
    this.navCtrl.push(AldalelListPage,{
      id:id
    });
    console.log('category id', id);
    
  }
}
