import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  productList: any;

  productName: any;
  productPrice: any;
  productDescription: any;
  productQty: any;  
  productImage: any;
  prodId: any;
  oldImage:any

  constructor(private product: ProductService) { }

  public deleteProduct(id: any) {
    confirm("Are you Sure")
    this.product.dltProduct(id).subscribe((data: any) => {
      console.log(data)
      if (data) {
        this.ngOnInit();
        alert('product deleted.....')
      } else {
        alert('product not deleted')

      }
    })
  }

  edit() {
    // alert(this.prodId)
    const formData = new FormData();
    formData.append("prodId", this.prodId);
    formData.append("productName", this.productName);
    formData.append("productPrice", this.productPrice);
    formData.append("productDescription", this.productDescription);
    formData.append("productQty", this.productQty);
    formData.append("productImage", this.productImage);

    this.product.updateprod(formData).subscribe((data: any) => {
      console.log(data);
      if (data) {
        alert(' updated.....')
        this.ngOnInit();
      } else {
        alert('not updated')

      }
    })
  }
  updateproduct(data: any) {
    this.productName = data.productName;
    this.productPrice = data.productPrice;
    this.productDescription = data.productDescription;
    this.productQty = data.productQty;
    this.productImage = data.productImage;
    this.prodId = data._id;

  }
  selectImage(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.productImage = file;
    }
  }
  ngOnInit(): void {
    this.product.viewProduct().subscribe((data: any) => {
      console.log(data);
      this.productList = data;
      console.log(this.productList)
    })
  }

}
