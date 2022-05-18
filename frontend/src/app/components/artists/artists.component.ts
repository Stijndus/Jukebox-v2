import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/shared/api/api.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {
  public artists: any;
  public form: FormGroup;

  constructor(public apiSrvc: ApiService, private fb:FormBuilder) {
    this.artists = this.apiSrvc.getArtists();

    this.form = this.fb.group({
      name: [''],
      description: [''],
    });
   }

  ngOnInit(): void {
  }

  deleteArtist(id:number){
    this.apiSrvc.deleteArtist(id).subscribe(() => {
      this.artists = this.apiSrvc.getArtists();
    })
  }

  submitForm() {
    var formData: any = new FormData();
    formData.append("name", this.form.get('name')?.value);
    formData.append("description", this.form.get('description')?.value);
    this.apiSrvc.addArtist(formData).subscribe(
      (response: any) => console.log(response),
      (error: any) => console.log(error),
    )
    this.artists = this.apiSrvc.getArtists();
  }
}
