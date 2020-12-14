import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {JwtService} from '../jwt.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // @ts-ignore
  formLogin: FormGroup = FormGroup;
  submitted = false;
  // @ts-ignore
  username: string ;
  // @ts-ignore
  password: string ;
  constructor(private from: FormBuilder, private jwtService: JwtService) { }
  // tslint:disable-next-line:typedef
  ngOnInit() {
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    this.formLogin = this.from.group({
          username: ['', [Validators.required]],
          password: ['', [Validators.required]]
      }
    ) ;
  }

  // tslint:disable-next-line:typedef
  // @ts-ignore
  // tslint:disable-next-line:typedef
  onSubmit() {

    this.submitted = true;
    // @ts-ignore
    if (this.formLogin.invalid){
      // console.log('pas cool') ;
      return;
    }
    // console.log('cool');
    // return;
    this.jwtService.login(this.username, this.password).subscribe(data => {
      return;
     }, err => console.log(err));
    }
}
