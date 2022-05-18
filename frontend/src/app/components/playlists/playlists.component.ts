import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  public allSongs: any;
  
  form: FormGroup;

  constructor(public fb: FormBuilder, private route: ActivatedRoute, private apiSrvc: ApiService) {
    this.form = this.fb.group({
      song: [],
    });
    this.route.params.subscribe((params) => (this.id = params.id));
    this.apiSrvc.getPlaylist(this.id).subscribe((data) => 
      (this.playlist = data)
    );
    this.apiSrvc.getSongsFromPlaylist(this.id).subscribe((data) => 
      (this.songs = data)
    );
    this.allSongs = this.apiSrvc.getSongs();
  }

  ngOnInit(): void {}

  submitAddSongForm(){
    var formData: any = new FormData();
    formData.append("song_id", this.form.get('song')?.value);
    this.apiSrvc.addSongToPlaylist(this.playlist.id, formData).subscribe(
      (response: any) => console.log(response),
      (error: any) => console.log(error)
    )
  }
}
