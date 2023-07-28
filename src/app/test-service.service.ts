import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class TestServiceService {

   constructor(private http:HttpClient) { }

createUser(userData:any):Observable<any>{
    return this.http.post('http://localhost:8086/addUser', userData);

  }

  loginUser(email:string, password:string):Observable<any>{
     const loginData = {email, password};
     return this.http.get('http://localhost:8086/getUserByEmail/email/password');
  }
  
  // getUser():Observable<any>{
  //    return this.http.get('http://localhost:8086/getUserByID');
  //  }
}


 