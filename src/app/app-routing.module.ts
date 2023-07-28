import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { NavbarComponent} from './navbar/navbar.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';



const routes: Routes=[
 {path:'', component:HomeComponent}, //this path opens first
 {path:'home', component:HomeComponent},
 {path:'register',component:RegistrationFormComponent},
{path:'login', component:LoginComponent}
];

@NgModule({
  imports:[RouterModule.forRoot(routes)], 
          
  exports:[RouterModule]
        
})

export class AppRoutingModule {

}
