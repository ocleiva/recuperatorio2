import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  RespuestaPais } from '../interfaces/interfaces';



@Injectable({
  providedIn: 'root'
})
export class PaisesService {

    respuestapais: RespuestaPais[] =[];
   
  constructor(public http:HttpClient) {
   }

   getPaises(){
    return this.http.get<RespuestaPais[]>('https://restcountries.com/v3.1/all')
   }
  

}