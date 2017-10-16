import { User } from './../../models/User';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import{AngularFireAuth}from 'angularfire2/auth';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user = {} as User;

  constructor( private afAuth: AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams) {
  }
  async login() {
    try {

      const result = this.afAuth.auth.signInWithEmailAndPassword(this.user.email, this.user.password);
      result.then((user) => {
        console.log(user);

        this.navCtrl.setRoot(HomePage);

      }).catch((e) => {
        console.log("ingrese el usuario y contraseña")
      })


    }
    catch (e) {
      console.log("ingrese el usuario y contraseña");
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  register() {
    this.navCtrl.push("RegisterPage");
  }
}
