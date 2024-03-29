import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { data } from '../data-type';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  constructor(private http: HttpClient) { }

  addData(data: data) {
    return this.http.post('http://localhost:3000/data', data);
  }
  usersList() {
    return this.http.get<data[]>('http://localhost:3000/data');
  }
  deleteData(id: number) {
    return this.http.delete(`http://localhost:3000/data/${id}`);
  }
  getData(id: string) {
    return this.http.get<data>(`http://localhost:3000/data/${id}`);
  }
  updateData(data: data) {
    return this.http.put<data>(`http://localhost:3000/data/${data.id}`,
      data
    );
  }

}