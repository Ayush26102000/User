import { Component } from '@angular/core';
import { User } from '../../Classes/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/config';

@Component({ selector: 'app-register', templateUrl: './register.component.html', styleUrls: ['./register.component.css'] })

export class RegisterComponent {
  user: User = { Username: '', Password: '', PhoneNumber: '', Email: '', City: '' };

  apiurl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  onSubmitUser() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    var body = this.user;
    const requestBody = { body };
    this.http.post<any>(`${this.apiurl}/CreateUser`, requestBody, { headers }).subscribe((data) => {
      { 
        alert(data.requestBody); 
        console.log(data.requestBody);
      
      }
    },
      (error) => { console.error(error); });
  }
}
