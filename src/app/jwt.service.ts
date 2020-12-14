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
  private currentUserSubject: BehaviorSubject<UerModel>| undefined;
  public currentUser: Observable<UerModel> | undefined;
  constructor(private httpClient: HttpClient,private router: Router) {
  }
  baseUrl = environment.baseUrl;
  helper = new JwtHelperService();
  decode: string ;

// tslint:disable-next-line:typedef
  login(username: string | undefined, password: string | undefined){
    // @ts-ignore
    // @ts-ignore
    return this.httpClient.post(this.baseUrl + '/login', {
      username, password
    }).pipe(
      map((response: any) => {
     this.decode = this.helper.decodeToken(response.token);
     console.log(this.decode['roles']);
        // tslint:disable-next-line:triple-equals
     if ( this.decode['roles'] == 'ROLE_ADMIN') {
            this.router.navigate(['admin']) ;
          }
      })
    );
  }
  // tslint:disable-next-line:typedef
  decoded(token: string): any{
    if (token){
      return jwt_decode(token);
    }
  }

}
