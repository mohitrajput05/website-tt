import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud';
  constructor(private router:Router , private user:UserService){}
  
  ngOnInit(): void {
  }

  signOut(){
    sessionStorage.removeItem('jwt-token');
    sessionStorage.removeItem('user-detail')
    alert('log out success')
    this.router.navigate(['/signin'])
  }

  isLoggedIn(){
    return this.user.checkToken();
  }

  
}
