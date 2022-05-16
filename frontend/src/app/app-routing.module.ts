import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistsComponent } from './components/artists/artists.component';
import { HomeComponent } from './components/home/home.component';
import { LibraryComponent } from './components/library/library.component';
import { PlaylistsComponent } from './components/playlists/playlists.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { SongsComponent } from './components/songs/songs.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AuthGuard } from './shared/auth-guard.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: SigninComponent},
  { path: 'register', component: SignupComponent},
  { path: 'home', component: HomeComponent, canActivateChild: [AuthGuard]},
  { path: 'profile', component: UserProfileComponent  , canActivateChild: [AuthGuard]},
  { path: 'library', component: LibraryComponent  , canActivateChild: [AuthGuard]},
  { path: 'songs', component: SongsComponent , canActivateChild: [AuthGuard]},
  { path: 'artists', component: ArtistsComponent , canActivateChild: [AuthGuard]},
  { path: 'playlist/:id', component: PlaylistsComponent  , canActivateChild: [AuthGuard]},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}