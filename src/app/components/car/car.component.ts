import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars:Car[]=[];
  carDetails:CarDetail[]=[];
  dataLoaded: boolean=false;
  


 
  
  
  constructor(private carService:CarService,private carDetailService:CarDetailService ,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getCarsByBrand(params["brandId"])
      }
      else if(params["colorId"]){
        this.getCarsByColor(params["colorId"])
      }
      else{
        this.getCars()
      }
    })
  }

  getCars(){
    this.carService.getCars().subscribe(response=>{
      this.cars=response.data
      this.dataLoaded=true;
  })

}

getCarDetailById(carId:number){
  this.carService.getCarDetailById(carId).subscribe(response =>{
    this.carDetails=response.data;
   
  })
 
}  

getCarsByBrand(brandId:number){
  this.carService.getCarsByBrand(brandId).subscribe(response=>{
    this.cars=response.data
    this.dataLoaded=true;
  })
}

getCarsByColor(colorId:number){
  this.carService.getCarsByBrand(colorId).subscribe(response=>{
    this.cars=response.data
    this.dataLoaded=true;
  })
}


}