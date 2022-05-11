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
  constructor(
    public fb: FormBuilder,
    private authService: AuthService,
    private apiSrvc: ApiService
  ) {
    this.authService.profileUser().subscribe((data: any) => {
      this.UserProfile = data;
    });

    this.artists = this.apiSrvc.getArtists();

    this.form = this.fb.group({
      title: [''],
      duration: [''],
      artist: [],
    });
  }

  submitForm() {
    var formData: any = new FormData();
    formData.append('title', this.form.get('title')?.value);
    formData.append('duration', this.form.get('duration')?.value);
    formData.append('artist', this.form.get('artist')?.value);
    this.apiSrvc.addSong(formData).subscribe(
      (response: any) => console.log(response),
      (error: any) => console.log(error)
    );
  }

  ngOnInit(): void {}
}
