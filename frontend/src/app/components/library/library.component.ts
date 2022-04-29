import { Component, OnInit } from '@angular/core';
import 'bootstrap';
import { ApiService } from 'src/app/shared/api/api.service';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { User } from '../user-profile/user-profile.component';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  public playlists: any;

  constructor(private apiSrvc: ApiService, private authService: AuthService) {
    this.authService.profileUser().subscribe((data: any) => {
      this.playlists = this.apiSrvc.getPlaylistsFromUser(data.id);
    });
  }

  public refreshData(): void {
      this.authService.profileUser().subscribe((data: any) => {
        this.playlists = this.apiSrvc.getPlaylistsFromUser(data.id);
      });
  }

  public pinPlaylist(playlist: any){
    let id = playlist.id
    let pinned = 1
    if (playlist.pinned === 1){
      pinned = 0
    }
    this.apiSrvc.pinPlaylist(id, pinned).subscribe(()=>{
      this.refreshData();
    })
  }

  public deletePlaylist(id: number){
    console.log(id)
    this.apiSrvc.deletePlaylist(id).subscribe(() => {
      this.authService.profileUser().subscribe((data: any) => {
        this.playlists = this.apiSrvc.getPlaylistsFromUser(data.id);
      });
    })
  }

  ngOnInit(): void {
  }

}
