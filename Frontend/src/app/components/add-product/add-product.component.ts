import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productName: any;
  productPrice: any;
  productDescription: any;
  productQty: any;
  productImage: any;
  constructor(private product: ProductService) { }

  
  public addProduct(){
    const formData = new FormData();
    // formData.append("prodId", this.prodId);
    formData.append("productName", this.productName);
    formData.append("productPrice", this.productPrice);
    formData.append("productDescription", this.productDescription);
    formData.append("productQty", this.productQty);
    formData.append("productImage", this.productImage);
    console.log("formData",formData);
    this.product.AddProduct(formData).subscribe(data=>{
      if(data){
        alert('product added.....')
        this.ngOnInit()
          }else{
            alert('not added')
  
          }
  
    })
  }
  selectProdImage(event:any){
    if(event.target.files.length > 0){
      const file = event.target.files[0];
      this.productImage = file;
    }
  }
  

  ngOnInit(): void {
  }

}
