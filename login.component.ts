import { Component} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { TestServiceService } from '../test-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  loginForm!: FormGroup;
   
  constructor(private formBuilder: FormBuilder,private _service: TestServiceService, private router: Router) { }
 
  getUser:any;
  ngOnInit(){
  this.loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
       })
}
     //email: string='';
     //password: string='';
  
   isError: boolean = false;

  onSubmit(){
    if(this.loginForm.valid){
      this._service.loginUser(this.loginForm.value.email, this.loginForm.value.password).subscribe(res =>{
         this.getUser=res;
        console.log(this.getUser);
        

        if(this.getUser.role === 'creator'){
          this.router.navigate(['/creator']);
        }else if(this.getUser.role === 'employee'){
          this.router.navigate(['/employee']);
        }else if(this.getUser.role === 'visitor'){
          this.router.navigate(['/vprofile']);
        }
       })
    }
  }
}













//this.getUser=res;

// if(this.loginForm.valid){
//   this._service.loginUser(this.loginForm.value.email,this.password).subscribe(res =>{
//     console.log(this.loginForm.value);
//     if (this.loginForm.value.email === 'email' && this.loginForm.value.password === 'password') {
//             console.log('Login successful');
//         } else {
//           this.isError = true;
//          }
//   })

// }
// }


//alert('User registered successfully!');
//     }, (error) => {
//         console.error(error);
//         alert('User already exists or registration failed.');
//     }
//         );





// if(this.userData.password === this.loginForm.value.password){
        //   if(this.userData.isactive){
        //     sessionStorage.setItem('email',this.userData.email)
            
        //   }
        // }



  // onSubmit() {
  //  this._service.loginUser(this.email, this.password).subscribe(data => this.email = data);
  //   if (this.email === 'email' && this.password === 'password') {
  //      console.log('Login successful');
  //   } else {
  //      this.isError = true;
  //   }
  //  }


  // import { Component} from '@angular/core';
  // import { FormBuilder, Validators } from '@angular/forms';
  // import { FormGroup } from '@angular/forms';
  // import { TestServiceService } from '../test-service.service';
  // import { Router } from '@angular/router';
  
  // @Component({
  //   selector: 'app-login',
  //   templateUrl: './login.component.html',
  //   styleUrls: ['./login.component.css']
  // })
  // export class LoginComponent{
    
  //    loginForm!: FormGroup;
  //    userData:any;
    
  //   constructor(private formBuilder: FormBuilder,private _service: TestServiceService, private router: Router) { }
  
  //   ngOnInit(){
  //   this.loginForm = this.formBuilder.group({
  //   email: ['', [Validators.required, Validators.email]],
  //   password: ['', [Validators.required, Validators.minLength(6)]]
  //   })
  // }
  //    email: string='';
  //    password: string='';
    
  //    //isError: boolean = false;
  
  //   onSubmit(){





