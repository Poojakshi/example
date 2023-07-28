import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { TestServiceService } from '../test-service.service';

interface Role {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],

})
export class RegistrationFormComponent{
  registerForm!: FormGroup;
  roleControl: FormControl = new FormControl();
  roles: string[] = ['Employee', 'Creator', 'Visitor'];

  constructor(private formBuilder: FormBuilder,
    private _service: TestServiceService) { }

    

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contact: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      gender: ['', Validators.required],
      role: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  
  onSubmit() {
    console.log(this.registerForm.value);
     this._service.createUser(this.registerForm.value).subscribe(result => {
        alert('User registered successfully!');
      });
      
    }
  }
    

    
    
  
  
  
  
  
  
  
  
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //       alert('User registered successfully!');
//     }, (error) => {
//         console.error(error);
//         alert('User already exists or registration failed.');
//     }
//         );
//     }
//  }

 





// submit(){
  //   // this._service.users().subscribe(result=>{
  //   //   console.log(result);
  //   //   alert("Registered Successfully");
  //   // });

  //   this._service.user().subscribe(result=>{
  //     console.log(result);
  //   });
  // }



