import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  url = environment.baseUrl;
  // @ts-ignore
  id: number;
  // @ts-ignore
  constructor(private httpClient: HttpClient) {
  }
  // tslint:disable-next-line:typedef
  addProfil(libelle: any){
    // @ts-ignore
    return this.httpClient.post('http://127.0.0.1:8000/api/admin/profils', libelle);
  }
  // tslint:disable-next-line:typedef
  getProfil(){
    return this.httpClient.get(' http://127.0.0.1:8000/api/admin/profils');
  }

  // tslint:disable-next-line:typedef
  modifiProfil(libelle: any){
    // @ts-ignore
    return this.httpClient.put(`${this.url}/admin/profils/${id}`, libelle.id);
  }

  // tslint:disable-next-line:typedef
  deleteProfil(id: number | undefined){
    return this.httpClient.delete(`${this.url}/admin/profils/${id}`);
  }
}
