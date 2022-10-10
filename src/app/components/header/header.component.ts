import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
public totalItem:number=0;
  constructor(private cartSercice:CartService) { }

  ngOnInit(): void {
    this.cartSercice.getProducts()
    .subscribe(res=>{
      this.totalItem=res.length
    })
  }
  public image:any
  onFileSelect(event:any){
    console.log(event);
    this.image=event.target.files[0]
    console.log(this.image);
    
  }

}
