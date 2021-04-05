import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImage } from 'src/app/models/carImage';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CardetailComponent implements OnInit {

  carDetails:Car;
  carImages:CarImage[]=[];
  dataLoaded=false;
  

  constructor(private carDetailService: CarDetailService, 
    private carImageService:CarImageService,
    private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe(params => {
      if (params["carID"]){
        this.getCarDetailById(params["carID"]);
        this.getImageByCarId(params["carID"]); 
      }
      
      
  });

}

getCarDetailById(carId:number){
  this.carDetailService.getCarDetailById(carId).subscribe(response =>{
    this.carDetails=response.data[0];
  })
 
}  


getImageByCarId(carId:number){
  this.carImageService.getImageByCarId(this.activedRoute.snapshot.params["carID"])
    .subscribe((response) => {
      this.carImages = response.data;
     
    });
}
sliderItemActive(index: number){
  if(index === 0){
    return "carousel-item active";
  }
  else{
    return "carousel-item";
  }
} 



}
