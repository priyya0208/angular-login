import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from './user/user.model'
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ApiService {

  constructor(private http:HttpClient) {}
    fakeUsers: Array<object> = [{id: 1, firstName: 'Dhiraj', lastName: 'Ray', email: 'dhiraj@gmail.com'},
      {id: 1, firstName: 'Tom', lastName: 'Jac', email: 'Tom@gmail.com'},
      {id: 1, firstName: 'Hary', lastName: 'Pan', email: 'hary@gmail.com'},
      {id: 1, firstName: 'praks', lastName: 'pb', email: 'praks@gmail.com'},
    ];
    get() {
    return of(this.fakeUsers);
  }
  }
  

