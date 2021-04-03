import { CarImage } from "./carImage";

export interface CarDetail{
    carID:number;
    carName:string;
    colorName:string;
    brandName:string;
    dailyPrice:number;
    modelYear:number;
    carImage:CarImage[];
}