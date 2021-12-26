import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/service/Auth.service';
import { PortalUtil } from 'src/app/shared/service/PortalUtil.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: any;
  userIsLogged = false;
  public invalidLogin = false;

  // eventEmitter = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService : AuthService
    ) {

    }

  ngOnInit(): void {
    if (this.authService.tokenAvailable()) {
      this.redirectToHome();
    }
    this.formLogin = this.fb.group({
      username: [''],
      password: ['']
    });
    this.invalidLogin = false;
  }

  validateLogin(): void {
    debugger;
    this.authService.validateLogin(this.formLogin.value).subscribe(
      (resultSuccess: any) => {
        localStorage.setItem('access_token', resultSuccess.token);
        PortalUtil.setToken(resultSuccess.token);
        this.authService.login();
        this.userIsLogged = true;
        window.setTimeout(()=>{this.redirectToHome()}, 1000)
    },
    (resultError: any) => {
        this.formLogin.reset();
        this.invalidLogin = true;

    });
  }

  redirectToHome(){
    this.router.navigate(['/home']);
  }

}
