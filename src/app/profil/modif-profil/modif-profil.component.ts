import { Component, OnInit } from '@angular/core';
import {ProfilService} from '../../profil.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-modif-profil',
  templateUrl: './modif-profil.component.html',
  styleUrls: ['./modif-profil.component.css']
})
export class ModifProfilComponent implements OnInit {

  profil: any = {};
  // @ts-ignore
  FormProfil: FormGroup;
  constructor(private sercice: ProfilService, private formBulder: FormBuilder) { }

  ngOnInit(): void {
    this.FormProfil = this.formBulder.group({
      libelle: ['', Validators.required]
    });
  }
  // tslint:disable-next-line:typedef
  PutProfil(){
     this.sercice.modifiProfil(this.profil).subscribe(data => {
      console.log(data);
    });
  }
}
