import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }

  getComments() {
    return this.http.get('https://jsonplaceholder.typicode.com/comments');
    // return this.http.get('/assets/mocks/comments.json');
  }
}
