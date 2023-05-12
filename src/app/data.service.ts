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
    return this.httpClient.get('https://newsdata.io/api/1/news?apikey=pub_22035a54a771960915ba07cdf7beb028c4cbf&q=technology')
  }
}