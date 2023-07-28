import { Component} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TestServiceService } from '../test-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  email: string='';
  password: string='';
  isError: boolean = false;


   constructor(private _service: TestServiceService) { }

  login() {
   this._service.loginUser(this.email, this.password).subscribe(data => this.email = data);
    if (this.email === 'email' && this.password === 'password') {
       console.log('Login successful');
    } else {
       this.isError = true;
    }
   }
}







