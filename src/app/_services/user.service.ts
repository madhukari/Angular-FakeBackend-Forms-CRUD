import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const environment = {
    apiUrl: 'https://jsonplaceholder.typicode.com',
    jsonUrl: 'http://localhost:3000/comments'
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

    updateUserJson(user: User) {
        return this.http.post(`${environment.jsonUrl}`, user);
    }
    getLeavesByJson() {
        return this.http.get(`${environment.jsonUrl}`);
    }


    delete(id: number) {
        return this.http.delete(`${environment.apiUrl}/api/users/` + id);
    }
}