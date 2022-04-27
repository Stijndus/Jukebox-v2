import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly URL = 'http://127.0.0.1:8000/api'

  constructor(private http: HttpClient) { }

  addPlaylist(data: any){
    return this.http.post(`${this.URL}/playlists`, data);
  }
}
