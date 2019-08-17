import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthentService } from '../../../core/auth/auth.service';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';
import { UserService } from 'src/app/core/user/user.service';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {

  loginForm: FormGroup;
  @ViewChild('loginInput', { static: true }) loginInput: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private authentService: AuthentService,
    private userService: UserService,
    private router: Router,
    private platformDetectionService: PlatformDetectorService,
    ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  loginWithGoogle() {
    this.authentService.signInWithGoogle();
  }

  loginWithFacebook() {
    this.authentService.signInWithFB();
  }

  logout() {
    this.authentService.signOut();
  }

  login() {
    const login = this.loginForm.get('login').value;
    const password = this.loginForm.get('password').value;
    this.authentService.authenticate(login, password)
      .subscribe(
        () => {
            console.log('Usuario logado!');
            this.router.navigate(['']);
          },
        err => {
         // this.loginForm.reset();
          // tslint:disable-next-line:no-unused-expression
          this.platformDetectionService.isPlataformBrowser() && this.loginInput.nativeElement.focus();
          console.log(err);
        }
      );
  }

}
