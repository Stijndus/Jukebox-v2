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

  ngOnInit(): void {
  }

}
