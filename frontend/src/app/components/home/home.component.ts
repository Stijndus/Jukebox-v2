import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, skipWhile } from 'rxjs/operators';
import { ApiService } from 'src/app/shared/api/api.service';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { QueueService } from 'src/app/shared/queue/queue.service';
import { User } from '../user-profile/user-profile.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public UserProfile: User;

  form: FormGroup;
  formQueue: FormGroup;

  public queue: Observable<any>;
  public queueDuration: number = 0;
  public playlists: any;
  allSongs: any;

  constructor(
    public fb: FormBuilder,
    private apiSrvc: ApiService,
    private authService: AuthService,
    public QueueSrvc: QueueService
  ) {
    this.authService.profileUser().subscribe((data: any) => {
      this.UserProfile = data;
    });

    this.form = this.fb.group({
      title: [''],
      description: [''],
      image: ['placeholder.png'],
      user_id: [],
    });

    this.formQueue = this.fb.group({
      song: [],
    });

    this.queue = this.getSongsFromQueue();
    this.allSongs = this.apiSrvc.getSongs();

    this.authService.profileUser().subscribe((data: any) => {
      this.playlists = this.apiSrvc.getPlaylistsFromUser(data.id);
    });
  }

  public deleteFromQueue(index: any) {
    this.QueueSrvc.deleteFromQueue(index);
    this.queue = this.getSongsFromQueue();
  }

  public refreshData(): void {
    this.authService.profileUser().subscribe((data: any) => {
      this.playlists = this.apiSrvc.getPlaylistsFromUser(data.id);
    });
    this.queue = this.getSongsFromQueue();
  }

  public deletePlaylist(id: number) {
    this.apiSrvc.deletePlaylist(id).subscribe(() => {
      this.authService.profileUser().subscribe((data: any) => {
        this.playlists = this.apiSrvc.getPlaylistsFromUser(data.id);
      });
    });
  }

  submitForm() {
    var formData: any = new FormData();
    formData.append('title', this.form.get('title')?.value);
    formData.append('description', this.form.get('description')?.value);
    formData.append('image', this.form.get('image')?.value);
    formData.append('user_id', this.UserProfile.id);
    this.apiSrvc.addPlaylist(formData).subscribe(
      (response: any) => console.log(response),
      (error: any) => console.log(error)
    );
    this.refreshData();
  }

  submitQueueForm() {
    this.QueueSrvc.addSongToQueue(this.formQueue.get('song')?.value);
    this.queue = this.getSongsFromQueue();
  }

  addQueueAsPlaylist() {
    var formData: any = new FormData();
    console.log(this.QueueSrvc.getSongs());
    let queue: any = this.QueueSrvc.getSongs();
    formData.append('title', 'New playlist');
    formData.append('description', 'New Description');
    formData.append('image', 'placeholder.png');
    formData.append('user_id', this.UserProfile.id);
    formData.append('songs', queue);
    this.apiSrvc.addQueueAsPlaylist(formData).subscribe(
      (response: any) => console.log(response),
      (error: any) => console.log(error)
    );
    this.refreshData();
  }

  getSongsFromQueue(): Observable<any> {
    return this.QueueSrvc.getSongsFromQueue().pipe(
      skipWhile((v) => !v),
      map((data) => {
        if(!data.length){
          this.queueDuration = 0;
        }
        data.forEach((element: { duration: number }) => {
          this.queueDuration += element.duration;
        });
        return data;
      })
    );
  }

  clearQueue() {
    this.QueueSrvc.clearQueue();
    this.refreshData();
  }

  ngOnInit(): void {}
}
