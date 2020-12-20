import { Component, OnInit } from '@angular/core';
import {ProfilService} from '../../profil.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-profil',
  templateUrl: './add-profil.component.html',
  styleUrls: ['./add-profil.component.css']
})
export class AddProfilComponent implements OnInit {
  // @ts-ignore
  profil: any = {};
  // @ts-ignore
  FormProfil: FormGroup;
  constructor(private service: ProfilService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // tslint:disable-next-line:no-unused-expression
    this.FormProfil = this.formBuilder.group({
      libelle: ['', Validators.required]
    });

  }
  // tslint:disable-next-line:typedef
  PostProfil(){
    this.service.addProfil(this.profil).subscribe(Post => {
      console.log(Post);
    });
  }
}
