import { Component, OnInit } from '@angular/core';
//For using the method for the best iphones
import { NavController } from '@ionic/angular';
import { DataService } from '../data.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.page.html',
  styleUrls: ['./technology.page.scss'],
})
export class TechnologyPage implements OnInit {

  //variablees
  TechnologyData:any=[];

  constructor(private navCtrl:NavController, private technologyNews:DataService) { }

  ngOnInit() {
    this.technologyNews.GetTechnologyData().subscribe(
      (data)=>{
        this.TechnologyData=data.results;
      console.log(this.TechnologyData);
    }
    )
  }



}
