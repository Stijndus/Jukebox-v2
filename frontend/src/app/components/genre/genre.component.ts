import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api/api.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss'],
})
export class GenreComponent implements OnInit {
  public id: any;
  public genre: any;
  public songs: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiSrvc: ApiService
  ) {
    this.route.params.subscribe((params) => (this.id = params.id));
    this.apiSrvc.getGenre(this.id).subscribe((data) => {
      this.songs = data.songs;
      this.genre = data;
    });
  }

  ngOnInit(): void {}
}
