import { Component, OnInit } from '@angular/core';
import {ProfilService} from '../profil.service';
import {ProfilModel} from '../../Model/ProfilModel';
import {HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  // @ts-ignore
  // tslint:disable-next-line:ban-types
  // @ts-ignore
 profils: any;
  id: number | undefined;

  constructor(private ServiceProfil: ProfilService) {

  }
    diplayeCloumns: string [] = ['id', 'libelle', 'update', 'delete'];
  ngOnInit(): void {
    this.ServiceProfil.getProfil().subscribe(
      data => {
        console.log(data);
        this.profils = data;
        this.profils = this.profils['hydra:member'];

      }, (error) => {
        console.log(error);
      }
    );
  }

  // tslint:disable-next-line:typedef
  onDelete(id: number) {
      console.log(id);
      this.ServiceProfil.deleteProfil(id).subscribe(data => {
      console.log(id);
    });
  }
  // tslint:disable-next-line:typedef
  modifierProfil(id: number){
    this.ServiceProfil.modifiProfil(id).subscribe(data => {
      console.log(data);
    });
  }
}
