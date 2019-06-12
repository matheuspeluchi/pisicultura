import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../core/auth/auth.service';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';

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
    private authService: AuthService,
    private router: Router,
    private platformDetectionService: PlatformDetectorService
    ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    const login = this.loginForm.get('login').value;
    const senha = this.loginForm.get('password').value;
    this.authService.authenticate(login, senha)
      .subscribe(
        () => {
            console.log('Usuario logado!')
            this.router.navigate(['']);
          },
        err => {
         // this.loginForm.reset();
          // tslint:disable-next-line:no-unused-expression
          this.platformDetectionService.isPlataformBrowser() && this.loginInput.nativeElement.focus();
          console.log(err.error);
        }
      );
  }

}
