import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {MeteoService} from "../../services/meteo.service";

/**
 * Generated class for the MeteoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meteo',
  templateUrl: 'meteo.html',
})
export class MeteoPage {
  meteo:any={};
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public meteoService:MeteoService, public loadingController:LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MeteoPage');
  }
  ongetMeteo(dataForm){
    let loading=this.loadingController.create({
      content:"Chargement des données"
    });
    loading.present();
    this.meteoService.chercher(dataForm.city)
      .subscribe(data=>{
        this.meteo=data;
        loading.dismiss();
      },err=>{
        console.log(err);
        loading.dismiss();
      })
  }
}
