import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/shared/api/api.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  public albums: any;
  public form: FormGroup;
  artists: any;

  constructor(public apiSrvc: ApiService, private fb:FormBuilder) {
    this.albums = this.apiSrvc.getAlbums();

    this.artists = this.apiSrvc.getArtists();

    this.form = this.fb.group({
      name: [''],
      artist: [''],
    });
   }

  ngOnInit(): void {
  }

  deleteAlbum(id:number){
    this.apiSrvc.deleteAlbum(id).subscribe(() => {
      this.albums = this.apiSrvc.getAlbums();
    })
  }

  submitForm() {
    var formData: any = new FormData();
    formData.append("name", this.form.get('name')?.value);
    formData.append("artist", this.form.get('artist')?.value);
    this.apiSrvc.addAlbum(formData).subscribe(
      (response: any) => console.log(response),
      (error: any) => console.log(error),
    )
    this.albums = this.apiSrvc.getAlbums();
  }
}
