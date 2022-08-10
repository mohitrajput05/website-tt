import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  productName: any;
  productPrice: any;
  productDescription: any;
  productQty: any;
  productImage: any;
  prodId:any;



  constructor(private product:ProductService) { }

  





  ngOnInit(): void {
    this.product.viewProduct().subscribe((data:any)=>{
      console.log(data);
      this.productName = data.productName
      this.productPrice = data.productPrice
      this.productDescription = data.productDescription
      this.productQty = data.productQty
      this.productImage = data.productImage
    })

  }

}
