import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  signUpUrl= "http://localhost:3000/user/signUp"
  signInUrl= "http://localhost:3000/user/signIn"

  constructor(private http:HttpClient) { }


  public signUp(name:string ,email:string ,password:string):Observable<any>{
    return this.http.post<any>(this.signUpUrl , {
      name:name,
      email:email,
      password:password
    })
  }

  public signin(email:string):Observable<any>{
    return this.http.post<any>(this.signInUrl , {email:email});
  }

  public checkToken(){
    return !!sessionStorage.getItem('jwt-token');
  }

}
