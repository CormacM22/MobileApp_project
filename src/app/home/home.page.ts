import { Component } from '@angular/core';

//Diaplay Mood
import{Storage} from '@ionic/storage-angular'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 //varible
  myMood:string="";

  constructor(private storage:Storage) {
  }
  ionViewDidEnter(){
    //retiriving the storage
    this.storage.create()
    .then(()=>{
      this.storage.get('mood')
      .then((mood)=>{
        this.myMood=mood;
      })
      .catch();
    })
    .catch();
  }

}
