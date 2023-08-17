import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const environment = {
    apiUrl: 'https://jsonplaceholder.typicode.com'
  };
  

import { User } from '../_models/index';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

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