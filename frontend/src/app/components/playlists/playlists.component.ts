import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss'],
})
export class PlaylistsComponent implements OnInit {
  public id: number;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => (this.id = params.id));
  }

  ngOnInit(): void {}
}
