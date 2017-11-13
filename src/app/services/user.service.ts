import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// rxjs
import { Observable } from "rxjs/Observable";

// models
import { User } from "../models/user";

@Injectable()
export class UserService {
  private readonly URL = "https://jsonplaceholder.typicode.com/users"
  
  constructor(public httpClient:HttpClient) { }

  public get(id: number): Observable<User> {
    return this.httpClient.get<User>('${this.URL}/${id}');
  }

  public list(): Observable<Array<User>> {
    return this.httpClient.get<Array<User>>(this.URL);
  }  

  public create(user: User): Observable<User> {
    return this.httpClient.post<User>(this.URL, user);
  }

  public delete(user:User): Observable<User> {
    return this.httpClient.delete<User>(`${this.URL}/${user.id}`);
  }

  public update(user: User): Observable<User> {
    return this.httpClient.put<User>(`${this.URL}/${user.id}`, user);
  }
}
