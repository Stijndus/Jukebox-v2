import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/api/api.service';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss'],
})
export class PlaylistsComponent implements OnInit {
  public id: number;
  public rowData: any;
  public playlist: any;
  public songs: any[];

  constructor(private route: ActivatedRoute, private apiSrvc: ApiService) {
    this.route.params.subscribe((params) => (this.id = params.id));
    this.apiSrvc.getPlaylist(this.id).subscribe((data) => 
      (this.playlist = data)
    );
    this.apiSrvc.getSongsFromPlaylist(this.id).subscribe((data) => 
      (this.songs = data)
    );
  }

  ngOnInit(): void {}
}
