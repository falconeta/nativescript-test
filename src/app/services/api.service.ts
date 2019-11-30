import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable(
  // Instead of providers array you can use provideIn
  // Learn more https://angular.io/guide/providers
  {
      providedIn: "root"
  }
)
export class ApiService {

  constructor(private http: HttpClient) { }

  getAllTodos(): Observable<any> {
      return this.http.get('https://jsonplaceholder.typicode.com/todos/');
  }
  getTodos(id: number): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/'+ id);
}


}
