import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly URL = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  getPlaylistsFromUser(uid: number) {
    return this.http.get<any[]>(`${this.URL}/playlists/${uid}`);
  }

  getPlaylist(id: number) {
    return this.http.get<any[]>(`${this.URL}/playlist/${id}`);
  }

  addPlaylist(data: any) {
    return this.http.post(`${this.URL}/playlists`, data);
  }

  editPlaylist(data: any, id: number) {
    return this.http.post(`${this.URL}/playlists/${id}_method=PUT`, data);
  }

  deletePlaylist(id: number) {
    return this.http.delete<any>(`${this.URL}/playlists/${id}`);
  }

  getSongs() {
    return this.http.get<any[]>(`${this.URL}/songs`);
  }

  addSongToPlaylist(playlist: number, data: any) {
    return this.http.post(`${this.URL}/song_playlist/${playlist}`, data);
  }

  getSong(id: number) {
    return this.http.get<any[]>(`${this.URL}/songs/${id}`);
  }
  deleteSong(id: number) {
    return this.http.delete<any[]>(`${this.URL}/songs/${id}`);
  }

  addSong(data: any) {
    return this.http.post(`${this.URL}/songs`, data);
  }

  getSongsFromPlaylist(id: number) {
    return this.http.get<any[]>(`${this.URL}/playlist_song/${id}`);
  }

  deleteSongFromPlaylist(id: number) {
    return this.http.delete<any>(`${this.URL}/songs_playlist/${id}`);
  }
  
  getGenres() {
    return this.http.get<any[]>(`${this.URL}/genres`);
  }

  getGenre(id: number) {
    return this.http.get<any[]>(`${this.URL}/genres/${id}`);
  }
  deleteGenre(id: number) {
    return this.http.delete<any[]>(`${this.URL}/genres/${id}`);
  }

  addGenre(data: any) {
    return this.http.post(`${this.URL}/genres`, data);
  }
}
