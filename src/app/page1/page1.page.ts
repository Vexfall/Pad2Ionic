import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  openPage(button:string){
this.navCtrl.navigateForward(button);
  }

}
