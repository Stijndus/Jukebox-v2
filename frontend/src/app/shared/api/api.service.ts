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

  deletePlaylist(id: number) {
    return this.http.delete<any>(`${this.URL}/playlists/${id}`);
  }

  pinPlaylist(id: number, bool: number) {
    return this.http.put<any>(`${this.URL}/playlist_pin/${id}`, {
      pinned: bool,
    });
  }

  getSongs() {
    return this.http.get<any[]>(`${this.URL}/songs`);
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

  getArtistFromSong(id: number) {
    return this.http.get<any>(`${this.URL}/song_artist/${id}`);
  }

  getSongsFromPlaylist(id: number) {
    return this.http.get<any[]>(`${this.URL}/playlist_song/${id}`);
  }

  deleteSongFromPlaylist(id: number) {
    return this.http.delete<any>(`${this.URL}/songs_playlist/${id}`);
  }

  addSongToPlaylsit(data: any) {
    return this.http.post(`${this.URL}/songs_playlist`, data);
  }

  getArtists() {
    return this.http.get<any[]>(`${this.URL}/artists`);
  }
}
