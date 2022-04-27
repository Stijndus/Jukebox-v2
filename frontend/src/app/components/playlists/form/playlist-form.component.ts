import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/shared/api/api.service';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { User } from '../../user-profile/user-profile.component';

@Component({
  selector: 'app-playlist-form',
  templateUrl: './playlist-form.component.html',
  styleUrls: ['./playlist-form.component.scss'],
})
export class PlaylistFormComponent implements OnInit {
  public UserProfile: User;

  form: FormGroup;
  constructor(public fb: FormBuilder, private authService: AuthService, private apiSrvc: ApiService) {
    this.authService.profileUser().subscribe((data: any) => {
      this.UserProfile = data;
    });

    this.form = this.fb.group({
      title: [''],
      description: [''],
      image: ['placeholder.png'],
      user_id: [],
    });
  }

  submitForm() {
    var formData: any = new FormData();
    formData.append("title", this.form.get('title')?.value);
    formData.append("description", this.form.get('description')?.value);
    formData.append("image", this.form.get('image')?.value);
    formData.append("user_id", this.UserProfile.id);
    this.apiSrvc.addPlaylist(formData).subscribe(
      (response: any) => console.log(response),
      (error: any) => console.log(error)
    )
  }

  ngOnInit(): void {}
}
