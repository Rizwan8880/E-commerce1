import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
public productsList :any
  constructor(private api:ApiService, private cart:CartService) { }

  ngOnInit(): void {
    this.api.getProduct().subscribe(res =>{
      this.productsList=res

      this.productsList.forEach((a:any) => {
        Object.assign(a,{Quantity:1,total:a.price})
      });
    })
  }
  addToCart(pro:any){
    this.cart.addToCart(pro);
  }
  

}
