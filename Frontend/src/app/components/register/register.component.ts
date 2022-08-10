import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name:any;
  email:any;
  password:any;
  myForm:any|FormGroup;
  constructor(private user:UserService , private fb:FormBuilder ) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name:['', [Validators.required,Validators.pattern('^[A-Z][a-zA-Z]+$')]],
      email:['',[Validators.required ,Validators.email , Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]],
      password:['',[Validators.required,Validators.minLength(15)]]
    });
  }
  onSubmit(myForm:FormGroup){
    console.log('valid',myForm.valid);
    console.log('Name',myForm.value.name)
    console.log('email',myForm.value.email);
    console.log('password',myForm.value.password)
  }

  public register(){
    this.user.signUp(this.name , this.email ,this.password).subscribe((data: any)=>{
      console.log(data)
      alert("data save")
    })
  }
}