import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NodeUtilityService {
  

  constructor(private httpClient:HttpClient) { 

  }
  url:string="http://localhost:5000/";

  insert(username: string, email: String, password: string): Observable<any> {
    
    return this.httpClient.get(
      this.url + 'insert?username=' + username + '&email=' + email + '&password=' + password
    );
  }
  insert1(email:string,password:string):Observable<any>{
    return this.httpClient.get(this.url+"insert1?email="+email+"&password="+password);
  }
  insert2(user: string, packageName:string,packageType: string, numberOfPersons: number, selectedSlot: string, totalPrice: number): Observable<any> {
    const url = `${this.url}insert2`; // Adjust the URL here
    return this.httpClient.get<any>(`${url}?email=${user}&packageName=${packageName}&packagetype=${packageType}&noofpersons=${numberOfPersons}&selectedslot=${selectedSlot}&price=${totalPrice}`);
  }
  
  delete(email: string): Observable<any> {
    return this.httpClient.get(
      this.url + 'delete?email=' + email);
  }
  display():Observable<any>{
    return this.httpClient.get(this.url+"findAll");
  }
  update(email:string,password:string):Observable<any>{
    return this.httpClient.get(this.url+ "update?email="+email+"&password="+password);
  }
  findOne(email: string): Observable<any> {
    return this.httpClient.get<any>(this.url+"findOne?email="+email);
  }

  updateUser(username:string,email:string,password:string):Observable<any>{
    return this.httpClient.get(this.url+ "update?username="+username+"&email="+email+"&password="+password);
  }
}

