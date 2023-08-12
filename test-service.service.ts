import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class TestServiceService {
findUser:any;
   constructor(private http:HttpClient) { }

createUser(userData:any):Observable<any>{
    return this.http.post('http://localhost:8086/addUser', userData);

  }

  loginUser(email:string, password:string):Observable<any>{
    console.log(email)
    console.log(password)
   return this.http.get<any>(`http://localhost:8086/getUserByEmail?email=${email}&password=${password}`);
  
  }

  
  updateUser(){

  }
  
}
  // getUser():Observable<any>{
  //    return this.http.get('http://localhost:8086/getUserByID/id');
  //  }



 //loginUser(email:string, password:string):Observable<any>