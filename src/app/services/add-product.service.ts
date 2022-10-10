import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddProductService {

  constructor(private http:HttpClient) { }
  getProduct(){
    return this.http.get("https://633c4024f11701a65f726fe5.mockapi.io")
  }
  pushProduct(data:any,id:any){
    this.http.post(data,"https://633c4024f11701a65f726fe5.mockapi.io/+id")
  }
  updateProduct(data:any,id:number){
    this.http.put(data,"https://633c4024f11701a65f726fe5.mockapi.io/")
  }
  daleteProduct(id:number){
    this.http.delete("https://633c4024f11701a65f726fe5.mockapi.io/")
  }
}
