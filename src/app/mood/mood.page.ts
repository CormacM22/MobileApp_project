import { Component, OnInit } from '@angular/core';
//storage import
import { Storage } from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-mood',
  templateUrl: './mood.page.html',
  styleUrls: ['./mood.page.scss'],
})
export class MoodPage implements OnInit {

  //variables
  myMood:string = "";

  //create instance
  constructor(private storage:Storage,private navCtrl:NavController) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    //retrieving storage
    this.storage.create().then(()=>{
      this.storage.get('mood').then((mood)=>{
        this.myMood=mood;
      })
      .catch();
    })
    .catch();
}

SaveMood(){

  //saving
  this.storage.create()
  .then(()=>{
    this.storage.set("mood",this.myMood)
    .then(()=>{
      console.log(this.myMood)
      this.navCtrl.navigateBack('/home');
    })
    .catch();
  })
  .catch();
}
}
