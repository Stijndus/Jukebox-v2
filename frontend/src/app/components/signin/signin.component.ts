import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { TokenService } from 'src/app/shared/token/token.service';
import { AuthStateService } from 'src/app/shared/auth-state/auth-state.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;
  errors: any = null;
  isSignedIn!: boolean;


  constructor(
    public router: Router,
    public fb: FormBuilder,
    public authService: AuthService,
    private token: TokenService,
    private authState: AuthStateService
  ) {
    this.loginForm = this.fb.group({
      email: [],
      password: [],
    });
  }

  ngOnInit() {
    this.authState.userAuthState.subscribe((val) => {
      this.isSignedIn = val;
    });
    if (this.isSignedIn) {
      this.router.navigate(['home']);
    }
  }

  onSubmit() {
    this.authService.signin(this.loginForm.value).subscribe(
      (result) => {
        this.responseHandler(result);
      },
      (error) => {
        this.errors = error.error;
      },
      () => {
        this.authState.setAuthState(true);
        this.loginForm.reset();
        this.router.navigate(['home']);
      }
    );
  }
  // Handle response
  responseHandler(data: any) {
    this.token.handleData(data.access_token);
  }
}
