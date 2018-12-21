import { GriefPage } from './../grief/grief';
import { SuicidePage } from './../suicide/suicide';
import { PsychPage } from './../psych/psych';
import { DrugsPage } from './../drugs/drugs';
import { AlcoholPage } from './../alcohol/alcohol';
import { BullyingPage } from './../bullying/bullying';
import { RelationPage } from './../relation/relation';
import { EatingPage } from './../eating/eating';
import { AnxietyPage } from './../anxiety/anxiety';
import { DepressionPage } from './../depression/depression';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';


/**
 * Generated class for the InformationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-information',
  templateUrl: 'information.html',
})
export class InformationPage {


  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InformationPage');
  }

  public depressOpen(): void {
    let modal = this.modalCtrl.create(DepressionPage);

    modal.present();
  }

  public anxietyOpen(): void {
    let modal = this.modalCtrl.create(AnxietyPage);

    modal.present();
  }

  public eatingOpen(): void {
    let modal = this.modalCtrl.create(EatingPage);

    modal.present();
  }

  public relationOpen(): void {
    let modal = this.modalCtrl.create(RelationPage);

    modal.present();
  }

  public bullyingOpen(): void {
    let modal = this.modalCtrl.create(BullyingPage);

    modal.present();
  }

  public alcoholOpen(): void {
    let modal = this.modalCtrl.create(AlcoholPage);

    modal.present();
  }

  public drugsOpen(): void {
    let modal = this.modalCtrl.create(DrugsPage);

    modal.present();
  }

  public psychOpen(): void {
    let modal = this.modalCtrl.create(PsychPage);

    modal.present();
  }

  public suicideOpen(): void {
    let modal = this.modalCtrl.create(SuicidePage);

    modal.present();
  }

  public griefOpen(): void {
    let modal = this.modalCtrl.create(GriefPage);

    modal.present();
  }
}


