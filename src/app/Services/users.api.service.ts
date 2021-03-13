import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserAPIService {
    constructor(private httpClient: HttpClient) {
    }

    getUsersList(): Observable<any> {
        return this.httpClient.get<any>('https://reqres.in/api/users?page=1');
    }

    getUserById(id: number): Observable<any> {
        return this.httpClient.get<any>(`https://reqres.in/api/users/${id}`);
    }
}