import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //have to add it as an argument 
  constructor(private httpClient:HttpClient) { }


  //Get the technolgoy data
  GetTechnologyData():Observable<any>{
    return this.httpClient.get('https://newsdata.io/api/1/news?apikey=pub_7283dde1f44cbddcd4ff494794f8f38ef04b&q=new%20tech&language=en')
  }
}