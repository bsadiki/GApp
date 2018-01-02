import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  contact={
    name:"badr",
    email:"badr@gmail.com",
    photo : 'assets/imgs/logo.png'
  };
  constructor(public navCtrl: NavController) {

  }

}
