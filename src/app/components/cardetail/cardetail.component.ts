import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImage } from 'src/app/models/carImage';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CardetailComponent implements OnInit {

  carDetails:CarDetail[]=[];
  cars:Car[];
  carImages:CarImage[]=[];
  carId: number;
  dataLoaded=false;
  imageUrl:string="https://localhost:44372/"

  constructor(private carService: CarService, private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe(params => {
      if (params["carID"]){
        this.carId=params["carID"]
        this.getCarDetailById(params["carID"])
      }

  })

}

getCarDetailById(carId:number){
  this.carService.getCarDetailById(carId).subscribe(response =>{
    this.carDetails=response.data;
    this.carImages=this.carDetails[0].carImage;
  })
}  

getCurrentImageClass(image: CarImage) {
  if (image == this.carImages[0]) {
    return 'carousel-item active';
  } else {
    return 'carousel-item';
  }
}

getButtonClass(image: CarImage) {
  if (image == this.carImages[0]) {
    return 'active';
  } else {
    return '';
  }
}

}
