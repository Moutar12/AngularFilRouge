import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import jwt_decode from 'jwt-decode';
import {JwtHelperService} from '@auth0/angular-jwt';
import {map} from 'rxjs/operators';
import {BehaviorSubject, Observable} from 'rxjs';
import {UerModel} from '../Model/UerModel';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class JwtService {
  constructor(private httpClient: HttpClient, private router: Router) {
  }
  baseUrl = environment.baseUrl;
  helper = new JwtHelperService();
  decode: string | undefined ;

// tslint:disable-next-line:typedef
  login(username: string | undefined, password: string | undefined){
    // @ts-ignore
    // @ts-ignore
    return this.httpClient.post(this.baseUrl + '/login', {
      username, password
    }).pipe(
      map((response: any) => {

        const decode = this.helper.decodeToken(response.token);
     // @ts-ignore
        localStorage.setItem('token', response.token);
        console.log(decode.roles);
        // tslint:disable-next-line:triple-equals
     // @ts-ignore
        // tslint:disable-next-line:triple-equals
        if (decode.roles == 'ROLE_ADMIN') {
       this.router.navigate(['admin']) ;
     }
        // tslint:disable-next-line:triple-equals
     // @ts-ignore
        // tslint:disable-next-line:triple-equals
        if (decode.roles == 'ROLE_FORMATEUR'){
       this.router.navigate(['formateur']) ;
     }
     // @ts-ignore
        // tslint:disable-next-line:triple-equals
        if (decode.roles == 'ROLE_APPRENANT'){
          this.router.navigate(['apprenant']) ;
        }
        // @ts-ignore
        // tslint:disable-next-line:triple-equals
        if (decode.roles == 'ROLE_CM'){
          this.router.navigate(['cm']) ;
        }
      })
    );
  }
}
