import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './shared/interceptor/auth.interceptor';
import { HomeComponent } from './components/home/home.component';
import { LibraryComponent } from './components/library/library.component';
import { SongsComponent } from './components/songs/songs.component';
import { PlaylistsComponent } from './components/playlists/playlists.component';
import { PlaylistFormComponent } from './components/playlists/form/playlist-form.component';
import { SongsGridComponent } from './components/songs/songs-grid/songs-grid.component';
import { AgGridModule } from 'ag-grid-angular';
import { GridApi } from 'ag-grid-community';
import { SongFormComponent } from './components/songs/song-form/song-form.component';
import { ArtistsComponent } from './components/artists/artists.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlbumsComponent } from './components/albums/albums.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    UserProfileComponent,
    HomeComponent,
    LibraryComponent,
    SongsComponent,
    PlaylistsComponent,
    PlaylistFormComponent,
    SongsGridComponent,
    SongFormComponent,
    ArtistsComponent,
    AlbumsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AgGridModule,
    NgbModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    GridApi
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
