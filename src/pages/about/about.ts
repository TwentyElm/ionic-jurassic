import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController) {

  }

  doAlert() {
    const alert = this.alertCtrl.create({
      title: 'Info',
      message: 'Genuine Raptor ROAR!!!!',
      buttons: ['OK']
    });

    alert.present();
  }
}
