import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/shared/api/api.service';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-song-form',
  templateUrl: './song-form.component.html',
  styleUrls: ['./song-form.component.scss'],
})
export class SongFormComponent implements OnInit {
  public UserProfile: any;
  public artists: any;

  form: FormGroup;
  albums: any;
  genres: any;
  constructor(
    public fb: FormBuilder,
    private authService: AuthService,
    private apiSrvc: ApiService
  ) {
    this.authService.profileUser().subscribe((data: any) => {
      this.UserProfile = data;
    });

    this.artists = this.apiSrvc.getArtists();
    this.albums = this.apiSrvc.getAlbums();
    this.genres = this.apiSrvc.getGenres();

    this.form = this.fb.group({
      title: [''],
      duration: [''],
      artist: [],
      album: [],
      genre: [],
    });
    
  }


  
  submitForm() {
    var formData: any = new FormData();
    formData.append('title', this.form.get('title')?.value);
    formData.append('duration', this.form.get('duration')?.value);
    formData.append('artist', this.form.get('artist')?.value);
    formData.append('album', this.form.get('album')?.value);
    formData.append('genre', this.form.get('genre')?.value);
    this.apiSrvc.addSong(formData).subscribe(
      (response: any) => console.log(response),
      (error: any) => console.log(error)
    );
  }

  ngOnInit(): void {}
}
