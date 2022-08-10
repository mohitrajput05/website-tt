import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:any;
  password:any;

  myForm:any|FormGroup;

  constructor(private user:UserService , private router:Router , private fb:FormBuilder) { }

  public login(){
    this.user.signin(this.email).subscribe((data: any)=>{
      console.log(data);
      if(data.status=="login-success"){
        sessionStorage.setItem('jwt-token' , data.token);
        sessionStorage.setItem('user-detail',JSON.stringify(data));
        this.router.navigate(['/'])
      }
    })
  }

  ngOnInit(): void {
      this.myForm = this.fb.group({
      email:['',[Validators.required ,Validators.email , Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]],
        })
  }
  onSubmit(myForm:FormGroup){
    console.log('valid',myForm.valid);
    console.log('Name',myForm.value.name)
    console.log('email',myForm.value.email);
    console.log('password',myForm.value.password)
  }
}
