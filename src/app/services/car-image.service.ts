import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  apiUrl="http://44372/api/carimages/getimagesbycarid?carid=";

  constructor(private httpClient:HttpClient) { }

  getImageByCarId(carId:number):Observable<ListResponseModel<CarImage>>{
    let newPath=this.apiUrl+carId
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath)
  }
}
