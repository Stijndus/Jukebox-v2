import { Component, OnInit } from '@angular/core'
import { ApiService } from 'src/app/shared/api/api.service'

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss'],
})
export class SongsComponent implements OnInit {
  public songs: any[]

  constructor(private apiSrvc: ApiService) {
    this.apiSrvc.getSongs().subscribe((data) => (this.songs = data))
  }

  ngOnInit(): void {}
}
