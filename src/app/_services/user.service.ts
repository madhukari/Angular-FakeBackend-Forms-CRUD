import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const environment = {
    apiUrl: 'https://jsonplaceholder.typicode.com'
  };
  

import { User } from '../_models/index';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class UserService {
    constructor(private http: HttpClient,
        private router: Router,
        ) { }
    private myBehaviorSubject = new BehaviorSubject<string>('default value');

    setterGetter(type,value = ''){//type 1 means getter 2 means setter
        console.log('model=',value);
    //   return  type == 1 ?  this.myBehaviorSubject.asObservable() : this.myBehaviorSubject.next(value);
        if(type == 1){
            console.log('getter=',value);
           return this.myBehaviorSubject.asObservable();
        }else{
         console.log('setter=',value);
         this.myBehaviorSubject.next(value);
         alert('request submitted successfully');
         if(value['employeeType'] == "consultant" || value['employeeType'] == "user"){
            this.router.navigate(['/user']);
        }else{
            // this.router.navigate([this.returnUrl]);
        }

        }
    }

    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/api/users`);
    }

    getById(id: number) {
        return this.http.get(`${environment.apiUrl}/api/users/` + id);
    }

    create(user: User) {
        return this.http.post(`${environment.apiUrl}/api/users`, user);
    }

    update(user: User) {
        return this.http.put(`${environment.apiUrl}/api/users/` + user.id, user);
    }

    delete(id: number) {
        return this.http.delete(`${environment.apiUrl}/api/users/` + id);
    }
}