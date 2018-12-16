import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {apiKey} from "../../app/apiurls/serverurls.js";
import { Http , Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';


/*
  Generated class for the CrudProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CrudProvider {

  constructor(public storage: Storage ,
    public http: Http, 
     ) {
    console.log('Hello CrudProvider Provider');
  }




    getPhones(){
      return new Promise((resolve, reject) => {
      

        let headers = new Headers();
        headers.append('Access-Control-Allow-Origin' , '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        headers.append('Content-Type', 'application/json');
    
        this.http.get(apiKey+'api/importantphones', {headers: headers})
          .map(res => res.json())
          .subscribe(data => {
            resolve(data);
          }, (err) => {
            reject(err);
          }); 

    });

  }


  getMarkting(){
    return new Promise((resolve, reject) => {
    

      let headers = new Headers();
      headers.append('Access-Control-Allow-Origin' , '*');
      headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
      headers.append('Content-Type', 'application/json');
  
      this.http.get(apiKey+'api/markating', {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          reject(err);
        }); 

  });

}

getCarrer(){
  return new Promise((resolve, reject) => {
  

    let headers = new Headers();
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Content-Type', 'application/json');

    this.http.get(apiKey+'api/careers', {headers: headers})
      .map(res => res.json())
      .subscribe(data => {
        resolve(data);
      }, (err) => {
        reject(err);
      }); 

});

}

getCarrerInfo(){
  return new Promise((resolve, reject) => {
  

    let headers = new Headers();
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Content-Type', 'application/json');

    this.http.get(apiKey+'api/careerdetails', {headers: headers})
      .map(res => res.json())
      .subscribe(data => {
        resolve(data);
      }, (err) => {
        reject(err);
      }); 

});

}


getJobs(){
  return new Promise((resolve, reject) => {
  

    let headers = new Headers();
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Content-Type', 'application/json');

    this.http.get(apiKey+'api/jobs', {headers: headers})
      .map(res => res.json())
      .subscribe(data => {
        resolve(data);
      }, (err) => {
        reject(err);
      }); 

});

}


getEmployees(){
  return new Promise((resolve, reject) => {
  

    let headers = new Headers();
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Content-Type', 'application/json');

    this.http.get(apiKey+'api/employees', {headers: headers})
      .map(res => res.json())
      .subscribe(data => {
        resolve(data);
      }, (err) => {
        reject(err);
      }); 

});

}


getCategoires(){
  return new Promise((resolve, reject) => {
  

    let headers = new Headers();
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Content-Type', 'application/json');

    this.http.get(apiKey+'api/categorynames', {headers: headers})
      .map(res => res.json())
      .subscribe(data => {
        resolve(data);
      }, (err) => {
        reject(err);
      }); 

});

}

getCompanies(){
  return new Promise((resolve, reject) => {
  

    let headers = new Headers();
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Content-Type', 'application/json');

    this.http.get(apiKey+'api/companies', {headers: headers})
      .map(res => res.json())
      .subscribe(data => {
        resolve(data);
      }, (err) => {
        reject(err);
      }); 

});

}


getCompanyDetails(id){
  return new Promise((resolve, reject) => {
  

    let headers = new Headers();
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Content-Type', 'application/json');

    this.http.get(apiKey+'api/companydetails/'+id, {headers: headers})
      .map(res => res.json())
      .subscribe(data => {
        resolve(data);
      }, (err) => {
        reject(err);
      }); 

});

}
getCompanyByType(id){
  return new Promise((resolve, reject) => {
  

    let headers = new Headers();
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Content-Type', 'application/json');

    this.http.get(apiKey+'api/companiesByType/'+id, {headers: headers})
      .map(res => res.json())
      .subscribe(data => {
        resolve(data);
      }, (err) => {
        reject(err);
      }); 

});

}





}
