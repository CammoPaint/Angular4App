import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// rxjs
import { Observable } from "rxjs/Observable";

// models
import { Post } from "../models/post";

@Injectable()
export class DataService {

  private readonly URL = "https://jsonplaceholder.typicode.com/posts"

  constructor(public httpClient:HttpClient) { // Dependency injection of HttpClient
    console.log('Data Service Connected');
   }

  public get(id: number): Observable<Post> {
    return this.httpClient.get<Post>('${this.URL}/${id}');
  }

  public list(): Observable<Array<Post>> {
    return this.httpClient.get<Array<Post>>(this.URL);
  }  

  public create(post: Post): Observable<Post> {
    return this.httpClient.post<Post>(this.URL, post);
  }

  public delete(post:Post): Observable<Post> {
    return this.httpClient.delete<Post>(`${this.URL}/${post.id}`);
  }

  public update(post: Post): Observable<Post> {
    return this.httpClient.put<Post>(`${this.URL}/${post.id}`, post);
  }

}


