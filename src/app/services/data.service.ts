import { Injectable } from '@angular/core';
import {serviceData} from '../data'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getFeatures(serviceType:string):string[] {
    return serviceData[serviceType];
  }
}
