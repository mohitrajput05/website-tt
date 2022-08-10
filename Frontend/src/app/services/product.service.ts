import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  addProduct = "http://localhost:3000/product/add-product"
  viewProductList = "http://localhost:3000/product/view-product"
  updateProduct = "http://localhost:3000/product/update-product"
  deleteProduct = "http://localhost:3000/product/delete-product"

  constructor(private http:HttpClient) { }

  public AddProduct(formData:FormData):Observable<any>{
    return this.http.post<any>(this.addProduct,formData)
  }

  public viewProduct():Observable<any>{
    return this.http.get<any>(this.viewProductList)
  }

  public dltProduct(id:any){
    return this.http.post(this.deleteProduct,{Id:id})
  }
 
  public updateprod(formData:FormData){
    return this.http.post(this.updateProduct,formData);
  }

}
