import { Component } from '@angular/core';
import { NavController, ActionSheetController, Platform } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  message: String;

  constructor(
    public navCtrl: NavController,
    public actionSheetCtrl: ActionSheetController,
    public platform: Platform
  ) { }

  openMenu() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Dinos',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => { this.message = 'Delete Clicked'; }
        },
        {
          text: 'Cancel',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => { this.message = 'Cancel Dino Action Clicked'; }
        }
      ]
    });

    this.message = '';
    actionSheet.present();
  }
}
