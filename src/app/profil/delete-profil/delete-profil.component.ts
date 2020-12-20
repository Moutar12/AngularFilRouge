import { Component, OnInit } from '@angular/core';
import {ProfilService} from '../../profil.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-delete-profil',
  templateUrl: './delete-profil.component.html',
  styleUrls: ['./delete-profil.component.css']
})
export class DeleteProfilComponent implements OnInit {

  // @ts-ignore
  FormLogin: FormGroup;
  // @ts-ignore
  libelle: string;
  profil: any = {};
  constructor(private service: ProfilService, private fomBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.FormLogin = this.fomBuilder.group({
      libelle: ['', Validators.required]
    });
  }
  // tslint:disable-next-line:typedef
  onDelete(){
  }
}
