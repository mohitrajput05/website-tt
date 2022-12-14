import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productList:any;

constructor(private product:ProductService){

}


  ngOnInit(): void {
    this.product.viewProduct().subscribe((data:any)=>{
      console.log(data);
      this.productList = data;
    })
  }
  
}